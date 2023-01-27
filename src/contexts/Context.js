import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router-dom';

export const ContactContext = createContext();


const ContactContextProvider = (props) => {
    const [contacts, setContacts] = useState(
        [
          {
            id: uuidv4(),
            nom:'nono',
            tel:'555',
            city:'tanger'
          },
          {
            id: uuidv4(),
            nom:'zozo',
            tel:'101010',
            city:'tetouan'
          },
          {id: uuidv4(), nom: 'toto', tel: '5217', city: 'canada'},
          {id: uuidv4(), nom: 'soso', tel: '5217', city: 'london'},
          {id: uuidv4(), nom: 'aa', tel: '5217', city: 'canada'},
      ]
      );


      const [newNom, setNewNom] = useState("");
      const [newTel, setNewTel] = useState("");
      const [newCity, setNewCity] = useState("");
      let history = useNavigate();
    
      const addContact = () => {
          
    
          let con = [...contacts];
          let nouveau = {};
          nouveau.id = uuidv4();
          nouveau.nom = newNom;
          nouveau.tel = newTel;
          nouveau.city = newCity;
          con.push(nouveau);
          setContacts(con);
          setNewNom('');
          setNewTel('');
          setNewCity('');
          console.log(newNom);
          console.log(newTel);
          console.log(newCity);
          history('/');
      }



  const deleteContacte = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    history('/');
  }

    return(
        <ContactContext.Provider value={{contacts, newNom, setNewNom, newTel, setNewTel, newCity, setNewCity, addContact, deleteContacte}}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;