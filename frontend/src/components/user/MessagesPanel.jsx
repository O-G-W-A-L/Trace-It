import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowLeft,
  Trash2,
  Clock,
  AlertCircle
} from 'lucide-react';
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { motion } from 'framer-motion';

const MessagePanel = ({ currentUser, isOpen, onClose }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages]   = useState([]);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Subscribe to messages when panel opens
  useEffect(() => {
    let unsubscribe;
    if (currentUser?.email) {
      setLoading(true);
      const q = query(
        collection(db, 'messages'),
        orderBy('timestamp', 'desc')
      );
      unsubscribe = onSnapshot(q, snap => {
        const data = snap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .filter(m =>
            m.recipientEmail === currentUser.email ||
            m.senderEmail    === currentUser.email
          );
        setMessages(data);
        setLoading(false);
        scrollToBottom();
      }, err => {
        console.error(err);
        setError('Failed to load messages');
        setLoading(false);
      });
    }
    return () => unsubscribe && unsubscribe();
  }, [currentUser, scrollToBottom]);

  // Always scroll on new messages
  useEffect(scrollToBottom, [messages, scrollToBottom]);

  const handleSend = async e => {
    e.preventDefault();
    if (!newMessage.trim() || !currentUser?.email) return;
    try {
      await addDoc(collection(db, 'messages'), {
        content:       newMessage.trim(),
        senderEmail:   currentUser.email,
        senderName:    currentUser.displayName || currentUser.email,
        recipientEmail:'admin@example.com',
        sender:        'User',
        recipient:     'Admin',
        timestamp:     serverTimestamp(),
      });
      setNewMessage('');
    } catch (err) {
      console.error(err);
      setError('Failed to send message');
    }
  };

  const formatTimestamp = ts =>
    ts ? ts.toDate().toLocaleString() : 'Sending...';

  const isUserMessage = msg =>
    msg.senderEmail === currentUser?.email || msg.sender === 'User';

  return (
    <motion.div
      // slide in/out horizontally; keeps component mounted so state persists
      initial={false}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="
        fixed inset-0 z-50 flex flex-col bg-white
        sm:hidden
      "
      style={{ width: '100%', height: '100%' }}
    >
      {/* Header with Back Button */}
      <div className="flex items-center p-4 border-b">
        <button
          onClick={onClose}
          aria-label="Go back"
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <ArrowLeft className="h-6 w-6 text-gray-700" />
        </button>
        <h2 className="ml-3 text-lg font-semibold text-gray-800">
          Messages
        </h2>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 mx-4 my-2 rounded-md">
          {error}
        </div>
      )}

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col-reverse">
        <div ref={messagesEndRef} />
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-4">
            No messages yet
          </div>
        ) : (
          messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${
                isUserMessage(msg) ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`
                  max-w-[70%] rounded-lg p-3
                  ${isUserMessage(msg) ? 'bg-indigo-100' : 'bg-green-100'}
                `}
              >
                <div className="text-xs text-gray-600 mb-1">
                  {isUserMessage(msg)
                    ? 'You'
                    : msg.senderName || 'Admin'}
                </div>
                <p className="break-words text-base">
                  {msg.content}
                </p>
                <div className="mt-1 flex items-center text-xs text-gray-500 gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{formatTimestamp(msg.timestamp)}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        className="p-4 border-t flex gap-2"
      >
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type a message to admin..."
          className="
            flex-1 px-3 py-2 border rounded-md
            focus:outline-none focus:ring-2 focus:ring-indigo-500
          "
        />
        <button
          type="submit"
          disabled={loading || !newMessage.trim()}
          className="
            px-4 py-2 bg-indigo-600 text-white rounded-md
            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500
            disabled:opacity-50
          "
        >
          Send
        </button>
      </form>
    </motion.div>
  );
};

export default MessagePanel;
