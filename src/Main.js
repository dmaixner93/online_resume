import React from 'react';
import Section from './utils/Section';
import VerticalTabs from './Tabs/VerticalTabs';
import Introduction from './Introduction';
import SectionHeader from './utils/SectionHeader';
import Spacer from './utils/Spacer';
import AboutMe from './AboutMe';
import Projects from './Projects/Projects';

const Main = (props) => {
  const { header } = props;
  return (
    <React.Fragment>
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
