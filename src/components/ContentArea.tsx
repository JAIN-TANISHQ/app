import React from 'react';
import { Share2, MessageSquare, Star, MoreHorizontal } from 'lucide-react';

export default function ContentArea() {
  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      <div className="border-b border-[#e8e8e8] px-3 py-2 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Getting Started</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded-sm">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-sm">
            <MessageSquare className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-sm">
            <Star className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-sm">
            <MoreHorizontal className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
        <p className="text-gray-600 mb-8">👋 Welcome to Notion!</p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Here are the basics:</h2>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 group">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">⋮⋮</div>
              <input type="checkbox" className="rounded-sm" />
              <span>Click anywhere and just start typing</span>
            </div>
            
            <div className="flex items-center space-x-2 group">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">⋮⋮</div>
              <input type="checkbox" className="rounded-sm" />
              <span>Hit / to see all the types of content you can add - headers, videos, sub pages, etc.</span>
            </div>
            
            <div className="flex items-center space-x-2 group">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">⋮⋮</div>
              <input type="checkbox" className="rounded-sm" />
              <span>Highlight any text, and use the menu that pops up to style your writing <span className="bg-yellow-200">however</span> you like</span>
            </div>
            
            <div className="flex items-center space-x-2 group">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">⋮⋮</div>
              <input type="checkbox" className="rounded-sm" />
              <span>See the ⋮⋮ to the left of this checkbox on hover? Click and drag to move this line</span>
            </div>
            
            <div className="flex items-center space-x-2 group">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">⋮⋮</div>
              <input type="checkbox" className="rounded-sm" />
              <span>Click + New page at the top of your sidebar to add a new page</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}