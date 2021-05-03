import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import NextStep from './NextStep';
import StartCase from './StartCase';
import SectionHeader from '../utils/SectionHeader';
import Spacer from '../utils/Spacer';

const Waylit = () => {
  return (
    <Container fixed>
      <Spacer height={8} />
      <SectionHeader title={"Waylit"} />
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <NextStep />
          </Grid>
          <Grid item sm={4}>
            {/* Psuedo-component */}
            <div className="bg-gray-400 w-full h-full rounded-md"></div>
          </Grid>
          <Grid item sm={5}>
            <StartCase />
          </Grid>
        </Grid>
    </Container>
  )
}

export default Waylit;