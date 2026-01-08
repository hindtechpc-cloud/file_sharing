import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { formatDate } from "../utils/formateDate";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user.user?.user?.name,
    email: user.user?.user?.email,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser({ ...user.user, ...formData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">My Profile</h1>
        <p className="text-sm text-gray-500">
          Manage your account and personal information
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-semibold text-blue-600">
              {user?.user?.name[0]}
            </div>

            <h2 className="mt-4 text-lg font-medium text-gray-800">
              {user?.user?.name}
            </h2>
            <p className="text-sm text-gray-500">{user?.role}</p>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Account Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Info label="Full Name" value={user?.user?.name} />
            <Info label="Email Address" value={user?.user?.email} />
            <Info label="Role" value={user?.role||"Content Creator"} />
            <Info label="Joined On" value={formatDate(user?.user?.createdAt)} />
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat label="Total Files" value={user.totalFiles||0} />
            <Stat label="Shared Files" value={user.sharedFiles||0} />
            <Stat label="Storage Used" value={user.storageUsed||0} />
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Edit Profile
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm border border-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------ Small Helpers ------------------ */

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 text-center">
      <p className="text-lg font-semibold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}
