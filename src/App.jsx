import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './Components/Acceuil';

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
 
 <Routes>
 <Route path="/" element={<Acceuil/>}></Route>
 
 </Routes>
 </BrowserRouter>
      </div>
    </>
  )
}

export default App
