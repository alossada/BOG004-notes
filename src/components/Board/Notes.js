import { useState, useEffect } from "react";
import { getNotes } from "../../firebase/firestore";
import StyleNotes from '../../styles/note.module.css'

export default function Notes({ uid }) {
  // // estructura de hook para declarar lista de usuarios
  const [users, setUsers] = useState([]);

  // funcion para peticion de usuarios
  const getDataNotes = async () => {
    getNotes()
      .then((response) => {
        setUsers(response.docs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { 
    const interval = setInterval(() => { 
      getDataNotes();
    }, 1000); return () => 
    clearInterval(interval);
  }, []);

  return (
    <div className={StyleNotes.note}>
      {/* Filto con uid para transformación */}
      {users &&
        users
          .filter((noti) => noti.data().uid === uid)
          .map((noti) => <p className={StyleNotes.note__text} key={noti.id.toString()}>{noti.data().note}</p>)}
    </div>
  );
}
