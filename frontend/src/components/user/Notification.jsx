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
import { formatDistanceToNow } from 'date-fns';
import { deleteDoc, doc, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = ['All', 'Unread', 'Read'];

/** ★ Custom hook: sync state ↔ localStorage */
function useLocalStorage(key, defaultValue) {
  const [stored, setStored] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(stored));
    } catch {}
  }, [key, stored]);

  return [stored, setStored];
}

const Notification = ({
  notifications = [],
  markAsRead = () => {},
  onNotificationClick = () => {}
}) => {
  // ← replace manual state with persisted map { [id]: true }
  const [readStatus, setReadStatus] = useLocalStorage('readStatus', {});
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

  /** derive each notification’s read flag from persisted map */
  const isRead = (n) => readStatus[n.id] ?? n.isRead;

  const unreadCount = notifications.filter(n => !isRead(n)).length;

  const filtered = notifications.filter(n => {
    if (activeTab === 'Unread') return !isRead(n);
    if (activeTab === 'Read')   return isRead(n);
    return true;
  });

  const toggleOpen = () => setIsOpen(o => !o);

  const onClickNotif = async (n) => {
    if (!isRead(n)) {
      // 1) mark backend
      await markAsRead(n.id);
      // 2) persist locally
      setReadStatus(prev => ({ ...prev, [n.id]: true }));
    }
    onNotificationClick(n);
    setIsOpen(false);
  };

  const deleteOne = async (id) => {
    setDeletingId(id);
    try {
      await deleteDoc(doc(db, 'notifications', id));
      // remove from local map
      setReadStatus(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
      onNotificationClick();
    } catch (err) {
      console.error(err);
    } finally {
      setDeletingId(null);
    }
  };

  const deleteAll = async () => {
    if (!window.confirm('Delete all notifications?')) return;
    try {
      const batch = writeBatch(db);
      notifications.forEach(n => batch.delete(doc(db, 'notifications', n.id)));
      await batch.commit();
      // clear persisted map
      setReadStatus({});
      onNotificationClick();
    } catch (err) {
      console.error(err);
    }
  };

  const iconFor = (type) => {
    const base = 'flex-shrink-0';
    switch (type) {
      case 'success': return <CheckCircle className={`${base} h-6 w-6`} />;
      case 'error':   return <AlertCircle className={`${base} h-6 w-6`} />;
      default:        return <MailOpen className={`${base} h-6 w-6`} />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef} aria-live="polite">
      {/* Bell Icon */}
      <button
        onClick={toggleOpen}
        aria-label="Toggle notifications"
        className="relative p-3 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white shadow ring-1 ring-gray-200 transition"
      >
        <Bell className="h-6 w-6 text-gray-700" />
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            {unreadCount}
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="
              fixed inset-x-4 top-20
              sm:absolute sm:inset-auto sm:right-0 sm:mt-2
              w-auto max-w-[90vw] sm:min-w-[300px] sm:max-w-[400px]
              bg-white/95 backdrop-blur-lg rounded-xl shadow-lg ring-1 ring-gray-200
              z-50 overflow-hidden flex flex-col
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-b from-white to-gray-50">
              <h3 className="text-base font-semibold text-gray-800">Notifications</h3>
              <button
                onClick={toggleOpen}
                aria-label="Close"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex text-sm font-medium border-b">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex-1 py-2 transition
                    ${activeTab === tab
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'}
                  `}
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

            {/* List */}
            <div className="overflow-y-auto max-h-[60vh]">
              {filtered.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  <AlertCircle className="mx-auto mb-3 h-8 w-8 text-gray-400" />
                  No {activeTab.toLowerCase()} notifications
                </div>
              ) : (
                <motion.ul className="divide-y divide-gray-100">
                  <AnimatePresence>
                    {filtered.map(n => (
                      <motion.li
                        key={n.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="group"
                      >
                        <div
                          onClick={() => onClickNotif(n)}
                          className={`
                            flex items-start gap-3 p-4 cursor-pointer transition-colors
                            ${isRead(n)
                              ? 'bg-white hover:bg-gray-50'
                              : 'bg-blue-50 hover:bg-blue-100'}
                          `}
                        >
                          {iconFor(n.type)}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <p className={`
                                truncate font-medium
                                ${isRead(n) ? 'text-gray-900' : 'text-blue-800'}
                              `}>
                                {n.title}
                              </p>
                              <button
                                onClick={e => { e.stopPropagation(); deleteOne(n.id); }}
                                aria-label="Dismiss"
                                className="p-2 rounded-full hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition"
                              >
                                {deletingId === n.id
                                  ? <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"/>
                                  : <Trash2 className="h-5 w-5 text-gray-400 hover:text-red-600"/>
                                }
                              </button>
                            </div>
                            <p className="mt-1 text-base text-gray-700">
                              {n.message}
                            </p>
                            <div className="mt-2 flex items-center text-xs text-gray-400 gap-2">
                              <Clock className="h-4 w-4"/>
                              <time title={formatDistanceToNow(n.timestamp?.toDate(), { addSuffix: true })}>
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
              <div className="flex justify-between items-center p-3 bg-gray-50 border-t text-sm">
                <button
                  onClick={deleteAll}
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition"
                >
                  <Trash2 className="h-5 w-5"/>
                  Clear All
                </button>
                <button
                  onClick={() =>
                    notifications.forEach(n => {
                      if (!isRead(n)) {
                        markAsRead(n.id);
                        setReadStatus(prev => ({ ...prev, [n.id]: true }));
                      }
                    })
                  }
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition"
                >
                  <CheckCircle className="h-5 w-5"/>
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
