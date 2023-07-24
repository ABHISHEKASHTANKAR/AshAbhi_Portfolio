import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Hr from './Components/Hr';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Hr/>
      <About />
      <Hr />
      <Skills />
      <Hr/>
      <Projects />
      <Hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
