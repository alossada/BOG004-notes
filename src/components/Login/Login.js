import { useState } from "react"
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

// vista login
export default function Login() {

  const [user, setUser]= useState({
    email:'',
    password:'',
  });
  const {login} = useAuth();
  const navigate = useNavigate();
  const [error, setError]= useState();

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]:value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try{
      await login(user.email, user.password)
      navigate('/')
      
    }catch(error){
      console.log(error.code);
      if (error.code === 'auth/user-not-found'){
        setError('usuario no registrado')
      }
      // setError(error.message);
    }
  }

  return (
    <div>
    {error && <p>{error}</p>}  
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input 
        type='email' 
        name='email' 
        placeholder='myemail@gmail.com'
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input 
        type='password' 
        name='password' 
        id='password'
        onChange={handleChange}
        placeholder='XXXXX'
      />

      <button>Login</button>

    </form>
    </div>

  )
}