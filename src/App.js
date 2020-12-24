// import React, { Component } from 'react';
import { useState } from 'react';
import useLocalStorage from '../src/hooks/useLocalStorage';

import shortid from 'shortid';

import ContactList from './components/ContactList';

import NameForm from './components/NameForm/NameForm';
import Filter from './components/Filter';
import Container from './components/Container';

import './App.css';

export default function App() {
  const [contacts, setContacts] = useLocalStorage( 'contacts',[
    { "id": "id-1", "name": "John Piters", "phone": "555-55-55" },
    { "id": "id-2", "name": "Piter Johnson", "phone": "444-44-44" },
    { "id": "id-3", "name": "Pit Ivans", "phone": "333-33-33" },
    { "id": "id-4", "name": "Ivan Piterson", "phone": "222-22-22" }
]);
  const [filter, setFilter] = useState('');

  function addContact({ name, phone }) {
    const contact = {
        id: shortid.generate(),
        name,
        phone
      }
  
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) ||
    contacts.find(contact => contact.phone.toLowerCase() === phone.toLowerCase())   
      ? alert(`${name} or ${phone} is already added.`) 
      : setContacts(prevContacts =>[contact, ...prevContacts]); 
   
  };

  function deleteContact (contactId) {
       
    setContacts(() => contacts.filter(contact => contact.id !== contactId));
  };
  
    function changeFilter (event) {
    setFilter(event.currentTarget.value);
  };

  function getVisibleContacts() {
    return(contacts.filter(contact =>contact.name.toLowerCase().includes(filter.toLowerCase())));}
    
    return (
       
       <Container>
       <h1 className="title"> Phonebook </h1>
       <h2 className="subtitle">Add new contact</h2>
       <NameForm onSubmit={addContact} />
       <h2 className="subtitle">Find contact</h2>
       <Filter value={filter} onChange={changeFilter} />
       <h2 className="subtitle">Contact list</h2>
       <ContactList contacts = { getVisibleContacts() }
         onDeleteContact = {deleteContact}/>
       </Container>
    )
}

// class App extends Component {
//     state = {
//         contacts: initialContacts,
//       name: '',
//       filter:''
//     };

//   addContact = ({name,phone}) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       phone
//     };

//     const { contacts } = this.state;

  //     contacts.find(({ name }) => name.toLowerCase() === contact.name.toLowerCase() )
  //       ? alert(`${name} is already added.`)
  //       : this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }))


//   };

//     deleteContact = contactId => {
//         this.setState(prevState => ({
//             contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//         }));
//     };

  // changeFilter = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

// componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);
//     console.log(parsedContacts);

//   if (parsedContacts) {
//     this.setState({ contacts:parsedContacts})
// }

//   }

// componentDidUpdate(prevProps, prevState) {
//         if (this.state.contacts !== prevState.contacts) {
//          localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//           }
//     }

//     render() {  
//       const { filter  } = this.state;
//       const visibleContacts = this.getVisibleContacts();
//       return (
//           <Container>
//             <h1 className="title"> Phonebook </h1>
//           <h2 className="subtitle">Add new contact</h2>
//           <NameForm onSubmit={this.addContact} />
//           <h2 className="subtitle">Find contact</h2>
//           <Filter value={filter} onChange={this.changeFilter} />
//           <h2 className="subtitle">Contact list</h2>
//           <ContactList contacts = { visibleContacts }
//             onDeleteContact = { this.deleteContact }/>
//           </Container>

//         );
//     }
// }

// export default App;