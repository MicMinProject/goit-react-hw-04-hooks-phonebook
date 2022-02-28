import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types';

const ContactForm =({onSubmit, id, valueName, valueNumber, onChange})=> {
  return(
    <form onSubmit={onSubmit}>
          <label htmlFor={id}>
            Name
            <input 
            css={{
              display: 'block',
              marginTop: '10px',
              marginBottom: '20px',
              width: '300px',
              height: '30px',
              borderWidth: '2px',
            }}
              id={id}
              type="text"
              name="name"
              value={valueName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={onChange}
            />
          </label>
          <label htmlFor={id}>
            Number
            <input
              css={{
                display: 'block',
                marginTop: '10px',
                marginBottom: '20px',
                width: '300px',
                height: '30px',
                borderWidth: '2px',
              }}
              id={id}
              type="tel"
              name="number"
              value={valueNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={onChange}
            />
          </label>
          
          <button 
          css={{
            backgroundColor: '#7E9FFF',
            width: '150px',
            height: '30px',
            fontSize: '20px',
            borderRadius: '10px',
          }}
          type='submit'>
            Add contact
          </button>
        </form>
  )
}

ContactForm.propTypes ={
  onSubmit: PropTypes.func,
  id: PropTypes.string,
  valueName: PropTypes.string,
  valueNumber: PropTypes.string,
  onChange: PropTypes.func
}

export default ContactForm;