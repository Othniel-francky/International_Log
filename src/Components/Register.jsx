import React, { useEffect, useState } from 'react';
import axios from "axios";
import { SiYourtraveldottv } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiExclamationCircle } from "react-icons/hi";
import "../styles/register.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
 
  useEffect(() => {
    let username = document.getElementById("username");
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let form = document.getElementById("form")
    let errorMsg = document.getElementsByClassName("error")
    let failureIcon = document.getElementsByClassName("puIco")
    let successIcon  = document.getElementsByClassName("puIcon")
    // console.log(username, email, password, form, errorMsg, failureIcon, successIcon);

    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      invalForm(username, 0, "Le champ ne doit pas etre vide");  
    invalForm(email, 1, "Le champ ne doit pas etre vide");
    invalForm(password, 2, "Le champ ne doit pas etre vide");
    });
    let invalForm = (id, serial, message, validationFunc) =>{
      if (id.value.trim() === "") {
          errorMsg[serial].innerHTML = message;
  
  
          failureIcon[serial].style.opacity = "1";
          successIcon[serial].style.opacity = "0";
      }else{
          errorMsg[serial].innerHTML = "";
        
  
          failureIcon[serial].style.opacity = "0";
          successIcon[serial].style.opacity = "1";
      }
      if (validationFunc && !validationFunc(id.value)) {
        errorMsg[serial].innerHTML = "Adresse e-mail invalide";
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
      }
    
  }
  
  }, []);


  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmite = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/register", {name, email, password})
    .then(result => console.log())
    navigate('/login')

    localStorage.setItem('user_name', name)
	navigate.push('/home')
  } 

   
  return (
    <div className='register'> 
     <div className='tete'>
      <SiYourtraveldottv  className='icon'/>
      <h1>Inter-Logistics S.A</h1>
    </div>

    <div className="form-box">
        <h1 id='title'>S'enregistrer</h1>
        <form id="form" onSubmit={handleSubmite}>
            <div className="input-group" id='nameField'>

                <div className="input-field">
                <IoMdPerson className='ico'/>
                <input type="text" placeholder='Name' id="username" onChange={(e) => setName(e.target.value)} />
                <HiExclamationCircle className='puIco'/>
                <FaCheckCircle className='puIcon'/>
                <div className="error"></div>
                </div>

                <div className="input-field">
                <FaEnvelope className='ico'/>
                <input type="email" placeholder='Email' id="email" onChange={(e) => setEmail(e.target.value)}/>
                <HiExclamationCircle className='puIco'/>
                <FaCheckCircle className='puIcon'/>
                <div className="error"></div>
                </div>

                <div className="input-field">
                <RiLockPasswordFill className='ico'/>
                <input type="password" placeholder='Password' id="password" onChange={(e) => setPassword(e.target.value)}/>
                <HiExclamationCircle className='puIco'/>
                <FaCheckCircle className='puIcon'/>
                <div className="error"></div>
                </div>


                <p>Lost password <a href="#">Clique Here</a></p>
            </div>
            <div className="btn-field">
                <button type='submit' id='signupBtn'>S'enregistrer</button>
                <Link to="/login"><button type='button'id='signinBtn' className='disable'>Se Connecter</button></Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register
