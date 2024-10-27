import React, { useState, useRef, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const MessageManagement = ({ messages, users, fetchData, showToast }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [localMessages, setLocalMessages] = useState(messages);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [localMessages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !selectedUser) {
      showToast('Please select a user and enter a message', 'error');
      return;
    }

    try {
      const newMessageData = {
        content: newMessage.trim(),
        senderEmail: 'admin@example.com',
        recipientEmail: selectedUser.email,
        sender: 'Admin',
        recipient: 'User',
        timestamp: new Date(),
      };

      const docRef = await addDoc(collection(db, 'messages'), {
        ...newMessageData,
        timestamp: serverTimestamp(),
      });

      setLocalMessages(prevMessages => [...prevMessages, { 
        ...newMessageData, 
        id: docRef.id
      }]);
      
      setNewMessage('');
      scrollToBottom();
    } catch (error) {
      console.error('Error sending message:', error);
      showToast('Failed to send message. Please try again.', 'error');
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp instanceof Date ? timestamp : timestamp.toDate();
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const sortedMessages = [...localMessages].sort((a, b) => {
    if (!a.timestamp || !b.timestamp) return 0;
    const dateA = a.timestamp instanceof Date ? a.timestamp : a.timestamp.toDate();
    const dateB = b.timestamp instanceof Date ? b.timestamp : b.timestamp.toDate();
    return dateB - dateA;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="text-lg font-semibold">Users</h3>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-300px)]">
          {users.map((user) => (
            <div
              key={user.id}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 transition duration-150 ${
                selectedUser?.id === user.id ? 'bg-blue-50' : ''
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                {user.profileImageUrl ? (
                  <img 
                    src={user.profileImageUrl} 
                    alt={user.fullName} 
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {user.fullName?.charAt(0).toUpperCase() || '?'}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">{user.fullName || 'Unnamed User'}</p>
                <p className="text-sm text-gray-500 truncate">{user.email || 'No email'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden md:col-span-2">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="text-lg font-semibold">
            {selectedUser ? `Chat with ${selectedUser.fullName}` : 'Select a user to start messaging'}
          </h3>
        </div>
        <div className="flex flex-col-reverse overflow-y-auto h-[calc(100vh-400px)] p-4">
          <div ref={messagesEndRef} />
          {sortedMessages
            .filter(msg => 
              selectedUser && (
                (msg.senderEmail === selectedUser.email && msg.recipientEmail === 'admin@example.com') ||
                (msg.senderEmail === 'admin@example.com' && msg.recipientEmail === selectedUser.email)
              )
            )
            .map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'Admin' ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'Admin' 
                    ? 'bg-blue-100 text-blue-900' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-base">{message.content}</p>
                  <p className="text-xs mt-2 opacity-70">
                    {formatTimestamp(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="p-4 border-t bg-gray-50">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={selectedUser ? `Message ${selectedUser.fullName}...` : 'Select a user to message'}
              disabled={!selectedUser}
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={!newMessage.trim() || !selectedUser}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageManagement;