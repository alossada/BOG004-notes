import { useState, useEffect } from 'react';
import { createNote } from '../../firebase/firestore';
import StyleNote from'../../styles/note.module.css'

export default function Note({ uid }) {
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

  const saveNote = () => {
    if (userText !== '') {
      createNote(uid, noteText.userText);
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
    <div className={StyleNote.input}>
      <input
        id='userText'
        type='text'
        name='userText'
        value={userText}
        placeholder='Escribe una nota...'
        onChange={handleInputChange}
        className={StyleNote.input__note}
      ></input>
      <button className={StyleNote.input__botton} onClick={saveNote}>Save</button>
      {error && <p>{error}</p>}
    </div>
  );
}
