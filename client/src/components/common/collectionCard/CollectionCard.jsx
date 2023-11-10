import React from 'react';
import { Box, Paper } from '@mui/material';
import CardContent from '../cardContent/CardContent';
import { MainDiv, WrapDiv } from './CollectionCardStyle';

const CollectionCard = () => {
  const numberOfCards = 5; // Change this to the desired number of cards
  const cards = [];

  for (let i = 1; i <= numberOfCards; i++) {
    cards.push(
      <MainDiv>
      <Paper elevation={3}>
          <CardContent/>
      </Paper>
    </MainDiv>
    );
  }

  return (
    <WrapDiv>
      {cards}
    </WrapDiv>
  );
}

export default CollectionCard;
