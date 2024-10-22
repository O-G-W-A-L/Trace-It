import React, { useState } from 'react';
import axios from 'axios';

const MessageManagement = ({ messages, users, fetchData, showToast }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/messages', {
        content: newMessage,
        recipient: selectedUser ? selectedUser._id : 'all'
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setNewMessage('');
      fetchData();
      showToast('Message sent successfully', 'success');
    } catch (error) {
      console.error('Error sending message:', error);
      showToast('Failed to send message. Please try again.', 'error');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Users</h3>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-300px)]">
          {users.map((user) => (
            <div
              key={user._id}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${
                selectedUser && selectedUser._id === user._id ? 'bg-gray-100' : ''
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-medium text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden md:col-span-2">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Messages</h3>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-400px)] p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'Admin' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'Admin' ? 'bg-blue-100 text-blue-900' : 'bg-gray-100'
              }`}>
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-70">
                  {new Date(message.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 mr-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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