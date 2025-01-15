
import './App.css';

import { Intro } from './Component/Intro/Intro';
import { Navbar } from './Component/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Portfolio } from './Component/Portfolio/Portfolio';
import { Contact } from './Component/Contact/Contact';
import { Footer } from './Component/Footer/Footer';
import '../src/Responsive.css'
import '../src/Animation.css'
import { Skills } from './Component/Skills/Skills';
import { About } from './Component/About/About';

function App() {
  return (
    <div className='main bg-dark'>
      <Navbar />
      <div className='container bg-dark'>
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
