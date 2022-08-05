import { useState, useEffect } from 'react';
import { getNotes, deleteNote } from '../../firebase/firestore';
import StyleNotes from '../../styles/note.module.css';

export default function Notes({ uid }) {
  // hooks para declarar notas, id
  const [notes, setNotes] = useState([]);
  const [idToDelete, setIdToDelete] = useState();

  // funcion de peticion de notas
  const getDataNotes = async () => {
    getNotes()
      .then((response) => {
        setNotes(response.docs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Condicional para eliminar nota
  if (idToDelete) {
    deleteNote(idToDelete);
    setIdToDelete('');
    getDataNotes();
  }

  return (
    // Filtro con uid para transformación
    <div className={StyleNotes.note}>
      {notes &&
        notes
          .filter((memo) => memo.data().uid === uid)
          .map((memo) => (
            <div key={memo.id.toString() + '-note'}>
              <p className={StyleNotes.note__text}>{memo.data().note}</p>
              <button
                type='button'
                id={memo.id.toString()}
                onClick={(e) => {
                  setIdToDelete(e.target.id);
                }}
              >
                Borrar
              </button>
            </div>
          ))}
    </div>
  );
}
