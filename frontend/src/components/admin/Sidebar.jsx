import React from 'react';
import { Menu, Users, MessageSquare } from 'lucide-react';

const sidebarItems = [
  { id: 'items', Icon: Menu, label: 'Items' },
  { id: 'users', Icon: Users, label: 'Users' },
  { id: 'messages', Icon: MessageSquare, label: 'Messages' },
];

const Sidebar = ({ activeTab, setActiveTab }) => (
  <aside className="bg-gradient-to-r from-gray-800 to-gray-900 text-white h-full w-64 flex-shrink-0 transition-all duration-300 overflow-y-auto">
    <div className="p-6">
      <h1 className="text-xl font-semibold">Asset Management</h1>
    </div>
    <nav className="mt-5 px-2 space-y-1">
      {sidebarItems.map(({ id, Icon, label }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`${
            activeTab === id ? 'bg-gray-700 bg-opacity-50' : 'hover:bg-gray-700 hover:bg-opacity-30'
          } group flex items-center w-full px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200`}
        >
          <Icon className="mr-3 h-5 w-5" />
          {label}
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar;