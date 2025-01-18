import React, { useState } from 'react';
import { Plus, MoreHorizontal, FileText, Search, Trash2, Edit2 } from 'lucide-react';
import type { Note } from '../types';

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newNoteData, setNewNoteData] = useState({ title: '', content: '' });

  const createNote = () => {
    if (newNoteData.title.trim()) {
      const newNote = {
        id: Date.now().toString(),
        title: newNoteData.title,
        content: newNoteData.content,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setNotes([newNote, ...notes]);
      setNewNoteData({ title: '', content: '' });
      setIsCreating(false);
    }
  };

  const updateNote = (note: Note) => {
    setNotes(notes.map(n => n.id === note.id ? { ...note, updatedAt: new Date() } : n));
    setSelectedNote(null);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    if (selectedNote?.id === id) {
      setSelectedNote(null);
    }
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Notes</h2>
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            <span>New Note</span>
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{note.title}</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedNote(note)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <Edit2 className="w-4 h-4 text-gray-500" />
                  </button>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <Trash2 className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">{note.content}</p>
              <div className="mt-2 text-xs text-gray-400">
                Last updated: {note.updatedAt.toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create/Edit Note Modal */}
      {(isCreating || selectedNote) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-[600px]">
            <h3 className="text-lg font-medium mb-4">
              {isCreating ? 'Create New Note' : 'Edit Note'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={isCreating ? newNoteData.title : selectedNote?.title}
                  onChange={(e) => {
                    if (isCreating) {
                      setNewNoteData({ ...newNoteData, title: e.target.value });
                    } else if (selectedNote) {
                      setSelectedNote({ ...selectedNote, title: e.target.value });
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Note title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  value={isCreating ? newNoteData.content : selectedNote?.content}
                  onChange={(e) => {
                    if (isCreating) {
                      setNewNoteData({ ...newNoteData, content: e.target.value });
                    } else if (selectedNote) {
                      setSelectedNote({ ...selectedNote, content: e.target.value });
                    }
                  }}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Note content"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setIsCreating(false);
                    setSelectedNote(null);
                    setNewNoteData({ title: '', content: '' });
                  }}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (isCreating) {
                      createNote();
                    } else if (selectedNote) {
                      updateNote(selectedNote);
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {isCreating ? 'Create Note' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}