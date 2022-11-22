import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Container } from '@mui/material';
import { grey } from '@mui/material/colors';
import Searcher from './components/Searcher';

const color = grey[800];
const stylesContent = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '500px',
  width: '80vw',
  marginTop: '40px',
  background: color,
  borderRadius: '16px',
};

function App() {
  return (
    <Container sx={stylesContent}>
      <Searcher />
    </Container>
  );
}

export default App;
