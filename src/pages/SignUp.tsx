import LockIcon from '@mui/icons-material/Lock';
import { Box, Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

import Form from '../Components/Form';
import HeaderForm from '../Components/TitlePage';

const SigIn: React.FC = () => {
  return (
    <Grid container height="100vh">
      <Grid
        item
        xs={false}
        md={7}
        sm={6}
        sx={{
          backgroundImage: 'url(./assets/images/health-sign-pages.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repete',
        }}
      />
      <Grid item xs={12} md={5} sm={6}>
        <Box component="section" marginY={8} marginX={10} display="flex" flexDirection="column" alignItems="center">
          <HeaderForm title="Sign Up" color={red[500]} icon={<LockIcon />} subTitle="Register" />

          <Form mode="signup" textBtn="Register" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SigIn;
