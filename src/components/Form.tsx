import { TextField, Typography, Button, Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface FormProps {
  textBtn: string;
  mode: 'signin' | 'signup';
}

const Form: React.FC<FormProps> = ({ textBtn, mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  return (
    <Box>
      <TextField
        type="text"
        margin="normal"
        fullWidth
        id="filled-basic"
        label="E-mail"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="text"
        margin="normal"
        fullWidth
        id="filled-basic"
        label="Password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      {mode === 'signup'}
      <TextField
        type="text"
        margin="normal"
        fullWidth
        id="filled-basic"
        label="Repassword"
        variant="outlined"
        onChange={(e) => setRepassword(e.target.value)}
      />

      <Button sx={{ mt: 4 }} type="submit" variant="contained" fullWidth>
        {textBtn}
      </Button>

      <Grid item textAlign="center">
        {mode === 'signin' ? (
          <Typography variant="body1" mt={3}>
            <Link to="/signup">Don't have an account? Register now</Link>
          </Typography>
        ) : (
          <Typography variant="body1" mt={3}>
            <Link to="/">Already have an account? Go to login login</Link>
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Form;
