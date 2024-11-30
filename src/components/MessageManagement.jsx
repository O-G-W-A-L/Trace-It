import React, { useState, useRef, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Send, Search, Menu, X } from 'lucide-react';

const MessageManagement = ({ messages = [], users = [], fetchData, showToast }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [localMessages, setLocalMessages] = useState(messages);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [unreadCounts, setUnreadCounts] = useState({});
  const messagesEndRef = useRef(null);
  const lastMessageRef = useRef(null);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [localMessages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedUser]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.style.paddingBottom = '80px';
    }
  }, [localMessages]);

  useEffect(() => {
    // Calculate unread counts and last messages for each user
    const counts = {};
    const userLastMessages = {};

    localMessages.forEach(message => {
      if (message.recipientEmail === 'admin@example.com' && !message.read) {
        counts[message.senderEmail] = (counts[message.senderEmail] || 0) + 1;
      }
      
      // Track last message timestamp for sorting
      const timestamp = message.timestamp instanceof Date ? message.timestamp : message.timestamp?.toDate();
      if (timestamp) {
        userLastMessages[message.senderEmail] = Math.max(
          userLastMessages[message.senderEmail] || 0,
          timestamp.getTime()
        );
      }
    });

    setUnreadCounts(counts);
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
        read: false
      };

      const docRef = await addDoc(collection(db, 'messages'), {
        ...newMessageData,
        timestamp: serverTimestamp(),
      });

      setLocalMessages(prev => [...prev, { ...newMessageData, id: docRef.id }]);
      setNewMessage('');
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error('Error sending message:', error);
      showToast('Failed to send message. Please try again.', 'error');
    }
  };

  const markMessagesAsRead = async (userEmail) => {
    try {
      const userMessages = localMessages.filter(
        msg => msg.senderEmail === userEmail && !msg.read
      );

      // Update messages in Firebase
      const updatePromises = userMessages.map(msg =>
        updateDoc(doc(db, 'messages', msg.id), { read: true })
      );
      await Promise.all(updatePromises);

      // Update local state
      setLocalMessages(prev =>
        prev.map(msg =>
          msg.senderEmail === userEmail ? { ...msg, read: true } : msg
        )
      );

      // Update unread counts
      setUnreadCounts(prev => ({
        ...prev,
        [userEmail]: 0
      }));
    } catch (error) {
      console.error('Error marking messages as read:', error);
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

  // Sort users based on their last message timestamp
  const sortedUsers = [...users].sort((a, b) => {
    const aLastMessage = localMessages
      .filter(msg => msg.senderEmail === a.email || msg.recipientEmail === a.email)
      .sort((m1, m2) => {
        const t1 = m1.timestamp instanceof Date ? m1.timestamp : m1.timestamp?.toDate();
        const t2 = m2.timestamp instanceof Date ? m2.timestamp : m2.timestamp?.toDate();
        return t2 - t1;
      })[0];

    const bLastMessage = localMessages
      .filter(msg => msg.senderEmail === b.email || msg.recipientEmail === b.email)
      .sort((m1, m2) => {
        const t1 = m1.timestamp instanceof Date ? m1.timestamp : m1.timestamp?.toDate();
        const t2 = m2.timestamp instanceof Date ? m2.timestamp : m2.timestamp?.toDate();
        return t2 - t1;
      })[0];

    if (!aLastMessage && !bLastMessage) return 0;
    if (!aLastMessage) return 1;
    if (!bLastMessage) return -1;

    const aTime = aLastMessage.timestamp instanceof Date ? aLastMessage.timestamp : aLastMessage.timestamp?.toDate();
    const bTime = bLastMessage.timestamp instanceof Date ? bLastMessage.timestamp : bLastMessage.timestamp?.toDate();
    
    return bTime - aTime;
  });

  const filteredUsers = sortedUsers.filter(user =>
    (user.fullName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (user.email?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  const filteredMessages = [...localMessages]
    .sort((a, b) => {
      if (!a.timestamp || !b.timestamp) return 0;
      const dateA = a.timestamp instanceof Date ? a.timestamp : a.timestamp.toDate();
      const dateB = b.timestamp instanceof Date ? b.timestamp : b.timestamp.toDate();
      return dateA - dateB;
    })
    .filter(msg => 
      selectedUser && (
        (msg.senderEmail === selectedUser.email && msg.recipientEmail === 'admin@example.com') ||
        (msg.senderEmail === 'admin@example.com' && msg.recipientEmail === selectedUser.email)
      )
    );

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Sidebar */}
      <aside className={`
        fixed md:relative inset-y-0 left-0 z-50 md:z-auto
        w-[280px] lg:w-[320px]
        bg-white shadow-lg
        transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-between">
            <h2 className="text-white text-lg font-semibold">Messages</h2>
            <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-3 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => {
                  setSelectedUser(user);
                  setIsMobileMenuOpen(false);
                  markMessagesAsRead(user.email);
                }}
                className={`
                  flex items-center gap-3 p-3 cursor-pointer
                  transition-all duration-200
                  hover:bg-gray-50
                  ${selectedUser?.id === user.id ? 'bg-blue-50 border-l-4 border-blue-600' : 'border-l-4 border-transparent'}
                `}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">
                    {(user.fullName || 'U')[0].toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-900 truncate">
                      {user.fullName || 'Unnamed User'}
                    </p>
                    {unreadCounts[user.email] > 0 && (
                      <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {unreadCounts[user.email]}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white hover:bg-white/10 rounded-full p-2"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h3 className="text-white text-lg font-semibold truncate">
            {selectedUser ? selectedUser.fullName : 'Select a conversation'}
          </h3>
        </div>

        <div ref={messageContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {filteredMessages.map((message, index) => (
            <div
              key={message.id}
              ref={index === filteredMessages.length - 1 ? lastMessageRef : null}
              className={`flex ${message.sender === 'Admin' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`
                max-w-[75%] rounded-lg p-3
                ${message.sender === 'Admin'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border shadow-sm'
                }
              `}>
                <p className="text-sm break-words">{message.content}</p>
                <p className={`text-xs mt-1 ${message.sender === 'Admin' ? 'text-blue-100' : 'text-gray-500'}`}>
                  {formatTimestamp(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 bg-white border-t">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={selectedUser ? `Message ${selectedUser.fullName}...` : 'Select a user to start messaging'}
              disabled={!selectedUser}
              className="flex-1 px-4 py-2 rounded-full bg-gray-50 border focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!newMessage.trim() || !selectedUser}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default MessageManagement;