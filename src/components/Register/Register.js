import { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo_Khipu_1x.png'
import logoGoogle from '../../assets/images/logogoogle.png'
import '../../styles/form.css';


export default function Register() {
  const { signup, googleLogin } = useAuth();

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
      await signup(user.email, user.password);
      navigate('/board', { replace: true });
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/weak-password') {
        setError('La contraseña no tiene 6 caracteres');
      } else {
        setError('Error al registrar usuario');
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
    return navigate('/', { replace: true });
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
      <img className='form__logo' src={ logo } alt='logo'/>
        <label className='form__title' htmlFor='email'>
          Email
        </label>
        <input
          className='form__email'
          type='email'
          name='email'
          placeholder='Correo Electronico'
          onChange={handleChange}
        />

        <label className='form__title' htmlFor='password'>
          Contraseña
        </label>
        <input
          className='form__password'
          type='password'
          name='password'
          id='password'
          onChange={handleChange}
          placeholder='Contraseña'
        />

        <p>Al hacer click en Registrarme aceptas las condiciones de uso de la aplicación Khipu Notes.</p>

        <button type='submit' className='form__button--Send'>
          Registrarme
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
          ¿Ya tienes cuenta en Khipu?<span className='form__button--register'>Inicia Sesión</span>
        </button>
      </section> 
    </div>
  );
}
