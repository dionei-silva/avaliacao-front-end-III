import { Avatar, Typography } from '@mui/material';
import React from 'react';

interface TtilePageProps {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  color: string;
}

const TitlePage: React.FC<TtilePageProps> = ({ subTitle, color, title, icon }) => {
  return (
    <>
      <Typography variant="h3" mt={5} mb={3}>
        {title}
      </Typography>
      <Avatar sx={{ bgcolor: color }}>{icon}</Avatar>
      <Typography variant="h4" mt={2}>
        {subTitle}
      </Typography>
    </>
  );
};

export default TitlePage;
