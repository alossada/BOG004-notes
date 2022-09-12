import { db } from "./firebase-init";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  doc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";

// COLLECTION
const userNotes = collection(db, "user-notes");

// CREATE
export const createNote = (uid, note) => {
  addDoc(userNotes, { 
    uid, 
    note, 
    createdDate: serverTimestamp() 
  });
};

// READ
export const getNotes = async () => {
  return await getDocs(userNotes);
};

// SORT
export const sortedQuery = query(userNotes, orderBy('createdDate', 'desc'));

// INSTANT READ
export const getAllNotes = (setNotes) => {
  return onSnapshot(sortedQuery, userNotes, (querySnapshot)=>{
    setNotes(querySnapshot.docs)
  });
};

// DELETE
export const deleteNote = (id) => {
  deleteDoc(doc(userNotes, id));
};
