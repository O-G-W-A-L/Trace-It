"use client"

import { useState, useEffect, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Search, User, MapPin, LogOut, MessageCircle, ChevronDown, ChevronUp, Plus, Grid, List } from "lucide-react"
import { collection, query, where, getDocs } from "firebase/firestore"
import { signOut } from "firebase/auth"
import { auth, db } from "../../firebase/config"
import { useAuth } from "../../contexts/AuthContext"
import MessagePanel from "./MessagesPanel"
import AddItemModal from "../admin/AddItemModal"
import Footer from "./Footer"
import Notification from "./Notification"

const UserDashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [items, setItems] = useState([])
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isMessagePanelOpen, setIsMessagePanelOpen] = useState(false)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [viewMode, setViewMode] = useState("grid")

  const categories = ["All", "National IDs", "Number Plates", "Driving Permits", "Academic Documents", "Other Items"]

  useEffect(() => {
    if (!user) {
      return
    }
    fetchItems()
    fetchNotifications()
  }, [activeCategory, user])

  const fetchItems = async () => {
    setIsLoading(true)
    try {
      let itemsQuery
      if (activeCategory === "All") {
        itemsQuery = query(collection(db, "items"), where("status", "!=", "claimed"))
      } else {
        itemsQuery = query(
          collection(db, "items"),
          where("category", "==", activeCategory),
          where("status", "!=", "claimed"),
        )
      }

      const querySnapshot = await getDocs(itemsQuery)
      const fetchedItems = querySnapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
        }
      })
      setItems(fetchedItems)
    } catch (error) {
      console.error("Error fetching items:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchNotifications = async () => {
    try {
      const notificationsQuery = query(collection(db, "notifications"), where("userId", "==", user.uid))

      const querySnapshot = await getDocs(notificationsQuery)
      const fetchedNotifications = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        isRead: doc.data().isRead || false,
      }))
      setNotifications(fetchedNotifications)
    } catch (error) {
      console.error("Error fetching notifications:", error)
    }
  }

  const handleAddItem = () => {
    setIsAddItemModalOpen(true)
  }

  const handleItemAdded = () => {
    setIsAddItemModalOpen(false)
    fetchItems()
  }

  const formatDate = (date) => {
    if (!date) return "Unknown date"
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.details?.toLowerCase?.() || "").includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === "All" || item.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [items, searchQuery, activeCategory])

  const stats = useMemo(
    () => ({
      total: items.length,
      unclaimed: items.filter((item) => item.status === "unclaimed").length,
      claimed: items.filter((item) => item.status === "claimed").length,
    }),
    [items],
  )

  const firstName = useMemo(() => {
    const full = user.displayName || user.name || (user.email && user.email.split("@")[0]) || ""
    return full.split(" ")[0]
  }, [user])

  const markAsRead = (notificationId) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === notificationId ? { ...notification, isRead: true } : notification,
      ),
    )
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate("/login", { replace: true })
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-teal-50 min-h-screen">
      {/* Enhanced Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl shadow-lg sticky top-0 z-20 border-b border-teal-100">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
                TraceIt
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Notification
                notifications={notifications}
                markAsRead={markAsRead}
                onNotificationClick={fetchNotifications}
              />
              <Link
                to="/profile"
                className="p-2 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-200"
                aria-label="Profile"
              >
                <User className="h-6 w-6" />
              </Link>
              <button
                onClick={() => setIsMessagePanelOpen(!isMessagePanelOpen)}
                className="p-2 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-200"
                aria-label={isMessagePanelOpen ? "Close messages" : "Open messages"}
              >
                <MessageCircle className="h-6 w-6" />
              </button>
              <button
                onClick={handleLogout}
                className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                aria-label="Logout"
              >
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="w-full py-8 px-4 sm:px-6 lg:px-8 pb-20">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Welcome back{firstName ? `, ${firstName}` : ""}! 👋
              </h1>
              <p className="text-slate-600">Discover and recover lost items in your community</p>
            </div>
            <button
              onClick={handleAddItem}
              className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Item
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search for items, descriptions, locations..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`flex-1 transition-all duration-300 ${isMessagePanelOpen ? "lg:mr-96" : ""}`}>
            {/* Categories and Stats */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-4 sm:mb-0">Categories</h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsStatsVisible(!isStatsVisible)}
                    className="flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200"
                  >
                    {isStatsVisible ? "Hide Stats" : "Show Stats"}
                    {isStatsVisible ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-teal-100 text-teal-600" : "text-slate-400 hover:text-slate-600"}`}
                    >
                      <Grid className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-teal-100 text-teal-600" : "text-slate-400 hover:text-slate-600"}`}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div
                className={`grid grid-cols-3 gap-4 mb-6 transition-all duration-300 ${isStatsVisible ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-teal-100">
                  <p className="text-sm text-slate-600 mb-1">Total Items</p>
                  <p className="text-3xl font-bold text-teal-600">{stats.total}</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-emerald-100">
                  <p className="text-sm text-slate-600 mb-1">Available</p>
                  <p className="text-3xl font-bold text-emerald-600">{stats.unclaimed}</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-amber-100">
                  <p className="text-sm text-slate-600 mb-1">Claimed</p>
                  <p className="text-3xl font-bold text-amber-600">{stats.claimed}</p>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-200 ${
                      activeCategory === category
                        ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg transform scale-105"
                        : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-md border border-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Items Grid/List */}
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mx-auto mb-4"></div>
                  <p className="text-slate-600">Loading items...</p>
                </div>
              </div>
            ) : (
              <div
                className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
              >
                {filteredItems.map((item) => (
                  <Link
                    to={`/item/${item.id}`}
                    key={item.id}
                    className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-teal-200 transform hover:scale-[1.02] ${
                      viewMode === "list" ? "flex items-center p-4 space-x-4" : "block"
                    }`}
                  >
                    {viewMode === "grid" ? (
                      <div className="p-6">
                        {item.imageUrl && (
                          <div className="relative overflow-hidden rounded-xl mb-4">
                            <img
                              src={item.imageUrl || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        )}
                        <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-600 mb-2">{item.type}</p>
                        <p className="text-sm text-slate-500 mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {item.location}
                        </p>
                        <p className="text-sm text-slate-500 mb-3">{item.category}</p>
                        <div className="flex justify-between items-center">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.status === "unclaimed"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {item.status}
                          </span>
                          <span className="text-xs text-slate-500">{formatDate(item.createdAt)}</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        {item.imageUrl && (
                          <div className="flex-shrink-0">
                            <img
                              src={item.imageUrl || "/placeholder.svg"}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-xl"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-slate-800 truncate group-hover:text-teal-700 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {item.type} • {item.category}
                          </p>
                          <p className="text-sm text-slate-500 flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {item.location}
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.status === "unclaimed"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {item.status}
                          </span>
                          <p className="text-xs text-slate-500 mt-1">{formatDate(item.createdAt)}</p>
                        </div>
                      </>
                    )}
                  </Link>
                ))}
              </div>
            )}

            {filteredItems.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-12 w-12 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">No items found</h3>
                <p className="text-slate-600">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>

          {/* Message Panel */}
          {isMessagePanelOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:bg-opacity-0 lg:inset-auto lg:right-0 lg:top-16 lg:bottom-0 lg:w-96 transition-all duration-300">
              <div className="bg-white/90 backdrop-blur-xl h-full shadow-2xl border-l border-teal-100 overflow-hidden flex flex-col">
                <div className="p-6 border-b border-teal-100 bg-gradient-to-r from-teal-50 to-cyan-50">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-slate-800">Messages</h2>
                    <button
                      onClick={() => setIsMessagePanelOpen(false)}
                      className="p-2 text-slate-500 hover:text-slate-700 hover:bg-white rounded-xl transition-all duration-200"
                      aria-label="Close messages panel"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <MessagePanel
                    currentUser={user}
                    isOpen={isMessagePanelOpen}
                    onClose={() => setIsMessagePanelOpen(false)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <AddItemModal
        isOpen={isAddItemModalOpen}
        onClose={() => setIsAddItemModalOpen(false)}
        onAddItem={handleItemAdded}
        currentUser={user}
      />

      <Footer />
    </div>
  )
}

export default UserDashboard
