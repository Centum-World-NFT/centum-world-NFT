import React from 'react';
import { Box, Paper } from '@mui/material';
import CardContent from '../cardContent/CardContent';

const CollectionCard = () => {
  const numberOfCards = 5; // Change this to the desired number of cards
  const cards = [];

  for (let i = 1; i <= numberOfCards; i++) {
    cards.push(
      <Box
        key={i}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '96%',
            height: 90,
            marginLeft: '20px',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          },
        }}
      >
        <Paper elevation={3}>
            <CardContent/>
        </Paper>
      </Box>
    );
  }

  return (
    <>
      {cards}
    </>
  );
}

export default CollectionCard;
