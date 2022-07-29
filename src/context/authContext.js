import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut}
  from 'firebase/auth'
import { auth } from '../firebase/firebase-init';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if(!context) throw new Error('There is not auth provider')
  return context;
};

export default function AuthProvider ({ children }) {

  const [user, setUser] = useState(null);  
  const [loading, setLoading] = useState(true)

  //Función para crear usuari0
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

  //Función para ingresar con usuario y contraseña registrados
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

  //Función para cerrar cesión 
  const logout = () => signOut(auth)

  useEffect(() => {//se almacena la información del usuario
    //onAuthStateChanged verifica si el usuario esta logeado o no
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);// muestra la info si esta logeado si no sale null
      setLoading(false)
    })
    return () => unsuscribe();
  }, [])

  return(
    <authContext.Provider value={{signup, login, user, logout, loading}}>
      {children}
    </authContext.Provider>
  )
}