import React, { useState } from "react";
import {
  User,
  Bell,
  Globe,
  Shield,
  Users,
  Layout,
  Key,
  Database,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function UserSettings() {
  const [user, setUser] = useState({
    name: "User Name",
    email: "user@example.com",
    avatar: "https://i.ibb.co/LRnJXhM/PNG-type-banner-frame-For-Editing.jpg",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed z-10 w-full bg-white border-b border-gray-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold">Account Settings</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16 mx-auto max-w-7xl">
        <div className="w-64 fixed h-[calc(100vh-4rem)] bg-white border-r border-gray-200">
          <div className="p-4">
            <div className="flex items-center mb-6 space-x-3">
              <img src={user.avatar} alt="" className="w-10 h-10 rounded-lg" />
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <div className="space-y-1">
              <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-blue-700 rounded-lg bg-blue-50">
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4" />
                  <span>My Account</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <Bell className="w-4 h-4" />
                  <span>Notifications</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4" />
                  <span>Language & Region</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4" />
                  <span>Security</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-8">
              <h4 className="px-3 mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Workspace
              </h4>
              <div className="space-y-1">
                <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4" />
                    <span>Members</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Layout className="w-4 h-4" />
                    <span>Billing</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="px-3 mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Advanced
              </h4>
              <div className="space-y-1">
                <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Key className="w-4 h-4" />
                    <span>API Keys</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Database className="w-4 h-4" />
                    <span>Import/Export</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
              <button className="flex items-center justify-center w-full px-3 py-2 space-x-2 text-sm text-red-600 rounded-lg hover:bg-red-50">
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 ml-64">
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="mb-6 text-lg font-medium">Profile Settings</h2>

                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <img
                      src={user.avatar}
                      alt=""
                      className="w-24 h-24 rounded-lg"
                    />
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Change Photo
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Display Name
                      </label>
                      <input
                        type="text"
                        value={user.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <button className="w-full px-3 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-50">
                        Change password
                      </button>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Two-Factor Authentication
                      </label>
                      <button className="w-full px-3 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-50">
                        Set up 2FA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
