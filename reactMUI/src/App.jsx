import { useEffect, useState } from 'react';

import { Container } from '@mui/material';
import { grey } from '@mui/material/colors';
import { getGithubUsers } from './services/users';
import Searcher from './components/Searcher';

import './App.css';
import UserCard from './components/UserCard';

const color = grey[400];
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

const App = () => {
  const [inputUser, setInputUser] = useState('Octocat');
  const [userState, setUserState] = useState('');
  const [notFound, setNotFound] = useState(false);

  const getInUser = async (user) => {
    const userResponse = await getGithubUsers(user);

    if (userState === 'Octocat') {
      localStorage.setItem('Octocat', userResponse);
    }

    if (userResponse.message === 'Not Found') {
      const { Octocat } = localStorage;
      setInputUser(Octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  };

  useEffect(() => {
    getInUser(inputUser);
  }, []);

  return (
    <Container sx={stylesContent}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
};

export default App;
