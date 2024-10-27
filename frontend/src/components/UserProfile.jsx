import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Camera, ArrowLeft } from 'lucide-react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const UserProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    fullName: '', email: '', phone: '', address: '', gender: '',
    profileImage: null, profileImageUrl: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        setError('No user logged in');
        setLoading(false);
        return;
      }

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setProfile({
          ...profile,
          fullName: userData.fullName || '',
          email: userData.email || user.email || '',
          phone: userData.phone || '',
          address: userData.address || '',
          gender: userData.gender || '',
          profileImageUrl: userData.profileImageUrl || ''
        });
      } else {
        await setDoc(doc(db, 'users', user.uid), {
          fullName: user.displayName || '',
          email: user.email || '',
          gender: '',
          createdAt: new Date()
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch profile data');
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const user = auth.currentUser;
      if (!user) throw new Error('No user logged in');

      let profileImageUrl = profile.profileImageUrl;
      if (profile.profileImage) {
        const storageRef = ref(storage, `profile-images/${user.uid}`);
        await uploadBytes(storageRef, profile.profileImage);
        profileImageUrl = await getDownloadURL(storageRef);
      }

      await updateDoc(doc(db, 'users', user.uid), {
        fullName: profile.fullName,
        email: profile.email,
        phone: profile.phone,
        address: profile.address,
        gender: profile.gender,
        profileImageUrl,
        updatedAt: new Date()
      });

      setProfile(prev => ({ ...prev, profileImageUrl }));
      setSuccessMessage('Profile updated successfully');
      setIsEditing(false);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setError('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500" />
    </div>;
  }

  const handleInputChange = (e) => setProfile(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleImageChange = (e) => e.target.files[0] && setProfile(prev => ({ ...prev, profileImage: e.target.files[0] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-white">User Profile</h3>
            <p className="mt-1 text-sm text-gray-200">Manage your personal information</p>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 m-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {successMessage && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 m-4">
            <p className="text-sm text-green-700">{successMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
          <div className="py-6 px-4 sm:p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <img
                  src={profile.profileImageUrl || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-indigo-600 rounded-full p-2 cursor-pointer hover:bg-indigo-700">
                    <Camera className="h-5 w-5 text-white" />
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  </label>
                )}
              </div>
            </div>

            {['fullName', 'gender', 'email', 'phone', 'address'].map((field) => (
              <div key={field} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  {field === 'fullName' && <User className="h-5 w-5 mr-2 text-gray-400" />}
                  {field === 'email' && <Mail className="h-5 w-5 mr-2 text-gray-400" />}
                  {field === 'phone' && <Phone className="h-5 w-5 mr-2 text-gray-400" />}
                  {field === 'address' && <MapPin className="h-5 w-5 mr-2 text-gray-400" />}
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === 'gender' ? (
                  <select
                    name={field}
                    value={profile[field]}
                    onChange={handleInputChange}
                    disabled={!isEditing || field === 'email'}
                    className={`mt-1 block w-full rounded-md ${
                      isEditing && field !== 'email'
                        ? 'border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                        : 'border-transparent bg-gray-100'
                    } sm:text-sm`}
                  >
                    <option value="">Select Gender</option>
                    {['male', 'female', 'other'].map(option => (
                      <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
                    ))}
                  </select>
                ) : field === 'address' ? (
                  <textarea
                    name={field}
                    value={profile[field]}
                    onChange={handleInputChange}
                    disabled={!isEditing || field === 'email'}
                    rows="3"
                    className={`mt-1 block w-full rounded-md ${
                      isEditing && field !== 'email'
                        ? 'border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                        : 'border-transparent bg-gray-100'
                    } sm:text-sm`}
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    value={profile[field]}
                    onChange={handleInputChange}
                    disabled={!isEditing || field === 'email'}
                    className={`mt-1 block w-full rounded-md ${
                      isEditing && field !== 'email'
                        ? 'border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                        : 'border-transparent bg-gray-100'
                    } sm:text-sm`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            {isEditing ? (
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;