import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Camera, ArrowLeft, Edit2, Save } from 'lucide-react';
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
        setProfile(prev => ({ ...prev, ...userData, email: userData.email || user.email || '' }));
      } else {
        await setDoc(doc(db, 'users', user.uid), {
          fullName: user.displayName || '',
          email: user.email || '',
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
        ...profile,
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
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" />
    </div>;
  }

  const handleInputChange = (e) => setProfile(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleImageChange = (e) => e.target.files[0] && setProfile(prev => ({ ...prev, profileImage: e.target.files[0] }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 md:w-64 flex flex-col items-center justify-center">
            <div className="relative mb-4">
              <img
                src={profile.profileImageUrl || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer shadow-lg">
                  <Camera className="h-5 w-5 text-purple-600" />
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              )}
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white text-center">{profile.fullName}</h2>
            <p className="mt-1 text-indigo-200">{profile.email}</p>
          </div>
          <div className="p-8 md:flex-1">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">User Profile</h3>
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Dashboard
              </button>
            </div>
            {error && (
              <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                <p>{error}</p>
              </div>
            )}
            {successMessage && (
              <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
                <p>{successMessage}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'fullName', icon: User, type: 'text' },
                { name: 'phone', icon: Phone, type: 'tel' },
                { name: 'address', icon: MapPin, type: 'text' },
                { name: 'gender', icon: User, type: 'select', options: ['male', 'female', 'other'] }
              ].map(({ name, icon: Icon, type, options }) => (
                <div key={name} className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon className="h-5 w-5 text-gray-400" />
                    </div>
                    {type === 'select' ? (
                      <select
                        name={name}
                        value={profile[name]}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value="">Select {name}</option>
                        {options.map(option => (
                          <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={type}
                        name={name}
                        value={profile[name]}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      />
                    )}
                  </div>
                </div>
              ))}
              <div className="flex justify-end">
                {isEditing ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="mr-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;