import React from 'react'
import { useState } from 'react';
import { createNote } from '../../firebase/firestore'


export default function Note() {
  
  const [noteText, setNotetext] = useState(null);
  
  const saveNote = () => {
    createNote(noteText)
  }

  return (
  <div>
    <input type='text' onChange={e => setNotetext(e.target.value)}></input>
    <button onClick={saveNote}>Save</button>
  </div>
  )
}
