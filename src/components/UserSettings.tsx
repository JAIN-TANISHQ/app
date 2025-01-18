import React, { useState } from "react";
import {
  User,
  Settings,
  Bell,
  Link,
  Globe,
  Shield,
  Users,
  Layout,
  Key,
  Database,
  Plug,
  Download,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function UserSettings() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&q=80",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold">Account Settings</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex max-w-7xl mx-auto pt-16">
        <div className="w-64 fixed h-[calc(100vh-4rem)] bg-white border-r border-gray-200">
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-6">
              <img src={user.avatar} alt="" className="w-10 h-10 rounded-lg" />
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <div className="space-y-1">
              <button className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg bg-blue-50 text-blue-700">
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4" />
                  <span>My Account</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Bell className="w-4 h-4" />
                  <span>Notifications</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4" />
                  <span>Language & Region</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4" />
                  <span>Security</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-8">
              <h4 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Workspace
              </h4>
              <div className="space-y-1">
                <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4" />
                    <span>Members</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Layout className="w-4 h-4" />
                    <span>Billing</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Advanced
              </h4>
              <div className="space-y-1">
                <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Key className="w-4 h-4" />
                    <span>API Keys</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Database className="w-4 h-4" />
                    <span>Import/Export</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
              <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-64 p-8">
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-medium mb-6">Profile Settings</h2>

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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <button className="w-full px-3 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-50">
                        Change password
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
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
