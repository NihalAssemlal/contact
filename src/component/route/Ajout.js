import React from 'react';
import '../style/ajout.css';
import { ContactContext } from '../../contexts/Context';
import { useContext } from 'react';


export default function Ajout() {
  const {newNom, setNewNom, newTel, setNewTel, newCity, setNewCity, addContact} = useContext(ContactContext);
  return (
    <div className='div'>
        <img className='img' src="/image/person.png" alt="tt" />
        <h1>Ajouter un Contact</h1>
        <label>Nom</label>
        <input type="text" placeholder='Entrer le nom...' className='inp' value={newNom} onChange={(e)=>setNewNom(e.target.value)} />
        <br />
        <label>Numéro de téléphone</label>
        <input type="text" placeholder='Entrer le numéro de télephone...' value={newTel} className='inp' onChange={(e)=>setNewTel(e.target.value)} />
        <br />
        <label>Ville</label>
        <input type="text" placeholder='Entrer la ville...' className='inp' value={newCity} onChange={(e)=>setNewCity(e.target.value)} />
        <br />
        <input type="button" value='Ajouter' className='ajoute' onClick={addContact}  />
    </div>
  )
}
