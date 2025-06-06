"use client"

import { Menu, Users, MessageSquare, Sparkles } from "lucide-react"

const sidebarItems = [
  { id: "items", Icon: Menu, label: "Items", description: "Manage lost items" },
  { id: "users", Icon: Users, label: "Users", description: "User management" },
  { id: "messages", Icon: MessageSquare, label: "Messages", description: "Communication hub" },
]

const Sidebar = ({ activeTab, setActiveTab }) => (
  <aside className="bg-gradient-to-b from-teal-600 via-cyan-600 to-teal-700 text-white h-full w-64 flex-shrink-0 transition-all duration-300 overflow-y-auto relative">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
    </div>

    <div className="relative z-10 p-6">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-white/20 rounded-xl">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map(({ id, Icon, label, description }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`w-full group flex items-center px-4 py-4 text-left font-medium rounded-2xl transition-all duration-200 ${
              activeTab === id
                ? "bg-white/20 shadow-lg backdrop-blur-sm border border-white/30"
                : "hover:bg-white/10 hover:backdrop-blur-sm"
            }`}
          >
            <div
              className={`p-2 rounded-xl mr-4 transition-all duration-200 ${
                activeTab === id ? "bg-white/20" : "bg-white/10 group-hover:bg-white/20"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">{label}</div>
              <div className="text-xs text-teal-100 opacity-80">{description}</div>
            </div>
          </button>
        ))}
      </nav>
    </div>
  </aside>
)

export default Sidebar
