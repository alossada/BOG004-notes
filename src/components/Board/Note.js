import { useState, useEffect } from 'react';
import { createNote } from '../../firebase/firestore';

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
    <div>
      <input
        id='userText'
        type='text'
        name='userText'
        value={userText}
        onChange={handleInputChange}
      ></input>

      <button onClick={saveNote}>Save</button>

      {error && <p>{error}</p>}
    </div>
  );
}
