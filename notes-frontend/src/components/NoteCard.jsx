import React from 'react'

function NoteCard({note,onEdit,onDelete}) {
  return (
    <div className='note-card'>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="card-actions">
        <button onClick={()=>onEdit(note)} className='edit-btn'>Edit</button>
        <button onClick={()=>onDelete(note.id)} className='delete-btn'>Delete</button>
      </div>
    </div>
  )
}

export default NoteCard
