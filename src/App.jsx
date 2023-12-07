import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './Components/Acceuil';
import Register from './Components/Register';

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
 
 <Routes>
 <Route path="/" element={<Acceuil/>}></Route>
 <Route path="/register" element={<Register/>}></Route>
 </Routes>
 </BrowserRouter>
      </div>
    </>
  )
}

export default App
