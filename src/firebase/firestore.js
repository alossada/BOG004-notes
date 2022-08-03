import { db } from "./firebase-init";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";

const userNotes = collection(db, "user-notes");

// CREATE
export const createNote = (uid, note) => {
  addDoc(userNotes, { uid, note, postCreatedAt: serverTimestamp() });
};

// export const getNotes = () => {
//   getDocs(userNotes);
// };

export const getAllNotes = (querySnapshot) => {
  onSnapshot(userNotes, querySnapshot);
};

// funcion para acceder a una publicación
export const getNote = (uid) => {
  const docRef = doc(userNotes, uid);
  const docSnap = getDoc(docRef);
  return docSnap;
};
