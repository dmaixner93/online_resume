import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Section from '../../components/Section';
import VerticalTabs from '../../components/Tabs/VerticalTabs';
import SectionHeader from '../../components/SectionHeader';
import Spacer from '../../components/Spacer';
import Projects from '../../components/Projects/Projects';
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
        <div className="relative w-full px-24">
          <Section>
            <Introduction />
          </Section>
          <Section>
            <SectionHeader sectionNum={"02"} title={"About Me"} />
            <Spacer height={10} />
            <AboutMe />
          </Section>
          <Section>
            <SectionHeader sectionNum={"03"} title={"My Experience"} />
            <Spacer height={10} />
            <VerticalTabs />
          </Section>
          <Section>
            <SectionHeader sectionNum={"04"} title={"Samples of My Work"} />
            <Spacer height={10} />
            <Projects />
          </Section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
