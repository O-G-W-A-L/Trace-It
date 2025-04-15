import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Bell,
  CheckCircle,
  X,
  AlertCircle,
  Trash2,
  Clock,
  MailOpen
} from 'lucide-react';
import { formatDistanceToNow, format } from 'date-fns';
import { deleteDoc, doc, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = ['All', 'Unread', 'Read'];

const Notification = ({
  notifications,
  markAsRead,
  onNotificationClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [deletingId, setDeletingId] = useState(null);
  const dropdownRef = useRef(null);

  const handleOutside = useCallback((e) => {
    if (isOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [handleOutside]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const filtered = notifications.filter((n) => {
    if (activeTab === 'Unread') return !n.isRead;
    if (activeTab === 'Read') return n.isRead;
    return true;
  });

  const handleToggle = () => setIsOpen(o => !o);

  const handleClick = async (notif) => {
    if (!notif.isRead) {
      await markAsRead(notif.id);
    }
    onNotificationClick?.(notif);
    setIsOpen(false);
  };

  const handleDelete = async (notificationId) => {
    setDeletingId(notificationId);
    try {
      await deleteDoc(doc(db, 'notifications', notificationId));
      onNotificationClick?.();
    } catch (error) {
      console.error('Delete error:', error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleDeleteAll = async () => {
    if (!window.confirm('Delete all notifications?')) return;
    
    try {
      const batch = writeBatch(db);
      notifications.forEach(n => batch.delete(doc(db, 'notifications', n.id)));
      await batch.commit();
      onNotificationClick?.();
    } catch (error) {
      console.error('Mass delete error:', error);
    }
  };

  const getNotificationIcon = (type) => {
    const baseClass = 'h-5 w-5 flex-shrink-0';
    switch (type) {
      case 'success':
        return <CheckCircle className={`${baseClass} text-green-500`} />;
      case 'error':
        return <AlertCircle className={`${baseClass} text-red-500`} />;
      default:
        return <MailOpen className={`${baseClass} text-blue-500`} />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        aria-label="Notifications"
        className="relative p-2 rounded-full backdrop-blur-sm bg-white/50 hover:bg-white transition-all shadow-sm hover:shadow-md ring-1 ring-gray-200/50 hover:ring-gray-300"
      >
        <Bell className="h-6 w-6 text-gray-700" />
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-sm"
          >
            {unreadCount}
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 min-w-[300px] max-w-[400px] bg-white/95 backdrop-blur-lg rounded-xl shadow-xl ring-1 ring-gray-100 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-white to-gray-50/50 border-b">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggle}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex px-4 border-b">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-3 text-sm font-medium transition-colors
                    ${activeTab === tab
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Body */}
            <div className="max-h-96 overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="p-6 text-center">
                  <AlertCircle className="h-8 w-8 mx-auto mb-3 text-gray-400" />
                  <p className="text-sm text-gray-500">No {activeTab.toLowerCase()} notifications</p>
                </div>
              ) : (
                <motion.ul className="divide-y divide-gray-100/50">
                  <AnimatePresence>
                    {filtered.map(n => (
                      <motion.li
                        key={n.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="relative group"
                      >
                        <div
                          onClick={() => handleClick(n)}
                          className={`w-full text-left px-4 py-3 flex gap-3 items-start transition-colors
                            ${n.isRead
                              ? 'bg-white hover:bg-gray-50/50'
                              : 'bg-blue-50/50 hover:bg-blue-100/30'}`}
                        >
                          <div className="mt-1">
                            {getNotificationIcon(n.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <p className={`text-sm font-medium truncate ${
                                n.isRead ? 'text-gray-900' : 'text-blue-800'
                              }`}>
                                {n.title}
                              </p>
                              <button
                                onClick={async (e) => {
                                  e.stopPropagation();
                                  await handleDelete(n.id);
                                }}
                                className="opacity-0 group-hover:opacity-100 p-1.5 -mt-1 -mr-2 rounded-lg hover:bg-gray-100 transition-opacity"
                              >
                                {deletingId === n.id ? (
                                  <div className="h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                                ) : (
                                  <Trash2 className="h-4 w-4 text-gray-400 hover:text-red-500" />
                                )}
                              </button>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{n.message}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <time
                                title={format(n.timestamp?.toDate(), 'PPpp')}
                                className="text-xs text-gray-400"
                              >
                                {formatDistanceToNow(n.timestamp?.toDate(), { addSuffix: true })}
                              </time>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>
              )}
            </div>

            {/* Footer */}
            {filtered.length > 0 && (
              <div className="p-3 bg-gray-50/50 border-t flex justify-between">
                <button
                  onClick={handleDeleteAll}
                  className="px-3 py-1.5 text-sm flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear All
                </button>
                <button
                  onClick={() => notifications.forEach(n => markAsRead(n.id))}
                  className="px-3 py-1.5 text-sm flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <CheckCircle className="h-4 w-4" />
                  Mark All Read
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notification;