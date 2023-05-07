import Header, { HeaderPhone } from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Timeline from './components/Timeline';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer.jsx'

import './styles/app.scss';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Service />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  )
}

export default App;
