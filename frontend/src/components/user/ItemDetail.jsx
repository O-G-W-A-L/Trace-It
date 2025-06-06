"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useAuth } from "../../contexts/AuthContext"
import { ArrowLeft, Shield, AlertCircle, CheckCircle, Clock } from "lucide-react"
import ClaimForm from "./ClaimForm"
import ItemInfo from "./ItemInfo"

const ItemDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [item, setItem] = useState(null)
  const [claims, setClaims] = useState([])
  const [showClaimForm, setShowClaimForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchItemAndClaims = async () => {
      try {
        setLoading(true)

        // Fetch item details
        const itemRef = doc(db, "items", id)
        const itemSnap = await getDoc(itemRef)

        if (!itemSnap.exists()) {
          setError("Item not found")
          return
        }

        const itemData = { id: itemSnap.id, ...itemSnap.data() }
        setItem(itemData)

        // Fetch claims for this item
        const claimsQuery = query(collection(db, "claims"), where("itemId", "==", id))
        const claimsSnap = await getDocs(claimsQuery)
        const claimsData = claimsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setClaims(claimsData)
      } catch (error) {
        console.error("Error fetching item:", error)
        setError("Failed to load item details")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchItemAndClaims()
    }
  }, [id])

  const handleClaimSubmit = () => {
    setShowClaimForm(false)
    // Refresh the page data
    window.location.reload()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading item details...</p>
        </div>
      </div>
    )
  }

  if (error || !item) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Item Not Found</h2>
          <p className="text-slate-600 mb-6">
            {error || "The item you're looking for doesn't exist or has been removed."}
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  const userHasClaimed = claims.some((claim) => claim.userId === user?.uid)
  const canClaim = item.status === "unclaimed" && !userHasClaimed

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-8 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200 mb-4"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ItemInfo item={item} totalClaims={claims.length} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Claim Status Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-teal-600" />
                Claim Status
              </h3>

              {userHasClaimed ? (
                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="font-medium text-amber-800">Claim Submitted</span>
                  </div>
                  <p className="text-amber-700 text-sm">
                    You have already submitted a claim for this item. Please wait for admin review.
                  </p>
                </div>
              ) : canClaim ? (
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="font-medium text-emerald-800">Available for Claim</span>
                    </div>
                    <p className="text-emerald-700 text-sm mb-4">
                      This item is available for claiming. Click below to submit your claim.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowClaimForm(true)}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-6 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
                  >
                    <Shield className="h-5 w-5" />
                    <span>Claim This Item</span>
                  </button>
                </div>
              ) : (
                <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="h-5 w-5 text-slate-600 mr-2" />
                    <span className="font-medium text-slate-800">Not Available</span>
                  </div>
                  <p className="text-slate-600 text-sm">This item is currently under review or has been claimed.</p>
                </div>
              )}
            </div>

            {/* Claims Summary */}
            {claims.length > 0 && (
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Claims Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Total Claims:</span>
                    <span className="font-semibold text-slate-800">{claims.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Pending Review:</span>
                    <span className="font-semibold text-amber-600">
                      {claims.filter((claim) => claim.status === "pending_review").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Approved:</span>
                    <span className="font-semibold text-emerald-600">
                      {claims.filter((claim) => claim.status === "approved").length}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Help Card */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl border border-teal-200 p-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">Need Help?</h3>
              <p className="text-teal-700 text-sm mb-4">
                If you believe this item belongs to you, make sure to provide detailed information in your claim.
              </p>
              <button className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors">
                Contact Support →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Form Modal */}
      {showClaimForm && (
        <ClaimForm
          item={item}
          currentUser={user}
          onClaimSubmit={handleClaimSubmit}
          onCancel={() => setShowClaimForm(false)}
          totalClaims={claims.length}
        />
      )}
    </div>
  )
}

export default ItemDetail
