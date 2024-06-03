import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const Comments = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <h2 className='text-2xl font-semibold p-2'>Comments</h2>
      <TextField
        label="Comments"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }}
        >
          Save & Next
        </Button>
      </Box>
    </Box>
  );
}

export default Comments;
