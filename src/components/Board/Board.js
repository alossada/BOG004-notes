import { useAuth } from '../../context/authContext';
import Note from './Note';
import Notes from './Notes';
import logo from '../../assets/images/Logo_Khipu_secondary_1x.png'
import {FaUserAlt} from 'react-icons/fa'
import '../../styles/board.modules.css'

export default function Board() {
  const { user, logout, loading } = useAuth(); //me trae la información del usuario (verifiga el login)

  if (loading) return <h1>loading</h1>;

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <header className='notes__header'>
          <img className='notes__logo' src={logo} alt='Logo khipu'></img>
        <section className='notes__sectionIcon'>
            <FaUserAlt className='notes__icon'/>
          <button className='notes__logoutBotton' onClick={handleLogout}>logout</button>
        </section>
      </header>
      <Note uid={user.uid} />
      <Notes uid={user.uid} />
    </div>
  );
}
