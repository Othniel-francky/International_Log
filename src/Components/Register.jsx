import React, { useEffect } from 'react';
import { SiYourtraveldottv } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "../styles/register.css"

function Register() {

   
  return (
    <div className='register'>
     <div className='header'>
      <SiYourtraveldottv  className='icon'/>
      <h1>Inter-Logistics S.A</h1>
    </div>

    <div className="form-box">
        <h1 id='title'>S'enregistrer</h1>
        <form action="">
            <div className="input-group" id='nameField'>
                <div className="input-field">
                <IoMdPerson className='ico'/>
                <input type="text" placeholder='Name'/>
                </div>

                <div className="input-field">
                <FaEnvelope className='ico'/>
                <input type="email" placeholder='Email'/>
                </div>

                <div className="input-field">
                <RiLockPasswordFill className='ico'/>
                <input type="password" placeholder='Password'/>
                </div>
                <p>Lost password <a href="#">Clique Here</a></p>
            </div>
            <div className="btn-field">
                <button type='button' id='signupBtn'>Sign Up</button>
                <button type='button'id='signinBtn' className='disable'>Sign In</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register
