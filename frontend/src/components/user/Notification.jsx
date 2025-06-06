"use client"

import { useState, useEffect, useRef } from "react"
import { Bell, CheckCircle, X, AlertCircle, Trash2, Clock, MailOpen } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { deleteDoc, doc, writeBatch, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { motion, AnimatePresence } from "framer-motion"
import { collection, query, where, onSnapshot } from "firebase/firestore"
import { useAuth } from "../../contexts/AuthContext"

const TABS = ["All", "Unread", "Read"]

/** ★ Custom hook: sync state ↔ localStorage */
function useLocalStorage(key, defaultValue) {
  const [stored, setStored] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(stored))
    } catch {}
  }, [key, stored])

  return [stored, setStored]
}

const Notification = ({
  notifications: initialNotifications = [],
  markAsRead: markAsReadProp = () => {},
  onNotificationClick = () => {},
}) => {
  const { user } = useAuth()
  const [notifications, setNotifications] = useState(initialNotifications)
  const [readStatus, setReadStatus] = useLocalStorage("readStatus", {})
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("All")
  const [deletingId, setDeletingId] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    if (!user?.uid) return

    const q = query(collection(db, "notifications"), where("userId", "==", user.uid))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notifs = snapshot.docs.map((doc) => {
        const data = doc.data()
        let createdAt = data.createdAt

        // Attempt to convert timestamp to Date object
        if (data.createdAt && typeof data.createdAt.toDate === "function") {
          createdAt = data.createdAt.toDate()
        } else {
          createdAt = new Date() // Fallback to current date if conversion fails
        }

        return {
          id: doc.id,
          ...data,
          timestamp: createdAt, // Use the converted or fallback date
        }
      })

      setNotifications(notifs)
    })

    return () => unsubscribe()
  }, [user])

  /** derive each notification's read flag from persisted map */
  const isRead = (n) => readStatus[n.id] ?? n.isRead

  const unreadCount = notifications.filter((n) => !isRead(n)).length

  const filtered = notifications.filter((n) => {
    if (activeTab === "Unread") return !isRead(n)
    if (activeTab === "Read") return isRead(n)
    return true
  })

  const toggleOpen = () => setIsOpen((o) => !o)

  const onClickNotif = async (n) => {
    if (!isRead(n)) {
      // 1) mark backend
      await markAsReadProp(n.id)
      // 2) persist locally
      setReadStatus((prev) => ({ ...prev, [n.id]: true }))
    }
    onNotificationClick(n)
    setIsOpen(false)
  }

  const deleteOne = async (id) => {
    setDeletingId(id)
    try {
      await deleteDoc(doc(db, "notifications", id))
      // remove from local map
      setReadStatus((prev) => {
        const copy = { ...prev }
        delete copy[id]
        return copy
      })
      onNotificationClick()
    } catch (err) {
      console.error(err)
    } finally {
      setDeletingId(null)
    }
  }

  const deleteAll = async () => {
    if (!window.confirm("Delete all notifications?")) return
    try {
      const batch = writeBatch(db)
      notifications.forEach((n) => batch.delete(doc(db, "notifications", n.id)))
      await batch.commit()
      // clear persisted map
      setReadStatus({})
      onNotificationClick()
    } catch (err) {
      console.error(err)
    }
  }

  const markAsRead = async (notificationId) => {
    try {
      await updateDoc(doc(db, "notifications", notificationId), {
        read: true,
      })
    } catch (error) {
      console.error("Error marking notification as read:", error)
    }
  }

  const iconFor = (type) => {
    const base = "flex-shrink-0"
    switch (type) {
      case "success":
        return <CheckCircle className={`${base} h-6 w-6 text-emerald-500`} />
      case "error":
        return <AlertCircle className={`${base} h-6 w-6 text-rose-500`} />
      default:
        return <MailOpen className={`${base} h-6 w-6 text-teal-500`} />
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef} aria-live="polite">
      {/* Bell Icon */}
      <button
        onClick={toggleOpen}
        aria-label="Toggle notifications"
        className="relative p-3 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 shadow-lg ring-1 ring-teal-100 transition-all duration-300 hover:shadow-teal-100/30"
      >
        <Bell className={`h-6 w-6 ${unreadCount > 0 ? "text-teal-600" : "text-gray-700"}`} />
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg"
          >
            {unreadCount}
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              fixed inset-x-4 top-20
              sm:absolute sm:inset-auto sm:right-0 sm:mt-2
              w-auto max-w-[90vw] sm:min-w-[350px] sm:max-w-[420px]
              bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl ring-1 ring-teal-100
              z-50 overflow-hidden flex flex-col
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-r from-teal-500/10 to-cyan-500/10">
              <h3 className="text-base font-semibold text-teal-900">Notifications</h3>
              <button
                onClick={toggleOpen}
                aria-label="Close"
                className="p-2 rounded-full hover:bg-teal-50 transition-colors"
              >
                <X className="h-5 w-5 text-teal-700" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex text-sm font-medium border-b relative">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex-1 py-3 transition-colors relative
                    ${activeTab === tab ? "text-teal-600 font-semibold" : "text-gray-500 hover:text-teal-700"}
                  `}
                >
                  {tab}
                  {tab === "Unread" && unreadCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 bg-teal-100 text-teal-800 text-xs rounded-full">
                      {unreadCount}
                    </span>
                  )}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-teal-200 scrollbar-track-transparent">
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <div className="bg-teal-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <AlertCircle className="h-8 w-8 text-teal-400" />
                  </div>
                  <p className="text-teal-800 font-medium">No {activeTab.toLowerCase()} notifications</p>
                  <p className="text-sm text-teal-600 mt-1">You're all caught up!</p>
                </div>
              ) : (
                <motion.ul className="divide-y divide-teal-100">
                  <AnimatePresence>
                    {filtered.map((n) => (
                      <motion.li
                        key={n.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="group relative"
                      >
                        <div
                          onClick={() => onClickNotif(n)}
                          className={`
                            flex items-start gap-3 p-4 cursor-pointer transition-all
                            ${
                              isRead(n)
                                ? "bg-white hover:bg-teal-50"
                                : "bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100"
                            }
                          `}
                        >
                          <div
                            className={`
                            ${isRead(n) ? "bg-gray-100" : "bg-teal-100"} 
                            rounded-full p-2 transition-colors
                          `}
                          >
                            {iconFor(n.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <p
                                className={`
                                truncate font-medium
                                ${isRead(n) ? "text-gray-900" : "text-teal-800"}
                              `}
                              >
                                {n.title}
                              </p>
                            </div>
                            <p className="mt-1 text-base text-gray-700">{n.message}</p>
                            <div className="mt-2 flex items-center text-xs text-gray-400 gap-2">
                              <Clock className="h-4 w-4" />
                              <time
                                title={n.timestamp ? formatDistanceToNow(n.timestamp, { addSuffix: true }) : "Recently"}
                              >
                                {n.timestamp ? formatDistanceToNow(n.timestamp, { addSuffix: true }) : "Recently"}
                              </time>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteOne(n.id)
                            }}
                            aria-label="Dismiss"
                            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                          >
                            {deletingId === n.id ? (
                              <div className="w-4 h-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4 text-gray-400 hover:text-red-500" />
                            )}
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>
              )}
            </div>

            {/* Footer */}
            {filtered.length > 0 && (
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-teal-50 to-cyan-50 border-t text-sm">
                <button
                  onClick={deleteAll}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/80 transition-colors text-teal-700"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear All
                </button>
                <button
                  onClick={() =>
                    notifications.forEach((n) => {
                      if (!isRead(n)) {
                        markAsRead(n.id)
                        setReadStatus((prev) => ({ ...prev, [n.id]: true }))
                      }
                    })
                  }
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-sm hover:shadow-md transition-all"
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
  )
}

export default Notification
