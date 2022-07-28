import { useAuth } from '../../context/authContext'
import Note from './Note';

export default function Board() { 

  const {user} =useAuth()//me trae la información del usuario (verifiga el login)
  console.log(user);

  return (
    <div>
      <h1>        
        Aca estaran las notas de {user.email}
      </h1>
      <Note/>
    </div>   
  )
}