import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Bell,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const TABS = ['All', 'Unread', 'Read'];

const Notification = ({
  notifications,
  markAsRead,
  onNotificationClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const dropdownRef = useRef(null);

  // Close on outside click
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
    if (activeTab === 'Read')   return n.isRead;
    return true;
  });

  const handleToggle = () => setIsOpen(o => !o);

  const handleClick = (notif) => {
    if (!notif.isRead) markAsRead(notif.id);
    onNotificationClick?.(notif);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        aria-label="Notifications"
        aria-expanded={isOpen}
        className="relative p-2 rounded-full bg-white shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <Bell className="h-6 w-6 text-gray-700" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b">
            <h3 className="font-semibold text-gray-800">Notifications</h3>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <XCircle className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-center text-sm font-medium transition
                  ${activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="max-h-80 overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                <AlertCircle className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">No {activeTab.toLowerCase()} notifications</p>
              </div>
            ) : (
              filtered.map(n => (
                <button
                  key={n.id}
                  onClick={() => handleClick(n)}
                  className={`w-full text-left px-4 py-3 flex flex-col gap-1 transition
                    ${n.isRead
                      ? 'bg-white hover:bg-gray-50'
                      : 'bg-blue-50 hover:bg-blue-100'}`}
                >
                  <div className="flex justify-between items-start">
                    <p className={`font-medium text-sm ${
                      n.isRead ? 'text-gray-700' : 'text-blue-700'
                    }`}>
                      {n.title}
                    </p>
                    <CheckCircle
                      className={`h-4 w-4 mt-0.5 ${
                        n.isRead ? 'text-gray-400' : 'text-blue-500'
                      }`}
                    />
                  </div>
                  <p className="text-xs text-gray-600">{n.message}</p>
                  <p className="text-2xs text-gray-400 self-end">
                    {formatDistanceToNow(new Date(n.timestamp), { addSuffix: true })}
                  </p>
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="p-3 border-t text-right">
              <button
                onClick={() => {
                  notifications.forEach(n => markAsRead(n.id));
                  setIsOpen(false);
                }}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Mark all as read
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;