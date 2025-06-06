"use client"

import { MapPin, MessageCircle, Calendar, Tag, Eye, Users } from "lucide-react"

const ItemInfo = ({ item, totalClaims }) => {
  const formatDate = (date) => {
    if (!date) return "Unknown date"
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
      {/* Image Section */}
      {item.imageUrl && (
        <div className="relative overflow-hidden">
          <img src={item.imageUrl || "/placeholder.svg"} alt={item.name} className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

          {/* Status Badge Overlay */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${
                item.status === "unclaimed"
                  ? "bg-emerald-100/90 text-emerald-800 border-emerald-200"
                  : "bg-amber-100/90 text-amber-800 border-amber-200"
              }`}
            >
              {item.status === "unclaimed" ? "Available" : "Pending Claim"}
            </span>
          </div>
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{item.name}</h1>
            <div className="flex items-center space-x-4 text-sm text-slate-600">
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1 text-teal-600" />
                <span>{item.category || "Uncategorized"}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-teal-600" />
                <span>Found {formatDate(item.createdAt)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Claims Info */}
        {totalClaims > 0 && (
          <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-100">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-teal-600 mr-2" />
              <span className="text-sm font-medium text-teal-800">
                {totalClaims} claim{totalClaims !== 1 ? "s" : ""} submitted for this item
              </span>
            </div>
          </div>
        )}

        {/* Details Grid */}
        <div className="space-y-6">
          {/* Location */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-2xl">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800 mb-1">Location Found</h3>
              <p className="text-slate-600 leading-relaxed">{item.location}</p>
            </div>
          </div>

          {/* Details */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-2xl">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800 mb-1">Description</h3>
              <p className="text-slate-600 leading-relaxed">{item.details || "No additional details provided."}</p>
            </div>
          </div>

          {/* Additional Info */}
          {item.type && (
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-2xl">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 mb-1">Item Type</h3>
                <p className="text-slate-600 leading-relaxed">{item.type}</p>
              </div>
            </div>
          )}
        </div>

        {/* Status Card */}
        <div className="mt-8 p-6 bg-gradient-to-r from-slate-50 to-teal-50 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Current Status</h3>
              <p className="text-slate-600 text-sm">
                {item.status === "unclaimed"
                  ? "This item is available for claiming"
                  : "This item has pending claims under review"}
              </p>
            </div>
            <div
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                item.status === "unclaimed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
              }`}
            >
              {item.status === "unclaimed" ? "Available" : "Under Review"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemInfo
