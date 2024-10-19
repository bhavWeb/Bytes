import { useState } from 'react'
import './App.css'
import SignUp from './SignUp'
import PhoneNumber from './pages/PhoneNumber'
import Otp from './pages/Otp'
import LandingPage from './pages/LandingPage'
import Vendor from './pages/Vendor'
import { Route,Routes } from 'react-router-dom'
import User from './pages/User'
import Filters from './components/Filters'
import ItemPopUp from './components/ItemPopUp'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=' w-mwidth h-screen flex-col justify-center'>
      <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/otp' element={<Otp/>}></Route>
      <Route path='/signup' element={<PhoneNumber/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/vendor' element={<Vendor/>}></Route>
      <Route path='/landingpage' element={<LandingPage/>}></Route>
      <Route path='/filters' element={<Filters/>}></Route>
      <Route path='/itempopup' element={<ItemPopUp/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      </Routes>
      
      </div>
  )
}

export default App
