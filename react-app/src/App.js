import NavigationBar from './components/NavigationBar/NavigationBar';

import Footer from "../src/components/Footer/Footer";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import AnimatedRoutes from "../src/components/AnimatedRoutes/AnimatedRoutes.js";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {  
  return (
    <Router>
        <NavigationBar />
        <AnimatedRoutes />
        <Footer />
    </Router>
  );
}
export default App;