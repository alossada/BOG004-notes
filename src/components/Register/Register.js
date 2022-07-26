import { useState } from 'react'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';


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
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input 
          type='email' 
          name='email' 
          placeholder='myemail@gmail.com'
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input 
          type='password' 
          name='password' 
          id='password'
          onChange={handleChange}
          placeholder='XXXXX'
        />

        <button>Register</button>

        {error && <p>{error}</p>} 
      </form>
    </>
  )
}