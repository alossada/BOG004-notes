import { useAuth } from '../../context/authContext';
import Note from './Note';
import Notes from './Notes';

export default function Board() {
  const { user, logout, loading } = useAuth(); //me trae la información del usuario (verifiga el login)

  if (loading) return <h1>loading</h1>;

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
      <h1>Aca estaran las notas de {user.email}</h1>
      <Note uid={user.uid} />
      <Notes uid={user.uid} />
    </div>
  );
}
