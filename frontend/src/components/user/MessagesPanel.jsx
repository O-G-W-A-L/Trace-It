import React, { useState, useEffect, useRef } from 'react';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/config';

const MessagePanel = ({ currentUser, isOpen, onClose }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let unsubscribe;
    if (isOpen && currentUser?.email) {
      const messagesQuery = query(
        collection(db, 'messages'),
        orderBy('timestamp', 'desc') // Changed to 'desc' for latest first
      );
      
      setLoading(true);
      unsubscribe = onSnapshot(
        messagesQuery,
        (querySnapshot) => {
          const messagesData = querySnapshot.docs
            .map(doc => ({
              id: doc.id,
              ...doc.data()
            }))
            .filter(msg => 
              msg.recipientEmail === currentUser.email ||
              msg.senderEmail === currentUser.email
            );
          setMessages(messagesData);
          setLoading(false);
          scrollToBottom();
        },
        (error) => {
          console.error('Error fetching messages:', error);
          setError('Failed to load messages');
          setLoading(false);
        }
      );
    }
    return () => unsubscribe && unsubscribe();
  }, [isOpen, currentUser]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !currentUser?.email) return;

    try {
      await addDoc(collection(db, 'messages'), {
        content: newMessage.trim(),
        senderEmail: currentUser.email,
        senderName: currentUser.displayName || currentUser.email,
        recipientEmail: 'admin@example.com',
        sender: 'User',
        recipient: 'Admin',
        timestamp: serverTimestamp(),
      });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message');
    }
  };

  const formatTimestamp = (timestamp) => timestamp ? timestamp.toDate().toLocaleString() : 'Sending...';
  const isUserMessage = (message) => message.senderEmail === currentUser?.email || message.sender === 'User';

  if (!isOpen) return null;

  return (
    <div className="bg-white h-full flex flex-col">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold">Messages with Admin</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
      </div>
      
      {error && <div className="bg-red-100 text-red-700 p-3 m-4 rounded-md">{error}</div>}

      <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col-reverse">
        <div ref={messagesEndRef} />
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-4">No messages yet</div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`flex ${isUserMessage(message) ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] rounded-lg p-3 ${isUserMessage(message) ? 'bg-indigo-100' : 'bg-green-100'}`}>
                <div className="text-xs text-gray-600 mb-1">
                  {isUserMessage(message) ? 'You' : message.senderName || 'Admin'}
                </div>
                <p className="break-words">{message.content}</p>
                <p className="text-xs mt-1 text-gray-500">{formatTimestamp(message.timestamp)}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message to admin..."
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={loading || !newMessage.trim()}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessagePanel;