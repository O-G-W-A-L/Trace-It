import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AutoClaimApproval({ claimId, onAutoResult }) {
  const [status, setStatus] = useState("Checking...");
  const [autoApproved, setAutoApproved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAutoApproval = async () => {
      try {
        const response = await axios.post(
          `/api/claims/auto-approve`,
          { claimId },
          { headers: { "Content-Type": "application/json" } }
        );

        const { autoApproved, similarityScore, message } = response.data;

        setAutoApproved(autoApproved);
        setStatus(autoApproved ? "Auto-approved ✅" : "Requires Manual Review ❗");
        if (onAutoResult) {
          onAutoResult({
            autoApproved,
            similarityScore,
            message,
          });
        }
      } catch (err) {
        console.error("Error in auto-approval:", err);
        setError("Auto-approval failed. Please try again.");
        setStatus("Error occurred ❌");
        if (onAutoResult) {
          onAutoResult({
            autoApproved: false,
            similarityScore: null,
            message: "Auto-approval system error. Claim sent for manual review.",
          });
        }
      }
    };

    if (claimId) {
      checkAutoApproval();
    }
  }, [claimId, onAutoResult]);

  return (
    <div className="bg-white rounded-xl shadow p-4 mt-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">Auto Approval Status</h3>
      <p className="text-sm text-gray-600 mt-2">
        {status}
        {error && <span className="text-red-500 ml-2">{error}</span>}
      </p>
      {autoApproved !== null && (
        <p
          className={`mt-3 text-sm font-medium ${
            autoApproved ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {autoApproved
            ? "✅ This claim was automatically approved based on the similarity score."
            : "🔎 This claim has been routed to manual review for further analysis."}
        </p>
      )}
    </div>
  );
}
