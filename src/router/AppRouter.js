import {Routes, Route} from 'react-router-dom'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Board from '../components/Board/Board'
import AuthProvider from '../context/authContext'

export default function AppRouter() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/board' element={<Board/>}></Route>
      </Routes>
    </AuthProvider>
  )
}