import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './Components/Acceuil';
import Register from './Components/Register';
import Login from './Components/Login'

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
 
 <Routes>
 <Route path="/" element={<Acceuil/>}></Route>
 <Route path="/register" element={<Register/>}></Route>
 <Route path='/login' element={<Login/>}></Route>
 </Routes>
 </BrowserRouter>
      </div>
    </>
  )
}

export default App
