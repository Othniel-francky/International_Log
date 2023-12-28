import React, { useEffect, useState } from 'react';
import { SiYourtraveldottv } from "react-icons/si";
import { LuLogOut } from "react-icons/lu";
import "../styles/homseAdmi.css";
import { ButtonGroup, Button, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomeAdmni() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');

            // Vérifiez que response.data est un tableau avant d'affecter à setUsers
            if (Array.isArray(response.data.users)) {
                setUsers(response.data.users);
            } else {
                console.error('La réponse du serveur ne contient pas un tableau d\'utilisateurs.');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs :', error);
        }
    };

    fetchUsers();
}, []);

  
  

  return (
    <div className="HomeAdmi">

      <div className="nav">
      <div className="heade">
      <SiYourtraveldottv  className='icon'/>
      <h1>Inter-Logistics S.A</h1>
    </div>

    <ButtonGroup>
      <Button variant="success" size="sm">
        Listes Du Personnel
      </Button>

      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
        
        {users.map((user) => (
                <Dropdown.Item href="#/action-1" key={user.id}>
                  {user.name}
                </Dropdown.Item>
              ))}
       
          <Dropdown.Item href="#/action-2">gfcbhjkl,</Dropdown.Item>
          <Dropdown.Item href="#/action-3">dfghjkl</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup> 

    <div className='bal'>
      <button>
      <LuLogOut className='ico'/>
      Se Deconnecter
      </button>
    </div>
    </div>
<div className="texte">
  <h1>Affecter les différentes taches aux membres de vos personnels</h1>
</div>

<form className="forme">
  <input type="text" placeholder='Ajouter la tache'/>
  <button type='submit' className="todo-btn">Affecter</button>
</form>
    </div>
  )
}

export default HomeAdmni
