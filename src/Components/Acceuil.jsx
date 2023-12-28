import React from 'react'
import { SiYourtraveldottv } from "react-icons/si";
import { Link } from 'react-router-dom';
import "../styles/acceuil.css"


function Acceuil() {

  return (
    <div className='Acceuil'>

    <div className='hea'>
      <div className='haut'>
      <SiYourtraveldottv  className='icon'/>
      <h1>Inter-Logistics S.A</h1>
      </div>

      <div className='bout'>
      <Link to={"/espaceDG"}><button>Espace DG</button></Link>
      </div>
    </div>

    <div className="text">
    <div className='phrase'>
<h1>Mon Espace de Travail</h1>
    </div>
    </div>
     <div className="bouttom">
      <Link to={"/register"}><button>Connexion</button></Link>
     </div>
    </div>
  )
}

export default Acceuil
