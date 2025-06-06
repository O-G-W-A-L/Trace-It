"use client"

import { useState, useEffect } from "react"
import { MapPin, MessageCircle, Truck, X, ChevronLeft, ChevronRight, Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react'
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { handleClaimAction, handleAdditionalActions } from "./PaymentActions"

const statusLabels = {
  approved: "Approved",
  rejected: "Rejected",
  pending: "Pending",
  pending_review: "Pending Review",
}

const ClaimDetailsModal = ({ claim, item, onClose, onClaimAction }) => {
  const [allClaims, setAllClaims] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [loading, setLoading] = useState(true)
  const [showClaimantDetails, setShowClaimantDetails] = useState(false)
  const [showItemDetails, setShowItemDetails] = useState(false)
  const [showAdditionalActionsModal, setShowAdditionalActionsModal] = useState(false)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const q = query(
          collection(db, "claims"),
          where("itemId", "==", item.id),
          where("status", "==", "pending_review"),
        )
        const snap = await getDocs(q)
        const claims = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
        setAllClaims(claims)
        const idx = claims.findIndex((c) => c.id === claim.id)
        setCurrentIdx(idx >= 0 ? idx : 0)
      } catch (err) {
        console.error("Error fetching claims:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchClaims()
  }, [item.id, claim.id])

  const handleAction = async (action) => {
    setProcessing(true)
    const current = allClaims[currentIdx]
    const { success, updatedClaims } = await handleClaimAction(action, item.id, current.id, allClaims, current)
    
    if (success) {
      setAllClaims(updatedClaims)
      onClaimAction(action, item.id, current.id)

      // Update item status to 'claimed' if approved
      if (action === "approve") {
        await updateDoc(doc(db, "items", item.id), { status: "claimed" })
      }
    }
    setProcessing(false)
  }

  const current = allClaims[currentIdx] || claim

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-500"></div>
            <p className="text-slate-700">Loading claims...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-white/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Claim Review</h2>
              <p className="text-teal-100">Review and manage item claims</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Claim {currentIdx + 1} of {allClaims.length}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentIdx((i) => Math.max(i - 1, 0))}
                  disabled={currentIdx === 0}
                  className="p-2 bg-white/20 rounded-xl hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentIdx((i) => Math.min(i + 1, allClaims.length - 1))}
                  disabled={currentIdx === allClaims.length - 1}
                  className="p-2 bg-white/20 rounded-xl hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Claims Overview */}
          <div className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
            <h3 className="font-semibold text-lg mb-4 text-amber-800">Claims Overview</h3>
            <div className="space-y-3">
              {allClaims.map((c, idx) => (
                <div
                  key={c.id}
                  className={`flex justify-between items-center p-4 rounded-xl transition-all cursor-pointer ${
                    idx === currentIdx
                      ? "bg-teal-100 border-2 border-teal-300 shadow-md"
                      : c.status === "approved"
                      ? "bg-emerald-50 border border-emerald-200"
                      : c.status === "rejected"
                      ? "bg-red-50 border border-red-200"
                      : "bg-white border border-slate-200 hover:bg-slate-50"
                  }`}
                  onClick={() => setCurrentIdx(idx)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {c.userEmail.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="font-medium">{c.userEmail}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        c.status === "approved"
                          ? "bg-emerald-100 text-emerald-700"
                          : c.status === "rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {statusLabels[c.status] || "Pending"}
                    </span>
                    {idx === currentIdx && <span className="text-teal-600 text-sm font-medium">(Current)</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Item Details */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-teal-600" />
                Item Details
              </h3>
              <div
                onClick={() => setShowItemDetails((v) => !v)}
                className="cursor-pointer hover:bg-slate-100 p-4 rounded-xl transition-all"
              >
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Name:</span>
                    <span>{item.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Category:</span>
                    <span>{item.category}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="font-medium">Location Found:</span>
                    <span className="text-right">{item.location}</span>
                  </div>
                  {showItemDetails && (
                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Date Found:</span>
                        <span>{item.dateFound}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Identifiers:</span>
                        <span className="text-right">{item.uniqueIdentifiers}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center mt-4">
                  {showItemDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </div>
              </div>
            </div>

            {/* Claimant Details & Actions */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-teal-600" />
                  Claimant Details
                </h3>
                <div
                  onClick={() => setShowClaimantDetails((v) => !v)}
                  className="cursor-pointer hover:bg-slate-100 p-4 rounded-xl transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Email:</span>
                      <span>{current.userEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Type:</span>
                      <span>{current.type}</span>
                    </div>
                    {showClaimantDetails && (
                      <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Phone:</span>
                          <span>{current.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Date Lost:</span>
                          <span>{current.dateLost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Location Lost:</span>
                          <span className="text-right">{current.locationLost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Identifiers:</span>
                          <span className="text-right">{current.uniqueIdentifiers}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    {showClaimantDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleAction("approve")}
                  disabled={current.status === "approved" || processing}
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl hover:from-emerald-600 hover:to-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>{processing ? "Processing..." : "Approve Claim"}</span>
                </button>
                <button
                  onClick={() => handleAction("reject")}
                  disabled={current.status === "rejected" || processing}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl hover:from-red-600 hover:to-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <XCircle className="h-5 w-5" />
                  <span>Reject Claim</span>
                </button>
                <button
                  onClick={() => setShowAdditionalActionsModal(true)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Additional Actions</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Actions Modal */}
        {showAdditionalActionsModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-60">
            <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl w-full max-w-md space-y-6 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800">Additional Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    handleAdditionalActions("markForInvestigation", current, item)
                    setShowAdditionalActionsModal(false)
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
                >
                  Mark for Investigation
                </button>
                <button
                  onClick={() => {
                    handleAdditionalActions("resolve", current, item)
                    setShowAdditionalActionsModal(false)
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-200"
                >
                  Mark as Resolved
                </button>
                <button
                  onClick={() => setShowAdditionalActionsModal(false)}
                  className="w-full px-6 py-3 bg-slate-500 text-white rounded-xl hover:bg-slate-600 transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClaimDetailsModal
