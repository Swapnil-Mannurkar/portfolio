import './App.css';
import logo from './logo.svg'
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Development from './components/UnderDevelopment'
import Experience from './components/Experience';

function App() {
  return (
    <div>
      {/* <Development /> */}

      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
