import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Camera, ArrowLeft, Edit2, Save, Calendar, Briefcase, Globe } from 'lucide-react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

const AdminProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    profileImageUrl: '',
    bio: '',
    occupation: '',
    birthdate: '',
    website: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState({ loading: true, error: null, success: '' });
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { currentUser } = getAuth();
  const db = getFirestore();
  const storage = getStorage();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        if (!currentUser) throw new Error('No user logged in');
        const userData = (await getDoc(doc(db, 'users', currentUser.uid))).data() || {};
        
        // Ensure all fields are populated (using empty strings if not available)
        setProfile({
          fullName: userData.fullName || '',
          email: currentUser.email || '',
          phone: userData.phone || '',
          address: userData.address || '',
          gender: userData.gender || '',
          profileImageUrl: userData.profileImageUrl || '',
          bio: userData.bio || '',
          occupation: userData.occupation || '',
          birthdate: userData.birthdate || '',
          website: userData.website || ''
        });
      } catch (error) {
        setStatus(prev => ({ ...prev, error: 'Failed to load profile' }));
      } finally {
        setStatus(prev => ({ ...prev, loading: false }));
      }
    };
    loadProfile();
  }, [currentUser, db]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prev => ({ ...prev, loading: true, error: null }));

    try {
      let imageUrl = profile.profileImageUrl;
      if (newImage) {
        const imageRef = ref(storage, `profile-images/${currentUser.uid}`);
        await uploadBytes(imageRef, newImage);
        imageUrl = await getDownloadURL(imageRef);
      }

      await updateDoc(doc(db, 'users', currentUser.uid), {
        ...profile,
        profileImageUrl: imageUrl,
        updatedAt: new Date()
      });

      setProfile(prev => ({ ...prev, profileImageUrl: imageUrl }));
      setStatus(prev => ({ ...prev, success: 'Profile updated successfully ✨' }));
      setIsEditing(false);
      setTimeout(() => setStatus(prev => ({ ...prev, success: '' })), 3000);
    } catch (error) {
      setStatus(prev => ({ ...prev, error: 'Update failed' }));
    } finally {
      setStatus(prev => ({ ...prev, loading: false }));
    }
  };

  if (status.loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-violet-50 to-indigo-100">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-8 w-8 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  const formFields = [
    { name: 'fullName', icon: User, type: 'text', placeholder: 'Your Full Name' },
    { name: 'phone', icon: Phone, type: 'tel', placeholder: 'Your Phone Number' },
    { name: 'address', icon: MapPin, type: 'text', placeholder: 'Your Address' },
    { name: 'occupation', icon: Briefcase, type: 'text', placeholder: 'Your Occupation' },
    { name: 'website', icon: Globe, type: 'url', placeholder: 'Your Website' },
    { name: 'birthdate', icon: Calendar, type: 'date', placeholder: 'Your Birthdate' },
    { name: 'gender', icon: User, type: 'select', options: ['male', 'female', 'other'] },
    { name: 'bio', icon: Mail, type: 'textarea', placeholder: 'Tell us about yourself' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <div className="md:flex">
            {/* Profile Sidebar */}
            <div className="md:w-1/3 bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 p-8 flex flex-col items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute inset-0 bg-pattern"></div>
              </div>
              <div className="relative z-10">
                <div className="relative group">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform duration-300 transform hover:scale-105">
                    <img
                      src={imagePreview || profile.profileImageUrl || 'https://via.placeholder.com/150'}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    {isEditing && (
                      <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Camera className="h-8 w-8 text-white" />
                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                      </label>
                    )}
                  </div>
                </div>
                <h2 className="mt-6 text-3xl font-bold text-white text-center">{profile.fullName}</h2>
                <p className="mt-2 text-indigo-200 text-center">{profile.email}</p>
                {profile.occupation && (
                  <p className="mt-2 text-indigo-200 text-center flex items-center justify-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {profile.occupation}
                  </p>
                )}
              </div>
            </div>

            {/* Profile Form */}
            <div className="flex-1 p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 flex items-center">
                  Profile Details
                  {isEditing && <span className="ml-3 text-sm text-indigo-600">(Editing Mode)</span>}
                </h3>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center px-4 py-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Dashboard
                </button>
              </div>

              {status.error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md animate-fadeIn">
                  {status.error}
                </div>
              )}
              {status.success && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-md animate-fadeIn">
                  {status.success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {formFields.map(({ name, icon: Icon, type, placeholder, options }, index) => (
                    <div key={index}>
                      <label htmlFor={name} className="block text-sm font-medium text-gray-600">
                        {placeholder}
                      </label>
                      <div className="mt-1 relative">
                        {type === 'select' ? (
                          <select
                            id={name}
                            name={name}
                            value={profile[name]}
                            onChange={(e) => setProfile({ ...profile, [name]: e.target.value })}
                            disabled={!isEditing}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          >
                            <option value="">Select your gender</option>
                            {options.map((option, idx) => (
                              <option key={idx} value={option}>
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                              </option>
                            ))}
                          </select>
                        ) : type === 'textarea' ? (
                          <textarea
                            id={name}
                            name={name}
                            value={profile[name]}
                            onChange={(e) => setProfile({ ...profile, [name]: e.target.value })}
                            disabled={!isEditing}
                            placeholder={placeholder}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        ) : (
                          <input
                            id={name}
                            name={name}
                            type={type}
                            value={profile[name]}
                            onChange={(e) => setProfile({ ...profile, [name]: e.target.value })}
                            disabled={!isEditing}
                            placeholder={placeholder}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {isEditing && (
                  <div className="mt-6 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                    >
                      {status.loading ? 'Updating...' : 'Save Changes'}
                    </button>
                  </div>
                )}
                {!isEditing && (
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                    >
                      <Edit2 className="h-5 w-5 inline-block mr-2" />
                      Edit Profile
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;