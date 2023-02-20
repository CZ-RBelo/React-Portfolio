
import NavigationBar from './components/NavigationBar/NavigationBar';
import About from '../src/components/About/About';
import Home from '../src/components/Home/Home';
import KeySkills from "../src/components/KeySkills/KeySkills";
import ProjectGallery from "../src/components/ProjectGallery/ProjectGallery";
import Contact from '../src/components/Contact/Contact';
import Footer from "../src/components/Footer/Footer";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Skills" element={<KeySkills />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Projects" element={<ProjectGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;