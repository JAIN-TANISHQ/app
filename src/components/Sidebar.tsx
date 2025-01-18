import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Home,
  Inbox,
  FileText,
  Box,
  ChevronDown,
  Plus,
  LogOut,
  User,
  MessageSquare,
  Star,
  Calendar,
} from "lucide-react";

const Sidebar = () => {
  const [user, setUser] = useState({
    name: "User",
    email: "user@example.com",
    avatarUrl: "https://i.ibb.co/LRnJXhM/PNG-type-banner-frame-For-Editing.jpg",
  });

  const [showChat, setShowChat] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showUpgradePlans, setShowUpgradePlans] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentView, setCurrentView] = useState("home");
  const menuRef = useRef(null);

  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "inbox", icon: Inbox, label: "Inbox" },
    { id: "notes", icon: FileText, label: "Notes" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "workspace", icon: Box, label: "Workspace" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 bottom-0 w-60 bg-[#fbfbfa] border-r border-[#e8e8e8] flex flex-col">
        <div className="flex items-center p-3 space-x-2">
          <button className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-[2px] flex items-center justify-center">
            <span className="text-sm font-medium">A</span>
          </button>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>

        <div className="px-3 py-1">
          <div className="relative">
            <Search className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 left-2 top-1/2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-1 pl-8 pr-3 text-sm bg-gray-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="px-3 py-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex items-center space-x-2 w-full p-1 text-sm rounded-sm ${
                  currentView === item.id ? "bg-gray-100" : "hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between px-3">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Workspaces
              </span>
              <button
                onClick={() => setCurrentView("workspace")}
                className="p-1 rounded-sm hover:bg-gray-100"
              >
                <Plus className="w-3 h-3 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between px-3">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Chat
              </span>
              <button
                onClick={() => setShowChat(!showChat)}
                className="p-1 rounded-sm hover:bg-gray-100"
              >
                <MessageSquare className="w-3 h-3 text-gray-500" />
              </button>
            </div>
            {showChat && (
              <div className="px-3 mt-2">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center mb-2 space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      2 users online
                    </span>
                  </div>
                  <button className="w-full px-3 py-2 text-sm text-blue-600 rounded-md bg-blue-50 hover:bg-blue-100">
                    Start Chat
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-[#e8e8e8] p-3">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center w-full p-2 space-x-2 rounded-lg hover:bg-gray-100"
            >
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt=""
                  className="w-8 h-8 rounded-lg"
                />
              ) : (
                <User className="w-6 h-6 text-gray-600" />
              )}
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  isMenuOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {/* User Menu Dropdown */}
            {isMenuOpen && (
              <div className="absolute left-0 w-48 mb-2 duration-200 bg-white border border-gray-200 rounded-lg shadow-lg bottom-full animate-in fade-in slide-in-from-bottom-2">
                <div className="py-1">
                  <button
                    onClick={() => {
                      setShowUpgradePlans(true);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Star className="w-4 h-4 mr-3" />
                    Upgrade to Pro
                  </button>
                  <button
                    onClick={() => {
                      setShowFeedback(true);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <MessageSquare className="w-4 h-4 mr-3" />
                    Send Feedback
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    <LogOut className="w-4 h-4 mr-3" />
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 duration-200 bg-black bg-opacity-50 animate-in fade-in">
          <div className="fixed inset-y-0 right-0 w-full max-w-2xl duration-300 bg-white shadow-xl animate-in slide-in-from-right">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Settings</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="absolute p-2 rounded-lg top-4 right-4 hover:bg-gray-100"
              >
                ×
              </button>
              {/* Simple settings content */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Plans Modal */}
      {showUpgradePlans && (
        <div className="fixed inset-0 z-50 duration-200 bg-black bg-opacity-50 animate-in fade-in">
          <div className="fixed inset-y-0 right-0 w-full max-w-2xl duration-300 bg-white shadow-xl animate-in slide-in-from-right">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Upgrade Plans</h2>
              <button
                onClick={() => setShowUpgradePlans(false)}
                className="absolute p-2 rounded-lg top-4 right-4 hover:bg-gray-100"
              >
                ×
              </button>
              {/* Upgrade plans content with image */}
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h3 className="mb-2 text-lg font-semibold">Basic Plan</h3>
                  <p className="text-sm text-gray-600">
                    Access to basic features and support.
                  </p>
                  <img
                    src="/img/subscription/basic-plan.png"
                    alt="Basic Plan"
                    className="w-full h-auto mt-2"
                  />
                  <button className="px-4 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Choose Basic
                  </button>
                </div>
                <div className="p-4 border rounded-md">
                  <h3 className="mb-2 text-lg font-semibold">Pro Plan</h3>
                  <p className="text-sm text-gray-600">
                    Access to all features and priority support.
                  </p>
                  <img
                    src="/img/subscription/pro-plan.png"
                    alt="Pro Plan"
                    className="w-full h-auto mt-2"
                  />
                  <button className="px-4 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Choose Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 z-50 duration-200 bg-black bg-opacity-50 animate-in fade-in">
          <div className="fixed inset-y-0 right-0 w-full max-w-2xl duration-300 bg-white shadow-xl animate-in slide-in-from-right">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Send Feedback</h2>
              <button
                onClick={() => setShowFeedback(false)}
                className="absolute p-2 rounded-lg top-4 right-4 hover:bg-gray-100"
              >
                ×
              </button>
              {/* Feedback form content */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Feedback
                  </label>
                  <textarea
                    rows="4"
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                    placeholder="Enter your feedback here..."
                  ></textarea>
                </div>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
