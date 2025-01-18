import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Home,
  Inbox,
  FileText,
  Users,
  BookOpen,
  Calendar as CalendarIcon,
  Settings,
  Box,
  Trash2,
  HelpCircle,
  ChevronDown,
  Plus,
  LogOut,
  User,
  MessageSquare
} from 'lucide-react';
import type { UserAccount } from '../types';

interface SidebarProps {
  onUserClick: () => void;
  onViewChange: (view: string) => void;
  currentView: string;
}

export default function Sidebar({ onUserClick, onViewChange, currentView }: SidebarProps) {
  const [user] = useState<UserAccount>({
    name: "User",
    email: "user@example.com",
    avatarUrl: "https://i.ibb.co/LRnJXhM/PNG-type-banner-frame-For-Editing.jpg",
  });

  const [showChat, setShowChat] = useState(false);

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'inbox', icon: Inbox, label: 'Inbox' },
    { id: 'notes', icon: FileText, label: 'Notes' },
    { id: 'calendar', icon: CalendarIcon, label: 'Calendar' },
    { id: 'workspace', icon: Box, label: 'Workspace' },
  ];

  return (
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
              onClick={() => onViewChange(item.id)}
              className={`flex items-center space-x-2 w-full p-1 text-sm rounded-sm ${
                currentView === item.id ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-medium text-gray-500 uppercase">Workspaces</span>
            <button 
              onClick={() => onViewChange('workspace')}
              className="p-1 rounded-sm hover:bg-gray-100"
            >
              <Plus className="w-3 h-3 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-medium text-gray-500 uppercase">Chat</span>
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
                  <span className="text-sm text-gray-600">2 users online</span>
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
        <button 
          onClick={onUserClick}
          className="flex items-center w-full p-2 space-x-2 rounded-lg hover:bg-gray-100"
        >
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt="" className="w-6 h-6 rounded-sm" />
          ) : (
            <User className="w-6 h-6 text-gray-600" />
          )}
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
}