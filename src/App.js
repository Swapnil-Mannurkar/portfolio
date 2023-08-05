import './App.css';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

//test

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
