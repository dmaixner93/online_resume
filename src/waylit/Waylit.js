import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import NextStep from './NextStep';
import StartCase from './StartCase';
import TaskTable from './TasksTable';
import Spacer from '../utils/Spacer';
import InputField from './InputField';
import SelectInput from './SelectInput';
// import DetailCard from './DetailCard';
import NavBar from './NavBar';
import Button from './Button';
import AvatarGroup from './AvatarGroup';
import ToggleInput from './ToggleInput';
import CheckWithCircle from '../static/waylit/svg/CheckWithCircle';


const Waylit = (props) => {
  const { header } = props;
  return (
    <React.Fragment>
      {header}
      <Container fixed>
        <Spacer height={20} />
          <Grid container spacing={3}>
            <Grid item sm={8}>
              <NextStep />
            </Grid>
            <Grid item sm={4}>
              <InputField />
              <Spacer height={6} />
              <SelectInput />
              <Spacer height={6} />
              <Grid item container spacing={3}>
                <Grid item>
                  <Button 
                    text={'Submit'}
                    icon={<CheckWithCircle />}
                  />
                </Grid>
                <Grid item className="flex justify-center items-center">
                  <ToggleInput />
                </Grid>
                <Grid className="flex justify-center items-center">
                  <AvatarGroup />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={10}>
              <TaskTable />
            </Grid>
            <Grid item sm={5}>
              <StartCase />
            </Grid>
            <Grid item sm={7}>
              <NavBar />
            </Grid>
          </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Waylit;