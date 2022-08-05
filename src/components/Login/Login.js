import { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo_Khipu_1x.png'
import logoGoogle from '../../assets/images/logogoogle.png'
import '../../styles/form.css';

export default function Login() {
  const { login, googleLogin } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate('/board', { replace: true });
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Usuario no registrado');
      } else {
        setError('Error al iniciar sesión');
      }
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await googleLogin();
      navigate('/board', { replace: true });
    } catch (error) {
      if (error) {
        setError('Error al iniciar sesión con google');
      }
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  }, [error]);

  const handleChangeUrl = () => {
    return navigate('/register', { replace: true });
  };

  return (
    <div className='container'>
      <form className='form'  onSubmit={handleSubmit}>
        <img className='form__logo' src={ logo } alt='logo'/>
        <label htmlFor='email'>Correo</label>
        <input
          className='form__email'
          type='email'
          name='email'
          placeholder='Correo Electronico'
          onChange={handleChange}
        />

        <label htmlFor='password'>Contraseña</label>
        <input
          className='form__password'
          type='password'
          name='password'
          id='password'
          onChange={handleChange}
          placeholder='Contraseña'
        />

        <button type='submit' className='form__button--Send'>
          Iniciar Sesión
        </button>

        {error && <p>{error}</p>}
      </form>
      <section className='section__buttons'>
        <button
          type='button'
          className='form__button--Google'
          onClick={handleGoogle}
        >
          Iniciar sesión con <img className='form__logoGoogle'  src={ logoGoogle } alt='logoGoogle'/>
        </button>

        <button
          type='button'
          className='form__button--login'
          onClick={handleChangeUrl}
        >
          ¿Eres nuevo en Khipu?<span className='form__button--register'>Registrate</span> 
        </button>
      </section>
      </div>
  );
}
