import React from 'react';
import {nanoid} from 'nanoid';
import Filter from './Filter.jsx';
import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';

const INITIAL_STATE={
  name: '',
  number: '',
  filter: '',
}

class Phonebook extends React.Component {

  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
    filteredContacts: [],
  }

  
  handlerChange = (e) =>{
    this.setState({[e.target.name]: e.target.value});
  }

  handlerSubmit = (e) =>{
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const id= form.elements.name.id;
    const number=form.elements.number.value;
    form.reset()
    this.setState({...INITIAL_STATE})
      if (this.state.contacts.some(contact =>contact.name === name)) 
        {return alert(`${name} is already in contacts`)}
        else {return this.setState({contacts: [...this.state.contacts, {name: name, number: number, id: id}]})}
  }
    
  handlerFilter = async (e) =>{
    await this.setState({filter: e.target.value})
    this.setState({filteredContacts: this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))}) 
  }

  handlerDelete = (e) =>{
    this.state.contacts.map(contact => {if(contact.id === e.currentTarget.id){
      this.state.contacts.splice(this.state.contacts.indexOf(contact), 1);
      this.setState((state) => ({contacts: state.contacts}))
    }})
  }

  componentDidMount(){
    this.setState({contacts: JSON.parse(localStorage.getItem("contacts"))})
  }

  componentDidUpdate(prevState, nextState){
    if(prevState !== nextState){
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  render() {
    return(
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.handlerSubmit} id={nanoid()} valueName={this.state.name} valueNumber={this.state.number}
        onChange={this.handlerChange} />

        <h3>Contacts</h3>
        <Filter value={this.state.filter} onChange={this.handlerFilter} />
        <ContactList originContacts={this.state.contacts} filter={this.state.filter} filteredContacts={this.state.filteredContacts} onClick={this.handlerDelete}/>
      </div>

    )
  }
}

export default Phonebook;