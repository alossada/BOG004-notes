import { useEffect, useState } from "react";
import { NoteContext } from "./noteContext";

import { getAllNotes, deleteNote } from "../firebase/firestore";

export const NoteProvider = ({ children }) => {

  // hooks para declarar notas, id
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(false);
  const [idToDelete, setIdToDelete] = useState('');

  const onSetNewNote = () => {
    setNewNote(true);
  };

  const getDataNotes = () => {
    getAllNotes(setNotes);
    setNewNote(false);
  };

  const onSetIdToDelete = (id='') => {
    setIdToDelete(id);
  };

  const onDeleteNote = () => {
    deleteNote(idToDelete);
    setIdToDelete('');
  };

  useEffect(() => {
    if (newNote) {
      getDataNotes();
    }
  }, [newNote]);

  return (
    <NoteContext.Provider
      value={{
        notes,
        idToDelete,
        onSetNewNote,
        getDataNotes,
        onSetIdToDelete,
        onDeleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
