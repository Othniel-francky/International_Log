import React, { useEffect, useState } from 'react';
import { SiYourtraveldottv } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "../styles/register.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmite = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {email, password})
    .then(result => {
      console.log(result)
      if (result.data === "success") {
        navigate('/home')
      }
		
	})
    .catch(err => console.log(err))
  }
 
  const handleLogin = (e) => {
    e.preventDefault();

    // Use the correct endpoint for login
    axios.post('http://localhost:5000/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'success') {
          navigate('/homeAdmni');
        }
      })
      .catch((err) => console.log(err));
  };
 
  
  return (
    <div className='register'>
     <div className='header'>
      <SiYourtraveldottv  className='icon'/>
      <h1>Inter-Logistics S.A</h1>
    </div>

    <div className="form-box">
        <h1 id='title'>Connexion</h1>
        <form action=""  onSubmit={handleSubmite}>
            <div className="input-group" id='nameField'>

                <div className="input-field">
                <FaEnvelope className='ico'/>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <div className="error"></div>
                </div>

                <div className="input-field">
                <RiLockPasswordFill className='ico'/>
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <div className="error"></div>
                </div>
                <p>Lost password <a href="#">Clique Here</a></p>
            </div>
            <div className="btn-field">
                <Link to="/register"><button type='submit' id='signupBtn' >S'enregistrer</button></Link>
                <button type='submit'id='signinBtn' className='disable'>Se Connecter</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register
