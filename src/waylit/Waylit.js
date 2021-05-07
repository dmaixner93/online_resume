import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import NextStep from './NextStep';
import StartCase from './StartCase';
import TaskTable from './TasksTable';
import SectionHeader from '../utils/SectionHeader';
import Spacer from '../utils/Spacer';
import InputField from './InputField';
import SelectInput from './SelectInput';
// import Select from 'react-select';
// import { selectInputData } from '../static/waylit/sampleData';



const Waylit = () => {

  return (
    <Container fixed>
      <Spacer height={8} />
      <SectionHeader title={"Waylit"} disableDivider={true} />
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <NextStep />
          </Grid>
          <Grid item sm={4}>
            <InputField />
            <Spacer height={6} />
            <SelectInput />
          </Grid>
          <Grid item sm={10}>
            <TaskTable />
          </Grid>
          <Grid item sm={5}>
            <StartCase />
          </Grid>
        </Grid>
    </Container>
  )
}

export default Waylit;