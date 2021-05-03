import Section from './utils/Section';
import VerticalTabs from './Tabs/VerticalTabs';
import Introduction from './Introduction';
import SectionHeader from './utils/SectionHeader';
import AboutMe from './AboutMe';
import Projects from './Projects/Projects';

const Main = (props) => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="relative w-full px-24">
        <Section>
          <Introduction />
        </Section>
        <Section>
          <SectionHeader sectionNum={"02"} title={"About Me"} />
          <AboutMe />
        </Section>
        <Section>
          <SectionHeader sectionNum={"03"} title={"My Experience"} />
          <VerticalTabs />
        </Section>
        <Section>
          <SectionHeader sectionNum={"04"} title={"Samples of My Work"} />
          <Projects />
        </Section>
      </div>
    </div>
  );
};

export default Main;
