import React from "react";
import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom';
import AppLayout from "./Components/AppLayout/AppLayout";
import Forms from "./Routes/Forms";
import Navbar from "./Components/Sections/Navbar";
import Student from "./Components/forms/Student";
import Footer from "./Components/Sections/Footer";

const App = () => {
  return (
    <Router>
      <Navbar/>
          <Switch>

              <Route 
                exact
                path="/"
                component={AppLayout}
              />
              <Route 
                path="/forms" 
                component={Forms}
              />
                {/* <Route 
                path="/student" 
                component={Student}
                /> */}

          </Switch>
          <Forms/>
       <Footer/>
    </Router>
  );
}

export default App;


