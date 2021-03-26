import './App.css';
import Header from './Header';
import Section from './Section';

function App() {
  return (
    <div className="App bg-white overflow-x-hidden">
      <div className="relative w-full px-24 border border-gray-300">
        <Header />
        <Section />
        <Section>

        </Section>
        <Section />
      </div>
    </div>
  );
}

export default App;
