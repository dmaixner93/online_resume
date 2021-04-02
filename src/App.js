import './App.css';
import Header from './Header';
import Section from './Section';
import VerticalTabs from './VerticalTabs';
import Introduction from './Introduction';
import SectionHeader from './SectionHeader';
import AboutMe from './AboutMe';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App bg-gray-900 overflow-x-hidden">
      <div className="relative w-full px-24">
        <Header />
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
          <SectionHeader sectionNum={"04"} title={"Cool Things I built"} />
          <Projects />
        </Section>
      </div>
    </div>
  );
}

export default App;
