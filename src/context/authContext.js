import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebase/firebase-init";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if(!context) throw new Error('There is not auth provider')
  return context;
};

export default function AuthProvider ({ children }) {

  const [user, setUser] =useState(null);  

  const signup = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password)

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {//se almacena la información del usuario
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);// muestra la info si esta logeado si no sale null
      
    })
  }, [])

  
  
  return(
    <authContext.Provider value={{signup, login, user}}>
      {children}
    </authContext.Provider>
  )
}