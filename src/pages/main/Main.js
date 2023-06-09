import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Section from '../../components/Section';
// import Jobs from '../../components/home/JobTabs/Jobs';
import ProjectCards from '../../components/home/ProjectCards/Cards';
import SectionHeader from '../../components/SectionHeader';
import Spacer from '../../components/Spacer';
import AboutMe from './AboutMe';
import Introduction from './Introduction';
// import ProjectGrid from './ProjectGrid';

const Main = (props) => {
  const { header } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      {header}
      <div className="relative overflow-x-hidden">
        <div className="relative w-full px-8 lg:px-24">
          <Section>
            <Introduction />
          </Section>
          <Section>
            <SectionHeader title={"About Me"} />
            <Spacer height={10} />
            <AboutMe />
          </Section>
          <div className="h-16 w-full lg:hidden"></div>
          <Section>
            <SectionHeader title={"My Experience"} />
            <Spacer height={10} />
            {/* <Jobs /> */}
            <ProjectCards />
          </Section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
