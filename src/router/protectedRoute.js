//este componente redirecciona a la vista solo si el usuario esta autenticado

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

//cualquier componente que desee proteger ira dentro de este
export function ProtectedRoute ({children}) {
 const {user, loading} = useAuth();

 if(loading) return <h1>Loading</h1>

 if(!user) return <Navigate to='/' />

 return <>{children}</>
}