import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './Components/Acceuil';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import HomeAdmni from './Components/HomeAdmni';
import EspaceDG from './Components/EspaceDG';

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
 
 <Routes>
 <Route path="/" element={<Acceuil/>}></Route>
 <Route path="/register" element={<Register/>}></Route>
 <Route path='/login' element={<Login/>}></Route>
 <Route path='/home' element={<Home/>}></Route>
 <Route path='/homeAdmni' element={<HomeAdmni/>}></Route>
 <Route path='/espacedg' element={<EspaceDG/>}></Route>
 </Routes>
 </BrowserRouter>
      </div>
    </>
  )
}

export default App
