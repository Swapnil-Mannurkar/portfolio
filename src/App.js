import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contactMe/ContactMe";

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
