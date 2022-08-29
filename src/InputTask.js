import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';

const InputTask = () => {
  return (
    <Box sx={{ width: '100%', height: 60 }}>
      <TextField
        id='outlined-basic'
        label='Add task'
        variant='outlined'
        color='secondary'
        sx={{ marginRight: '1rem', width: '86%' }}
      />
      <Fab size='medium' color='secondary' aria-label='add'>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default InputTask;
