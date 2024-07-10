import React, { useState } from 'react';

export default function Que4() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [editIndex, setEditIndex] = useState(null);
  
    const handleAddNote = () => {
      if (newNote.trim() === '') return;
      if (editIndex !== null) {
        // If editing existing note
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = newNote;
        setNotes(updatedNotes);
        setEditIndex(null);
      } else {
        // If adding new note
        setNotes([...notes, newNote]);
      }
      setNewNote('');
    };
  
    const handleEditNote = (index) => {
      setNewNote(notes[index]);
      setEditIndex(index);
    };
  
    const handleDeleteNote = (index) => {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);
      setNotes(updatedNotes);
    };
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
    <h1 className="text-center text-3xl font-bold mb-4">Sticky Notes</h1>
    <div className="mb-4">
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Add a new note..."
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      ></textarea>
    </div>
    <button
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-2 focus:outline-none"
      onClick={handleAddNote}
    >
      {editIndex !== null ? 'Update Note' : 'Add Note'}
    </button>
    <div>
      {notes.map((note, index) => (
        <div key={index} className="bg-white p-4 mb-2 rounded-md shadow-md">
          <p className="text-sm">{note}</p>
          <div className="mt-2 flex justify-end">
            <button
              className="text-blue-500 hover:text-blue-600 mr-2 focus:outline-none"
              onClick={() => handleEditNote(index)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:text-red-600 focus:outline-none"
              onClick={() => handleDeleteNote(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};




// 4.    Create a sticky notes application where users can add, edit, and delete sticky notes with text content