import Phonebook from './Phonebook.jsx'; 
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

export const App = () => {
  return (
    <div
      css={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
     <Phonebook />
    </div>
  );
};
