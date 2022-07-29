import { useState } from 'react'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import '../../styles/form.css'

// vista login
export default function Login() {

  const {login} = useAuth();
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
      await login(user.email, user.password)
      navigate('/board')
    }catch(error){
      console.log(error.code);
      if (error.code === 'auth/user-not-found'){
        setError('usuario no registrado')
      }else{
        setError('error al iniciar sesión');
      }
    }
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input className='form__email'
          type='email' 
          name='email' 
          placeholder='myemail@gmail.com'
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input className='form__password'
          type='password' 
          name='password' 
          id='password'
          onChange={handleChange}
          placeholder='XXXXX'
        />
        
        <button className='form__button--Send'>Login</button>
        <button className='form__button--Google'>Iniciar sesión con Google</button>
        <button className='form__button--login'>Registrate</button>
        
        {error && <p>{error}</p>}  
      </form>
    </>
  )
}