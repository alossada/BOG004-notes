import { useContext } from "react";
import { NoteContext } from "../../context/noteContext";
import StyleNotes from "../../styles/note.module.css";

export const Notes = ({ idNotes }) => {
  
  const { onSetIdToDelete } = useContext(NoteContext);

  return (
    <div className={StyleNotes.note}>
      {idNotes.map((note) => (
        <div key={note.id.toString() + "-note"}>
          <p className={StyleNotes.note__text}>{note.data().note}</p>
          <button
            type="button"
            id={note.id.toString()}
            onClick={(e) => {
              onSetIdToDelete(e.target.id);
            }}
          >
            Borrar
          </button>
        </div>
      ))}
    </div>
  );
};
