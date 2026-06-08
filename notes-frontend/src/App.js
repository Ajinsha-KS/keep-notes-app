import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import "./App.css";

const API_URL = "http://127.0.0.1:8000/api/notes/";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error("Error fetching notes:", err));
  };

  const createNote = (noteData) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteData),
    })
      .then((res) => res.json())
      .then((newNote) => setNotes([newNote, ...notes]))
      .catch((err) => console.error("Error creating note:", err));
  };

  const updateNote = (id, noteData) => {
    fetch(`${API_URL}${id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteData),
    })
      .then((res) => res.json())
      .then((updatedNote) => {
        setNotes(notes.map((n) => (n.id === id ? updatedNote : n)));
        setEditingNote(null);
      })
      .catch((err) => console.error("Error updating note:", err));
  };

  const deleteNote = (id) => {
    fetch(`${API_URL}${id}/`, { method: "DELETE" })
      .then(() => setNotes(notes.filter((n) => n.id !== id)))
      .catch((err) => console.error("Error deleting note:", err));
  };

  const handleFormSubmit = (data) => {
    if (editingNote) {
      updateNote(editingNote.id, data);
    } else {
      createNote(data);
    }
  };

  return (
    <div className="app">
      <h1>Keep Notes</h1>
      <NoteForm
        onSubmit={handleFormSubmit}
        editingNote={editingNote}
        onCancelEdit={() => setEditingNote(null)}
      />
      <NoteList
        notes={notes}
        onEdit={setEditingNote}
        onDelete={deleteNote}
      />
    </div>
  );
}

export default App;