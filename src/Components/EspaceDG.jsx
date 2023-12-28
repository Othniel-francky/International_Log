import React, {useState} from 'react'
import { SiYourtraveldottv } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import "../styles/espaceDG.css"
import  axios  from 'axios';

function espaceDG() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/espacedg', {
        username: email,
        password: password,
      });

      // En supposant que votre backend renvoie un jeton (token) lors de la connexion réussie
      const token = response.data.token;

      // Stockez le jeton dans le stockage local (localStorage) ou dans un système de gestion d'état
      // Pour la simplicité, j'utilise localStorage ici
      localStorage.setItem('token', token);

      // Redirigez vers le tableau de bord ou une autre page après une connexion réussie
      navigate('/homeAdmni');
    } catch (error) {
      console.error('Échec de la connexion', error);
      // Gérez l'erreur, affichez un message d'erreur, etc.
    }
  };

  return (
    <div className='espaceDG'>
     <div className='hote'>
      <SiYourtraveldottv  className='icon'/>
      <h1>Inter-Logistics S.A</h1>
    </div>

    <div className="form-box">
        <h1 id='title'>Connexion</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="input-group" id='nameField'>

                <div className="input-field">
                <FaEnvelope className='ico'/>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <div className="error"></div>
                <div className="error"></div>
                </div>

                <div className="input-field">
                <RiLockPasswordFill className='ico'/>
                <input type="password" placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="error"></div>
                <div className="error"></div>
                </div>
                <p>Lost password <a href="#">Clique Here</a></p>
            </div>
            <div className="btn-field">
                <button type='submit'id='signinBtn' className='disable'>Se Connecter</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default espaceDG
