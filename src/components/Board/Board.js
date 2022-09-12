import { useEffect, useContext } from "react";
import { NoteContext } from "../../context/noteContext";
import { useAuth } from "../../context/authContext";

import { Note } from "./Note";
import { Notes } from "./Notes";
import { AlertPopUp } from "./AlertPopUp";

import logo from "../../assets/images/Logo_Khipu_secondary_1x.png";
import { FaUserAlt } from "react-icons/fa";
import "../../styles/board.modules.css";

export default function Board() {
  
  const { user, logout, loading } = useAuth(); //me trae la información del usuario (verifiga el login)
  const { notes, idToDelete, getDataNotes } = useContext(NoteContext);

  useEffect(() => {
    getDataNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <h1>loading</h1>;

  const handleLogout = async () => {
    await logout();
  };

  const idNotes = notes.filter((note) => note.data().uid === user.uid);

  return (
    <>
      <header className="notes__header">
        <img className="notes__logo" src={logo} alt="Logo khipu"></img>
        <section className="notes__sectionIcon">
          <FaUserAlt className="notes__icon" />
          <button className="notes__logoutBotton" onClick={handleLogout}>
            Logout
          </button>
        </section>
      </header>
      <Note uid={user.uid} />
      {idNotes.length !== 0 && <Notes idNotes={idNotes} />}
      {idToDelete.length !== 0 && <AlertPopUp />}
    </>
  );
}
