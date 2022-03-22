import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import Filter from './Filter.jsx';
import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';

const INITIAL_STATE={
  name: '',
  number: '',
  filter: '',
}

function Phonebook() {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [deleted, setDeleted] = useState(0);

  
  const handlerChange = (e) =>{
    e.target.name === 'name' ? setName(e.target.value) : setNumber(e.target.value)
  }

  const handlerSubmit = (e) =>{
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const id= form.elements.name.id;
    const number=form.elements.number.value;
    form.reset()
    setName(''); setNumber(''); setFilter('');
    contacts === null ? setContacts([{name: name, number: number, id: id}]) :
    (contacts.some(contact =>contact.name === name) ? alert(`${name} is already in contacts`) :
      setContacts([...contacts, {name: name, number: number, id: id}]))
  }
    
  const handlerFilter = (e) =>{
     setFilter(e.target.value);
  }

  const handlerDelete = (e) =>{
    contacts.map(contact => {if(contact.id === e.currentTarget.id){
      contacts.splice(contacts.indexOf(contact), 1)
    }});
    setDeleted(contacts.length);
  }

  useEffect(() => {
    setContacts(contacts)
  },[deleted])

  useEffect(() => {
    setFilteredContacts(contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())));
  },[filter])

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem("contacts")));
  },[])

  useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts, deleted])

  
    return(
      <div>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={handlerSubmit} id={nanoid()} valueName={name} valueNumber={number}
          onChange={handlerChange} />

          <h3>Contacts</h3>
          <Filter value={filter} onChange={handlerFilter} />
          <ContactList contacts={filter === '' ? contacts : filteredContacts} onClick={handlerDelete}/>
      </div>

    )
  
}

export default Phonebook;