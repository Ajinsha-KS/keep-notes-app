import { useState, useEffect } from "react";

function NoteForm({ onSubmit, editingNote, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fills the form when editing a note
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
      />
      <div className="form-actions">
        <button type="submit">
          {editingNote ? "Update Note" : "Add Note"}
        </button>
        {editingNote && (
          <button type="button" onClick={onCancelEdit} className="cancel-btn">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;