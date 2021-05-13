import Nav from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Program from './components/Program/Program';
import Team from './components/Team';
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Route  exact path="/" component={Main} />
    <Route path="/about-us" component={About} />
    <Route  path="/contact-us" component={Contact} />
    <Route path="/program" component={Program} />
    <Route path="/teams" component={Team} />
    <Route path="/donate" component={Donate} />
    <Footer />
    </BrowserRouter>  
  );
}

export default App;
