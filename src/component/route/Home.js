import React from 'react';
import '../style/home.css';
import { useState } from 'react';
//import  data  from '../data';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import  {ContactContext}  from '../../contexts/Context';


export default function Home() {

  
  const {contacts, setContacts, deleteContacte} = useContext(ContactContext);
  const [search, setSearch] = useState("");
  const [tableFiltre, setTableFiltre] = useState([]);
  


  const searchCity = (e) => {
    if(e.target.value != ""){
      setSearch(e.target.value);
      const filtrerTable = contacts.filter((item)=>item.city.toLowerCase().includes(e.target.value.toLowerCase()));
      setTableFiltre([...filtrerTable]);
    }else{
      setSearch(e.target.value);
      setContacts([...contacts]);
    }
  }

  return (
    <div className='home'>
      <input type="text" className='re' placeholder='Rechercher...' onChange={searchCity} />
      <input type="button" value="Rechercher" className='recherche' />
      <br /><br /><br /><br /><br />
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Nombre</th>
            <th>Ville</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {search.length > 0 ? tableFiltre.map((contact) => {
            return(
              <tr key={contact.id}>
                <td>{contact.nom}</td>
                <td>{contact.tel}</td>
                <td>{contact.city}</td>
                <td>
                  <input type="button" value="Supprimer" className='sup' onClick={() => deleteContacte(contact.id)}/>
                </td>
              </tr>);
          })
          :
          contacts.sort((a, b) => (a.nom < b.nom ? -1 : 1)).map((contact) => {
            return (
              <tr key={contact.id}>
                <td>{contact.nom}</td>
                <td>{contact.tel}</td>
                <td>{contact.city}</td>
                <td>
                  <input type="button" value="Supprimer" className='sup' onClick={() => deleteContacte(contact.id)}/>
                </td>
              </tr>);
            }
          )}


        </tbody>
      </table>
    </div>
  )
}
