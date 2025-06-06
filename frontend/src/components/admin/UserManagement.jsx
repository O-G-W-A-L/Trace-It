"use client"

import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Trash2, Edit, User, Mail, Phone, MapPin, Shield } from "lucide-react"

const UserManagement = ({ users, fetchData, showToast }) => {
  const handleDeleteUser = async (userId) => {
    if (!confirm("Are you sure you want to delete this user?")) return

    try {
      const userRef = doc(db, "users", userId)
      await deleteDoc(userRef)
      fetchData()
      showToast("User deleted successfully", "success")
    } catch (error) {
      console.error("Error deleting user:", error)
      showToast("Failed to delete user. Please try again.", "error")
    }
  }

  const displayUserInfo = (info) => {
    return info || "Not provided"
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <p className="text-slate-600">Manage registered users and their information</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-gradient-to-r from-teal-50 to-cyan-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">
                  User Profile
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">
                  Contact Information
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">
                  Details
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12">
                        {user.profileImageUrl ? (
                          <img
                            src={user.profileImageUrl || "/placeholder.svg"}
                            alt={user.fullName}
                            className="h-12 w-12 rounded-full object-cover border-2 border-teal-200"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-white font-semibold text-lg">
                            {displayUserInfo(user.fullName)?.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-slate-900">{displayUserInfo(user.fullName)}</div>
                        <div className="text-sm text-slate-500 flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          ID: {user.id?.slice(0, 8)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-slate-900">
                        <Mail className="h-4 w-4 mr-2 text-teal-600" />
                        {displayUserInfo(user.email)}
                      </div>
                      <div className="flex items-center text-sm text-slate-900">
                        <Phone className="h-4 w-4 mr-2 text-teal-600" />
                        {displayUserInfo(user.phone)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-slate-900">
                        <MapPin className="h-4 w-4 mr-2 text-teal-600" />
                        {displayUserInfo(user.address)}
                      </div>
                      <div className="text-sm text-slate-500">Gender: {displayUserInfo(user.gender)}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        user.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {user.role === "admin" && <Shield className="h-3 w-3 mr-1" />}
                      {user.role || "User"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <button className="text-teal-600 hover:text-teal-800 transition-colors duration-200 p-2 hover:bg-teal-50 rounded-lg">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:text-red-800 transition-colors duration-200 p-2 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && (
            <div className="text-center py-12">
              <User className="mx-auto h-12 w-12 text-slate-400 mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">No users found</h3>
              <p className="text-slate-500">Users will appear here once they register</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserManagement
