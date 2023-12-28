import React from 'react';
import { SiYourtraveldottv } from "react-icons/si";
import { LuLogOut } from "react-icons/lu";
import "../styles/home.css"

function Home() {
  const userName = localStorage.getItem('user_name')
  return (
    <div className='home'>


      <div className='head'>
        <div className="dispa">
      <SiYourtraveldottv  className='icon'/>
      <h1>Inter-Logistics S.A</h1>
      </div>

      <div className='bal'>
      <button>
      <LuLogOut className='ico'/>
      Se Deconnecter
      </button>
    </div>


    </div>

    <div className="texte">
      <h1>Bonjour, <span>{userName}</span> Voici vos différentes taches de la journée</h1>
    </div>
    </div>
  )
}

export default Home
