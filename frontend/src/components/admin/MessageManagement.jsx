"use client"

import { useState, useRef, useEffect } from "react"
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Send, Search, Menu, X, MessageCircle, Users, Clock, CheckCircle2 } from "lucide-react"

const MessageManagement = ({ messages = [], users = [], fetchData, showToast }) => {
  const [selectedUser, setSelectedUser] = useState(null)
  const [newMessage, setNewMessage] = useState("")
  const [localMessages, setLocalMessages] = useState(messages)
  const [searchTerm, setSearchTerm] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [unreadCounts, setUnreadCounts] = useState({})
  const messagesEndRef = useRef(null)
  const lastMessageRef = useRef(null)
  const messageContainerRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [localMessages])

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [selectedUser])

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.style.paddingBottom = "80px"
    }
  }, [localMessages])

  useEffect(() => {
    setLocalMessages(messages)
  }, [messages])

  useEffect(() => {
    // Calculate unread counts and last messages for each user
    const counts = {}
    const userLastMessages = {}

    localMessages.forEach((message) => {
      if (message.recipientEmail === "admin@example.com" && !message.read) {
        counts[message.senderEmail] = (counts[message.senderEmail] || 0) + 1
      }

      // Track last message timestamp for sorting
      const timestamp = message.timestamp instanceof Date ? message.timestamp : message.timestamp?.toDate()
      if (timestamp) {
        userLastMessages[message.senderEmail] = Math.max(
          userLastMessages[message.senderEmail] || 0,
          timestamp.getTime(),
        )
      }
    })

    setUnreadCounts(counts)
  }, [localMessages])

  const handleSendMessage = async (e) => {
    e.preventDefault()

    if (!newMessage.trim() || !selectedUser) {
      showToast("Please select a user and enter a message", "error")
      return
    }

    try {
      const newMessageData = {
        content: newMessage.trim(),
        senderEmail: "admin@example.com",
        recipientEmail: selectedUser.email,
        sender: "Admin",
        recipient: "User",
        timestamp: new Date(),
        read: false,
      }

      const docRef = await addDoc(collection(db, "messages"), {
        ...newMessageData,
        timestamp: serverTimestamp(),
      })

      setLocalMessages((prev) => [...prev, { ...newMessageData, id: docRef.id }])
      setNewMessage("")
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    } catch (error) {
      console.error("Error sending message:", error)
      showToast("Failed to send message. Please try again.", "error")
    }
  }

  const markMessagesAsRead = async (userEmail) => {
    try {
      const userMessages = localMessages.filter((msg) => msg.senderEmail === userEmail && !msg.read)

      // Update messages in Firebase
      const updatePromises = userMessages.map((msg) => updateDoc(doc(db, "messages", msg.id), { read: true }))
      await Promise.all(updatePromises)

      // Update local state
      setLocalMessages((prev) => prev.map((msg) => (msg.senderEmail === userEmail ? { ...msg, read: true } : msg)))

      // Update unread counts
      setUnreadCounts((prev) => ({
        ...prev,
        [userEmail]: 0,
      }))
    } catch (error) {
      console.error("Error marking messages as read:", error)
    }
  }

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return ""
    const date = timestamp instanceof Date ? timestamp : timestamp.toDate()
    const now = new Date()
    const diffInHours = (now - date) / (1000 * 60 * 60)

    if (diffInHours < 24) {
      return date.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    } else {
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    }
  }

  // Sort users based on their last message timestamp
  const sortedUsers = [...users].sort((a, b) => {
    const aLastMessage = localMessages
      .filter((msg) => msg.senderEmail === a.email || msg.recipientEmail === a.email)
      .sort((m1, m2) => {
        const t1 = m1.timestamp instanceof Date ? m1.timestamp : m1.timestamp?.toDate()
        const t2 = m2.timestamp instanceof Date ? m2.timestamp : m2.timestamp?.toDate()
        return t2 - t1
      })[0]

    const bLastMessage = localMessages
      .filter((msg) => msg.senderEmail === b.email || msg.recipientEmail === b.email)
      .sort((m1, m2) => {
        const t1 = m1.timestamp instanceof Date ? m1.timestamp : m1.timestamp?.toDate()
        const t2 = m2.timestamp instanceof Date ? m2.timestamp : m2.timestamp?.toDate()
        return t2 - t1
      })[0]

    if (!aLastMessage && !bLastMessage) return 0
    if (!aLastMessage) return 1
    if (!bLastMessage) return -1

    const aTime = aLastMessage.timestamp instanceof Date ? aLastMessage.timestamp : aLastMessage.timestamp?.toDate()
    const bTime = bLastMessage.timestamp instanceof Date ? bLastMessage.timestamp : bLastMessage.timestamp?.toDate()

    return bTime - aTime
  })

  const filteredUsers = sortedUsers.filter(
    (user) =>
      (user.fullName?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (user.email?.toLowerCase() || "").includes(searchTerm.toLowerCase()),
  )

  const filteredMessages = [...localMessages]
    .sort((a, b) => {
      if (!a.timestamp || !b.timestamp) return 0
      const dateA = a.timestamp instanceof Date ? a.timestamp : a.timestamp.toDate()
      const dateB = b.timestamp instanceof Date ? b.timestamp : b.timestamp.toDate()
      return dateA - dateB
    })
    .filter(
      (msg) =>
        selectedUser &&
        ((msg.senderEmail === selectedUser.email && msg.recipientEmail === "admin@example.com") ||
          (msg.senderEmail === "admin@example.com" && msg.recipientEmail === selectedUser.email)),
    )

  const getLastMessage = (userEmail) => {
    const userMessages = localMessages
      .filter((msg) => msg.senderEmail === userEmail || msg.recipientEmail === userEmail)
      .sort((a, b) => {
        const dateA = a.timestamp instanceof Date ? a.timestamp : a.timestamp?.toDate()
        const dateB = b.timestamp instanceof Date ? b.timestamp : b.timestamp?.toDate()
        return dateB - dateA
      })
    return userMessages[0]
  }

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
        fixed md:relative inset-y-0 left-0 z-50 md:z-auto
        w-[320px] lg:w-[380px]
        bg-white/80 backdrop-blur-md shadow-2xl border-r border-white/20
        transition-transform duration-300
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-white text-xl font-bold">Messages</h2>
                <p className="text-white/80 text-sm">{filteredUsers.length} conversations</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden text-white hover:bg-white/10 rounded-lg p-2 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300"
              />
            </div>
          </div>

          {/* User List */}
          <div className="flex-1 overflow-y-auto">
            {filteredUsers.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <Users className="h-12 w-12 mb-4 text-gray-300" />
                <p className="text-lg font-medium">No conversations found</p>
                <p className="text-sm">Users will appear here when they send messages</p>
              </div>
            ) : (
              filteredUsers.map((user) => {
                const lastMessage = getLastMessage(user.email)
                const isSelected = selectedUser?.id === user.id
                const unreadCount = unreadCounts[user.email] || 0

                return (
                  <div
                    key={user.id}
                    onClick={() => {
                      setSelectedUser(user)
                      setIsMobileMenuOpen(false)
                      markMessagesAsRead(user.email)
                    }}
                    className={`
                      flex items-center gap-4 p-4 cursor-pointer
                      transition-all duration-300 border-l-4
                      hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50
                      ${
                        isSelected
                          ? "bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-500 shadow-md"
                          : "border-transparent hover:border-teal-200"
                      }
                    `}
                  >
                    <div className="relative flex-shrink-0">
                      {user.profileImageUrl ? (
                        <img
                          src={user.profileImageUrl || "/placeholder.svg"}
                          alt={user.fullName}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center border-2 border-white shadow-md">
                          <span className="text-white font-bold text-lg">
                            {(user.fullName || "U")[0].toUpperCase()}
                          </span>
                        </div>
                      )}
                      {unreadCount > 0 && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
                          {unreadCount > 9 ? "9+" : unreadCount}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className={`font-semibold truncate ${unreadCount > 0 ? "text-gray-900" : "text-gray-700"}`}>
                          {user.fullName || "Unnamed User"}
                        </h3>
                        {lastMessage && (
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>{formatTimestamp(lastMessage.timestamp)}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-sm text-gray-500 truncate mb-1">{user.email}</p>

                      {lastMessage && (
                        <div className="flex items-center space-x-2">
                          {lastMessage.sender === "Admin" && (
                            <CheckCircle2 className="h-3 w-3 text-teal-500 flex-shrink-0" />
                          )}
                          <p
                            className={`text-sm truncate ${
                              unreadCount > 0 ? "font-medium text-gray-900" : "text-gray-600"
                            }`}
                          >
                            {lastMessage.content}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-white/50 backdrop-blur-sm">
        {/* Chat Header */}
        <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-gray-600 hover:bg-gray-100 rounded-lg p-2 transition-colors duration-200"
            >
              <Menu className="h-6 w-6" />
            </button>

            {selectedUser ? (
              <div className="flex items-center space-x-3">
                {selectedUser.profileImageUrl ? (
                  <img
                    src={selectedUser.profileImageUrl || "/placeholder.svg"}
                    alt={selectedUser.fullName}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center border-2 border-white shadow-md">
                    <span className="text-white font-bold">{(selectedUser.fullName || "U")[0].toUpperCase()}</span>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedUser.fullName || "Unnamed User"}</h3>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Select a conversation</h3>
                  <p className="text-sm text-gray-500">Choose a user to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Messages Area */}
        <div ref={messageContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4">
          {selectedUser ? (
            filteredMessages.length > 0 ? (
              filteredMessages.map((message, index) => (
                <div
                  key={message.id}
                  ref={index === filteredMessages.length - 1 ? lastMessageRef : null}
                  className={`flex ${message.sender === "Admin" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                    max-w-[75%] rounded-2xl p-4 shadow-md backdrop-blur-sm border
                    ${
                      message.sender === "Admin"
                        ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-teal-200"
                        : "bg-white/80 text-gray-900 border-gray-200"
                    }
                  `}
                  >
                    <p className="text-sm leading-relaxed break-words">{message.content}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className={`text-xs ${message.sender === "Admin" ? "text-white/80" : "text-gray-500"}`}>
                        {formatTimestamp(message.timestamp)}
                      </p>
                      {message.sender === "Admin" && <CheckCircle2 className="h-3 w-3 text-white/80" />}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <MessageCircle className="h-16 w-16 mb-4 text-gray-300" />
                <p className="text-xl font-medium">No messages yet</p>
                <p className="text-sm">Start the conversation by sending a message</p>
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center mb-6">
                <MessageCircle className="h-12 w-12 text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Messages</h3>
              <p className="text-lg">Select a conversation from the sidebar to start messaging</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="bg-white/80 backdrop-blur-md border-t border-gray-200 p-4">
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={selectedUser ? `Message ${selectedUser.fullName}...` : "Select a user to start messaging"}
              disabled={!selectedUser}
              className="flex-1 px-4 py-3 bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-200 focus:border-teal-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            />
            <button
              type="submit"
              disabled={!newMessage.trim() || !selectedUser}
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:from-teal-600 hover:to-cyan-600 focus:ring-4 focus:ring-teal-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span className="hidden sm:inline font-medium">Send</span>
            </button>
          </form>
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}

export default MessageManagement
