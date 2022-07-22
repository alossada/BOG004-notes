import {Routes, Route} from 'react-router-dom'
import Board from './Board/Board'
import Login from './Login/Login'
import Register from './Register/Register'
import AuthProvider from '../context/authContext'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Board/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </AuthProvider>
  )
}
