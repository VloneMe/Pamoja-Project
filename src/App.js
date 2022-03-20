import React from "react";
import IntroSection from "./Components/Sections/IntroSection";
import Navbar from "./Components/Sections/Navbar";
import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom';
import AboutUs from "./Components/Sections/AboutUs";
import Subscribe from "./Components/Sections/Subscribe";
import Footer from "./Components/Sections/Footer";
import OurTeam from "./Components/Sections/OurTeam";
import Faq from "./Components/Sections/Faq";
import Application from "./Components/Sections/Application";
import Services from "./Components/Sections/Services";
import Partiners from './Components/Sections/Partiners';
import { useRef } from 'react';
import { hashlink as link} from 'react-router-hash-link';
import Student from './Components/forms/Student';
import AppLayout from "./Components/AppLayout";



function App() {
  return (
    <Router>
      <Switch>

           <Route 
            path="/"
            component={AppLayout}
           />
       </Switch>
    </Router>
  );
}

export default App;


