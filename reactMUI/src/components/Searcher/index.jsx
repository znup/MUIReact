import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const stylesTxtStack = {
  width: '80%',
  marginTop: '30px',
};

const styleTxtField = {
  width: '90%',
  margin: '0 auto',
};

const inputProps = {
  autoComplete: 'off',
  id: 'outlined-basic',
  label: 'Github user',
  type: 'search',
  placeHolder: 'Octocat',
};

function Searcher() {
  return (
    <Stack direction="row" sx={stylesTxtStack}>
      <TextField
        sx={styleTxtField}
        InputProps={
          (inputProps,
          {
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          })
        }
      />
    </Stack>
  );
}

export default Searcher;
