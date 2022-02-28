import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) =>{
  return(
    <>
      <p>Find contacts by name</p>
      <input
        css={{
          display: 'block',
          marginTop: '10px',
          marginBottom: '20px',
          width: '300px',
          height: '30px',
          borderWidth: '2px',
        }}
        type='text'
        name='filter'
        value={value}
        onChange={onChange}
      />
    </>
  )
}

Filter.propTypes ={
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Filter;