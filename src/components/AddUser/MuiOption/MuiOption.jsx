import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { MuiTextFilled } from './style';

export default function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  // const flatProps = {
  //   options: top100Films.map((option) => option.title),
  // };

  // const [value, setValue] = React.useState(null);

  return (
    <Stack spacing={1} sx={{ width: '90%' }}>
      <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="clearOnEscape" variant="standard" />
        )}
      />


    </Stack>
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption' },
  { title: 'The Godfather', year: 1972 },
];
