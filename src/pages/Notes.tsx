import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

import ResponsiveAppBar from '../Components/ResponsiveAppBar';

const Notes: React.FC = () => {
  return (
    <Grid container>
      <Grid item>
        <ResponsiveAppBar usuarioLogadoEmail={usuarioLogado.email} />
      </Grid>

      <Grid item>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              {/* <Avatar>
                                    <ImageIcon />
                                </Avatar> */}
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Notes;
