import React from 'react';
import { Search, Bell, Settings, ChevronDown } from 'lucide-react';
import { User } from '../types';

const mockUser: User = {
  name: 'John Smith',
  role: 'Product Manager',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80'
};

export default function Header() {
  return (
    <header className="h-[60px] bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 px-4">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">Analytics</span>
        </div>
        
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src={mockUser.avatar}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium">{mockUser.name}</p>
              <p className="text-xs text-gray-500">{mockUser.role}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}