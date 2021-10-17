import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import NextStep from "./NextStep";
import StartCase from "./StartCase";
import TaskTable from "./TasksTable";
import Spacer from "../utils/Spacer";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import DetailCard from "./DetailCard";
import NavBar from "./NavBar";
import Button from "./Button";
import AvatarGroup from "./AvatarGroup";
import ToggleInput from "./ToggleInput";
import CheckWithCircle from "../static/waylit/svg/CheckWithCircle";
import FooterNote from "../utils/FooterNote";
import footerText from "../static/waylit/footerText";

const Waylit = (props) => {
  const { header } = props;
  return (
    <React.Fragment>
      {header}
      <Container className="mt-4" fixed>
        <Spacer height={20} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <NextStep />
          </Grid>
          <Grid container item xs={12} lg={4}>
            <Grid container spacing={1} item xs={12} md={6} lg={12}>
              <Grid item xs={12}>
                <InputField />
              </Grid>
              <Grid item xs={12}>
                <SelectInput />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12} md={6} lg={12}
              container
              direction="row"
              spacing={2}
              className="mt-2 sm:mt-0 px-3 lg:px-0 justify-center md:justify-between items-start lg:items-center"
              >
              <Grid item xs={12} md={6} lg={5} className="flex justify-center lg:block">
                <Button text={"Submit"} icon={<CheckWithCircle />} />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <ToggleInput />
              </Grid>
              <Grid className="md:flex md:justify-center lg:justify-end" item xs={12} md={12} lg={4}>
                <AvatarGroup />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={10}>
            <TaskTable />
          </Grid>
          <Grid item sm={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12} sm={7} lg={5}>
            <StartCase />
          </Grid>
          <Grid item sm={3}>
            <DetailCard />
          </Grid>
        </Grid>
        <FooterNote text={footerText} />
      </Container>
    </React.Fragment>
  );
};

export default Waylit;
