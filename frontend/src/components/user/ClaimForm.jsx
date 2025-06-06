"use client"

import { useState } from "react"
import { collection, addDoc, serverTimestamp, updateDoc, doc, arrayUnion } from "firebase/firestore"
import { db } from "../../firebase/config"
import { toast } from "react-toastify"
import axios from "axios"
import { X, FileText, MapPin, Calendar, Shield } from "lucide-react"

const ClaimForm = ({ item, currentUser, onClaimSubmit, onCancel, isLoading, totalClaims }) => {
  const [claimDetails, setClaimDetails] = useState({
    dateLost: "",
    type: "",
    uniqueIdentifiers: "",
    locationLost: "",
    identificationDetails: "",
    additionalNotes: "",
  })
  const [submitting, setSubmitting] = useState(false)

  const handleClaimSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Step 1: Submit claim to Firestore
      const claimRef = await addDoc(collection(db, "claims"), {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        itemId: item.id,
        status: "pending_review",
        timestamp: serverTimestamp(),
        ...claimDetails,
      })

      // Step 2: Update the associated item document
      await updateDoc(doc(db, "items", item.id), {
        status: "pending_claim",
        claims: arrayUnion(claimRef.id),
        claimCount: totalClaims + 1,
        lastUpdated: serverTimestamp(),
      })

      // Step 3: Trigger backend auto-approval
      try {
        const response = await axios.post("/api/claims/auto-approve", {
          claimId: claimRef.id,
        })

        const { autoApproved, similarityScore, message } = response.data

        if (autoApproved) {
          await updateDoc(doc(db, "claims", claimRef.id), {
            status: "auto_approved",
            autoApproved: true,
            similarityScore,
            autoApprovedAt: serverTimestamp(),
          })
          toast.success("✅ Claim auto-approved! You'll receive confirmation shortly.")
        } else {
          toast.info("🔎 Claim submitted. Awaiting manual review.")
        }
      } catch (autoError) {
        console.warn("Auto-approval error:", autoError)
        toast.info("Claim submitted, but auto-approval system had an issue. Manual review pending.")
      }

      onClaimSubmit()
    } catch (error) {
      console.error("Error submitting claim:", error)
      toast.error("Failed to submit claim. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleInputChange = (field, value) => {
    setClaimDetails((prev) => ({ ...prev, [field]: value }))
  }

  const formFields = [
    {
      name: "dateLost",
      type: "date",
      label: "Date Lost",
      icon: Calendar,
      required: true,
    },
    {
      name: "type",
      type: "text",
      label: "Item Type",
      placeholder: "e.g., Electronics, Document, Jewelry...",
      icon: FileText,
      required: true,
    },
    {
      name: "uniqueIdentifiers",
      type: "textarea",
      label: "Unique Identifiers",
      placeholder: "Describe unique features, serial numbers, or identifiers...",
      icon: Shield,
      required: true,
    },
    {
      name: "locationLost",
      type: "text",
      label: "Location Lost",
      placeholder: "e.g., Kampala, Main Street, University Campus...",
      icon: MapPin,
      required: true,
    },
    {
      name: "identificationDetails",
      type: "textarea",
      label: "Proof of Ownership",
      placeholder: "Provide details to prove ownership (receipts, photos, etc.)...",
      icon: Shield,
      required: true,
    },
    {
      name: "additionalNotes",
      type: "textarea",
      label: "Additional Information",
      placeholder: "Any additional details that might help verify your claim...",
      icon: FileText,
      required: false,
    },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white rounded-t-3xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Claim Item</h2>
              <p className="text-teal-100">Please provide details to verify your ownership</p>
            </div>
            <button
              onClick={onCancel}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Form - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <form onSubmit={handleClaimSubmit} className="space-y-6">
            {formFields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <field.icon className="h-4 w-4 mr-2 text-teal-600" />
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    className="w-full border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white"
                    rows="4"
                    placeholder={field.placeholder}
                    value={claimDetails[field.name]}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    className="w-full border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white"
                    placeholder={field.placeholder}
                    value={claimDetails[field.name]}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </form>
        </div>

        {/* Footer - Always Visible */}
        <div className="p-6 border-t border-slate-200 bg-slate-50 rounded-b-3xl flex-shrink-0">
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="w-full sm:w-auto px-6 py-3 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-100 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleClaimSubmit}
              disabled={submitting || isLoading}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {submitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Shield className="h-4 w-4" />
                  <span>Submit Claim</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClaimForm
