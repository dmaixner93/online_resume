import './App.css';
import Header from './Header';
import Section from './Section';
import VerticalTabs from './VerticalTabs';
import Introduction from './Introduction';
import SectionHeader from './SectionHeader';
import AboutMe from './AboutMe';

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
      </div>
    </div>
  );
}

export default App;
