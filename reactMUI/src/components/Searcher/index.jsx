import { useState } from 'react';

import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const stylesTxtStack = {
  width: '80%',
  marginTop: '30px',
  color: 'white',
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
    },
  },
};

const styleTxtField = {
  width: '90%',
  margin: '0 auto',
  '&$checked': {
    color: 'green',
  },
  '&::placholder': {
    color: '#fff',
  },
};

const styleIconBtn = {
  color: '#2c2c2c',
  border: 'red',
  '&:hover': {
    color: 'black',
    background: '#4c4c4c',
  },
  '&.Mui-active': {
    border: 'none',
  },
};

const Searcher = (props) => {
  const { setInputUser } = props;
  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };
  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Stack direction="row" sx={stylesTxtStack}>
      <TextField
        sx={styleTxtField}
        onChange={onSearchValueChange}
        value={valueInput}
        id="outlined-basic"
        autoComplete="off"
        label="Github user"
        type="search"
        placeholder="Octocat"
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSubmit} sx={styleIconBtn}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Stack>
  );
};

export default Searcher;
