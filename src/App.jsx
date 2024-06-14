import React from 'react';
import Navbar from './Components/Nav/Navbar';
import HeroContainer from './Components/Hero/HeroContainer';
import AboutContainer from './Components/Abouts/AboutContainer';
import ProjectContainer from './Components/Projects/ProjectContainer';
import ContactContainer from './Components/Contact/ContactContainer';
import FooterContainer from './Components/Footer/FooterContainer';

function App() {
  return (
    <div className=''>
        <Navbar/>
        <HeroContainer/>
        <AboutContainer/>
        <ProjectContainer/>
        <ContactContainer/>
        <FooterContainer/>
    </div>
  );
}

export default App;
