import { useContext } from "react";
import { NoteContext } from "../../context/noteContext";

export const AlertPopUp = () => {
  const { onSetIdToDelete, onDeleteNote } = useContext(NoteContext);

  return (
    <>
      <p>Seguro quiere eliminar</p>
      <button
        type="button"
        onClick={() => {
          onDeleteNote();
        }}
      >
        Si
      </button>
      <button
        type="button"
        onClick={() => {
          onSetIdToDelete();
        }}
      >
        No
      </button>
    </>
  );
};
