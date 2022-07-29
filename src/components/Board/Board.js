import { useAuth } from '../../context/authContext'
import Note from './Note';

export default function Board() { 

  const {user, logout, loading} =useAuth()//me trae la información del usuario (verifiga el login)  
  console.log(user);

  const handleLogout = async() => {
    await logout();    
  }

  if(loading) return <h1>loading</h1>

  return (
    <div>
      <button onClick={handleLogout}>
        logout
      </button>
      <h1>        
        Aca estaran las notas de {user.email}
      </h1>
      <Note/>
    </div>   
  )
}