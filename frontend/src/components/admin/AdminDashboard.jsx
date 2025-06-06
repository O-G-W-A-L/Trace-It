"use client"

import { useState, useEffect } from "react"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "../../firebase/config"
import { getAuth, signOut } from "firebase/auth"
import Sidebar from "./Sidebar"
import ItemManagement from "./ItemManagement"
import UserManagement from "./UserManagement"
import MessageManagement from "./MessageManagement"
import AddItemModal from "./AddItemModal"
import { LogOut, MapPin, Menu, X, User, Sparkles } from "lucide-react"
import { useNavigate } from "react-router-dom"

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState("items")
  const [data, setData] = useState({ items: [], users: [], messages: [] })
  const [isLoading, setIsLoading] = useState(true)
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth()
    const user = auth.currentUser
    if (user) {
      setCurrentUser(user)
    }
    fetchData()
  }, [])

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setIsMobileMenuOpen(false)
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const queries = [
        query(collection(db, "items"), orderBy("dateFound", "desc")),
        query(collection(db, "users")),
        query(collection(db, "messages"), orderBy("timestamp", "desc")),
      ]
      const [itemsSnapshot, usersSnapshot, messagesSnapshot] = await Promise.all(queries.map((q) => getDocs(q)))

      setData({
        items: itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        users: usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        messages: messagesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
      })
    } catch (error) {
      console.error("Error fetching data:", error)
      showToast("Error fetching data. Please try again.", "error")
    } finally {
      setIsLoading(false)
    }
  }

  const showToast = (message, type) => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const handleLogout = async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
      navigate("/login", { replace: true })
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const contentComponents = {
    items: <ItemManagement items={data.items} onAddItem={() => setIsAddItemModalOpen(true)} onRefresh={fetchData} />,
    users: <UserManagement users={data.users} fetchData={fetchData} showToast={showToast} />,
    messages: (
      <MessageManagement messages={data.messages} users={data.users} fetchData={fetchData} showToast={showToast} />
    ),
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-20 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white/90 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-in-out z-30 border-r border-teal-100 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0`}
      >
        <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Enhanced Navigation */}
        <nav className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-teal-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button
                  className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
                <div className="flex-shrink-0 flex items-center ml-4 lg:ml-0">
                  <div className="relative p-2 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl">
                    <MapPin className="h-8 w-8 text-white" />
                    <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-pulse" />
                  </div>
                  <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
                    TraceIt Admin
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {/* Profile Button */}
                <button
                  onClick={() => navigate("/admin-profile")}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <User className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Profile</span>
                </button>
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl hover:from-red-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-slate-50 to-teal-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
              </h1>
              <p className="text-slate-600">Manage and oversee your {activeTab} efficiently</p>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mx-auto mb-4"></div>
                  <p className="text-slate-600">Loading {activeTab}...</p>
                </div>
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl overflow-hidden border border-white/20">
                {contentComponents[activeTab]}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Add Item Modal */}
      {isAddItemModalOpen && currentUser && (
        <AddItemModal
          isOpen={isAddItemModalOpen}
          onClose={() => setIsAddItemModalOpen(false)}
          onAddItem={fetchData}
          showToast={showToast}
          currentUser={currentUser}
        />
      )}

      {/* Toast Notifications */}
      {toast && (
        <div
          className={`fixed bottom-4 right-4 px-6 py-4 rounded-2xl text-white shadow-2xl transition-all duration-300 transform ${
            toast.type === "success"
              ? "bg-gradient-to-r from-emerald-500 to-green-500"
              : "bg-gradient-to-r from-red-500 to-rose-500"
          } backdrop-blur-xl border border-white/20`}
        >
          <div className="flex items-center space-x-2">
            {toast.type === "success" ? (
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            ) : (
              <X className="h-5 w-5" />
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
