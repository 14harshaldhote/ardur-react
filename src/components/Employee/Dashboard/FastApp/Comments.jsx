import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const Comments = ({ disabled }) => {
  return (
    <Box
      sx={{
        padding: '20px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        pointerEvents: disabled ? 'none' : 'auto',
        opacity: disabled ? 0.5 : 1,
      }}
      className='bg-clip-border'
    >
      <h2 className='text-2xl font-semibold p-2'>Comments</h2>
      <TextField
        className='opacity-55 bg-white'
        label="Comments"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: '20px' }}
        disabled={disabled}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }}
          disabled={disabled}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }}
          disabled={disabled}
        >
          Save & Next
        </Button>
      </Box>
    </Box>
  );
}

export default Comments;
