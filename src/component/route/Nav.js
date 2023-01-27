import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';

export default function Nav() {
  return (
    <div className='navbar'>
        <Link to='/' className='titre'>Contact Application</Link>
        <Link to='/ajout'><input type="button" value='Ajouter Contact' className='ajout' /></Link>
        <hr />
    </div>
  )
}
