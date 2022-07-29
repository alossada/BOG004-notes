import { useState } from 'react'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import '../../styles/form.css'


export default function Register() {

  const {signup} = useAuth();
  const [error, setError]= useState();
  const [user, setUser]= useState({
    email:'',
    password:'',
  });
  const navigate = useNavigate();

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]:value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try{
      await signup(user.email, user.password)
      navigate('/board')
    }catch(error){
      console.log(error.code);
      if (error.code === 'auth/weak-password'){
        setError('La contraseña no tiene 6 caracteres')
      }else{
        setError('error al registrar usuario');
      }
    }
  }

  return (
    <> 
      <form className='form' onSubmit={handleSubmit}>
        <label className='form__title' htmlFor='email'>Email</label>
        <input className='form__email'
          type='email' 
          name='email' 
          placeholder='myemail@gmail.com'
          onChange={handleChange}
        />

        <label className='form__title' htmlFor='password'>Contraseña</label>
        <input className='form__password' 
          type='password' 
          name='password' 
          id='password'
          onChange={handleChange}
          placeholder='xxxxxx'
        />
        <p>Al hacer click en Registrarme aceptas los terminos y condiciones.</p>
        <button className='form__button--Send'>Registrarme</button>
        <button className='form__button--Google'>Iniciar sesión con Google</button>
        <button className='form__button--login'>¿Ya tienes cuenta?</button>        

        {error && <p>{error}</p>} 
      </form>
    </>
  )
}