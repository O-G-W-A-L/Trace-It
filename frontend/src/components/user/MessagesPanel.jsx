"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ArrowLeft, Send, Clock, User, Shield } from "lucide-react"
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from "firebase/firestore"
import { db } from "../../firebase/config"

const MessagePanel = ({ currentUser, isOpen, onClose }) => {
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [sending, setSending] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    let unsubscribe
    if (currentUser?.email) {
      setLoading(true)
      const q = query(collection(db, "messages"), orderBy("timestamp", "asc"))
      unsubscribe = onSnapshot(
        q,
        (snap) => {
          const data = snap.docs
            .map((d) => ({ id: d.id, ...d.data() }))
            .filter((m) => m.recipientEmail === currentUser.email || m.senderEmail === currentUser.email)
          setMessages(data)
          setLoading(false)
          setTimeout(scrollToBottom, 100)
        },
        (err) => {
          console.error(err)
          setError("Failed to load messages")
          setLoading(false)
        },
      )
    }
    return () => unsubscribe && unsubscribe()
  }, [currentUser, scrollToBottom])

  useEffect(scrollToBottom, [messages])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!newMessage.trim() || !currentUser?.email || sending) return

    setSending(true)
    try {
      await addDoc(collection(db, "messages"), {
        content: newMessage.trim(),
        senderEmail: currentUser.email,
        senderName: currentUser.displayName || currentUser.email,
        recipientEmail: "admin@example.com",
        sender: "User",
        recipient: "Admin",
        timestamp: serverTimestamp(),
      })
      setNewMessage("")
      setError(null)
    } catch (err) {
      console.error(err)
      setError("Failed to send message")
    } finally {
      setSending(false)
    }
  }

  const formatTimestamp = (ts) => (ts ? ts.toDate().toLocaleString() : "Sending...")

  const isUserMessage = (msg) => msg.senderEmail === currentUser?.email || msg.sender === "User"

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="flex items-center space-x-3">
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-xl hover:bg-white/50 transition-colors"
            aria-label="Close messages"
          >
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-slate-800">Support Chat</h2>
              <p className="text-xs text-slate-600">We're here to help</p>
            </div>
          </div>
        </div>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 mx-4 my-2 rounded-xl text-sm">{error}</div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-500 mx-auto mb-2"></div>
              <p className="text-slate-500 text-sm">Loading messages...</p>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="font-medium text-slate-800 mb-2">Start a conversation</h3>
            <p className="text-slate-500 text-sm">Send a message to get help from our support team</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`flex ${isUserMessage(msg) ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] ${isUserMessage(msg) ? "order-2" : "order-1"}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    isUserMessage(msg)
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  <p className="text-sm leading-relaxed break-words">{msg.content}</p>
                </div>
                <div
                  className={`flex items-center mt-1 space-x-2 text-xs text-slate-500 ${
                    isUserMessage(msg) ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    {isUserMessage(msg) ? <User className="h-3 w-3" /> : <Shield className="h-3 w-3" />}
                    <span>{isUserMessage(msg) ? "You" : "Support"}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatTimestamp(msg.timestamp)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 border-t border-slate-200 bg-slate-50">
        <div className="flex space-x-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={sending}
            className="flex-1 px-4 py-3 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !newMessage.trim() || sending}
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
          >
            {sending ? (
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            ) : (
              <Send className="h-4 w-4" />
            )}
            <span className="hidden sm:inline">{sending ? "Sending..." : "Send"}</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default MessagePanel
