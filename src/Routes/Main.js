import React from 'react';
import IntroSection from '../Components/Sections/IntroSection';
import AboutUs from '../Components/Sections/AboutUs';
import OurTeam from '../Components/Sections/OurTeam';
import Faq from '../Components/Sections/Faq';
import Subscribe from '../Components/Sections/Subscribe';
import Services from '../Components/Sections/Services';
import Application from '../Components/Sections/Application'

const Main = () => {
  return (
    <>
        <IntroSection/>
        <AboutUs/>
        <OurTeam/>
        <Faq/>
        <Application/>
        <Subscribe/>
        <Services/> 
    </>
  );
}

export default Main;