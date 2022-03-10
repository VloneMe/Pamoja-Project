import React from "react";
import IntroSection from "./Components/Sections/IntroSection";
import Navbar from "./Components/Sections/Navbar";
import DonateInfo from "./Components/Sections/DonateInfo";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutUs from "./Components/Sections/AboutUs";
import Subscribe from "./Components/Sections/Subscribe";
import ContactUs from "./Components/Sections/ContactUs";
import Footer from "./Components/Sections/Footer";
import OurTeam from "./Components/Sections/OurTeam";
import OurFocus from "./Components/Sections/OurFocus";
import Partiners from "./Components/Sections/Partiners";
import Faq from "./Components/Sections/Faq";
import Student from "./Components/forms/Student";
import InputData from "./Components/forms/InputData";
import Application from "./Components/Sections/Application";


function App() {
  return (
    <Router>
      <div className="">

         {/* <Navbar /> */}

         {/* <div className="">
            <Switch>
                <Route exact path="/">
                   <IntroSection />
                </Route>

                <Route path="/about">
                    <AboutUs />
                </Route>

                <Route path="/faq">
                    <Faq />
                </Route>
            </Switch>
         </div> */}

         <IntroSection/>
         <AboutUs/>
         <OurTeam/>
         <Faq/>
         <DonateInfo/>
         <Subscribe/>
         <Application/>
         <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
