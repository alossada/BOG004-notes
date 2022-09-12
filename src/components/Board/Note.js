import { useState, useEffect, useContext } from 'react';
import { NoteContext } from '../../context/noteContext';
import { createNote } from '../../firebase/firestore';
import StyleNote from'../../styles/note.module.css'

export const Note = ({ uid })=> {

  const { onSetNewNote } = useContext(NoteContext);

  const [error, setError] = useState();

  const [noteText, setNotetext] = useState({
    userText: '',
  });

  const { userText } = noteText;

  const handleInputChange = ({ target }) => {
    setNotetext({
      ...noteText,
      [target.name]: target.value,
    });
  };

  const saveNote = (e) => {
    e.preventDefault();
    if (userText !== '') {
      createNote(uid, noteText.userText);
      onSetNewNote();
      setNotetext({ userText: '' });
    }else{
      setError('Ingresa la nota que quieres guardar');
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  }, [error]);

  return (
    <form className={StyleNote.input} onSubmit={saveNote}>
      <input
        type='text'
        id='userText'
        name='userText'
        value={userText}
        autoComplete='off'
        placeholder='Escribe una nota...'
        onChange={handleInputChange}
        className={StyleNote.input__note}
      ></input>
      <button type="onSubmit" className={StyleNote.input__botton}>Save</button>
      {error && <p>{error}</p>}
    </form>
  );
}
