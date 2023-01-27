import React from 'react';
import './style.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Comp1 from './Comp1';


export default function Comp2() {

  const [contacts, setContacts] = useState([
    { id: uuidv4(), nom: 'sport', tel: '5521222', city: 'dhbj' },
    { id: uuidv4(), nom: 'sport', tel: '5521222', city: 'dhbj' },
    { id: uuidv4(), nom: 'fg', tel: '5521222', city: 'dhbj' },
    { id: uuidv4(), nom: 'sport', tel: '5521222', city: 'dhbj' }
  ]);
  


  return (
    <div>
      <header className='header'>
        <h1>Contact Application</h1>


      </header>
      <input type="text" placeholder='Entrer la ville' className='search' />
      <input type="button" value="Rechercher" className='btn' />
      <input type="button" value="Ajouter Contact" className='add' onClick={<Link to={Comp1}></Link>} />
      
      <br /><br /><br /><br />
      <table>
        <thead className='thead'>
          <tr>
            <th>Nom</th>
            <th>Nombre</th>
            <th>Ville</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>{contact.nom}</td>
                <td>{contact.tel}</td>
                <td>{contact.city}</td>
                <td>
                  <input type="button" value="Supprimer" className='sup' />
                </td>
              </tr>);
          }

          )}

        </tbody>
      </table>
    </div>
  )
}
