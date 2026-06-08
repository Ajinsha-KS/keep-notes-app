import NoteCard from "./NoteCard"
import React from 'react'

function NoteList({notes,onEdit,onDelete}) {
    if (notes.length===0)
    {
        return <p className="empty-msg">No notes yet. Create one above!</p>
    }
  return (
    <div className="note-list">
        {notes.map((note)=>(
            <NoteCard
                key={note.id}
                note={note}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        ))}
      
    </div>
  );
}

export default NoteList
