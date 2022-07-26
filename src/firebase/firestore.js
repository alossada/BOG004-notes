import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase-init';

// CREATE
export const createNote = (note) => {
  addDoc(collection(db, 'content'), { note })
}