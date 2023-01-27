import React, { useState } from 'react';

import './style.css'; 

export default function Comp1() {



  const [contacts, setContacts] = useState([
    {nom:'sport', tel:'5521222', city:'dhbj'},
    {nom:'sport', tel:'5521222', city:'dhbj'},
    {nom:'sport', tel:'5521222', city:'dhbj'}
  ]);

  const [newNom, setNewNom] = useState('');
  const [newTel, setNewTel] = useState('');
  const [newCity, setNewCity] = useState('');

  const addContact = () => {
  
      let con = [...contacts];
      let nouveau = {};
      nouveau.nom = newNom;
      nouveau.tel = newTel;
      nouveau.city = newCity;
      con.push(nouveau);
      setContacts(con);
      setNewNom('');
      setNewTel('');
      setNewCity('');
    
  }


  return (
    <div className='div'>
        <img className='img' src="/image/person.png" alt="tt" />
        <h1>Ajouter un Contact</h1>
        <label>Nom:</label>
        <input type="text" placeholder='Entrer le nom' value={newNom} onChange={(e)=>setNewNom(e.target.value)} />
        <br />
        <label>Numero:</label>
        <input type="text" placeholder='Entrer le numéro de télephone' value={newTel} onChange={(e)=>setNewTel(e.target.value)} />
        <br />
        <label>Ville:</label>
        <input type="text" placeholder='Entrer la ville' value={newCity} onChange={(e)=>setNewCity(e.target.value)} /><br />
        <input type="button" value="Ajouter" className='btn' onClick={addContact} />
    </div>
  );
}
