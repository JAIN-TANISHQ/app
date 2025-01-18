import React, { useState } from 'react';
import { Plus, MoreHorizontal, Folder, BookOpen, FileText, Search, Edit2, Trash2 } from 'lucide-react';

interface WorkspaceItem {
  id: string;
  name: string;
  type: 'project' | 'wiki' | 'note';
  createdAt: Date;
  updatedAt: Date;
}

export default function Workspace() {
  const [items, setItems] = useState<WorkspaceItem[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', type: 'project' as const });
  const [searchQuery, setSearchQuery] = useState('');

  const createItem = () => {
    if (newItem.name.trim()) {
      const item: WorkspaceItem = {
        id: Date.now().toString(),
        name: newItem.name,
        type: newItem.type,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setItems([item, ...items]);
      setNewItem({ name: '', type: 'project' });
      setIsCreating(false);
    }
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'project':
        return <Folder className="w-4 h-4" />;
      case 'wiki':
        return <BookOpen className="w-4 h-4" />;
      case 'note':
        return <FileText className="w-4 h-4" />;
      default:
        return <Folder className="w-4 h-4" />;
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Workspace</h2>
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            <span>Create New</span>
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search workspace..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="text-gray-500">{getIcon(item.type)}</div>
                  <h3 className="font-medium">{item.name}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {}}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <Edit2 className="w-4 h-4 text-gray-500" />
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <Trash2 className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                Last updated: {item.updatedAt.toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isCreating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-medium mb-4">Create New Item</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  value={newItem.type}
                  onChange={(e) => setNewItem({ ...newItem, type: e.target.value as 'project' | 'wiki' | 'note' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="project">Project</option>
                  <option value="wiki">Wiki</option>
                  <option value="note">Note</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setIsCreating(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={createItem}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}