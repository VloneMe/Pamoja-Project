import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Student from '../Components/forms/Student';
import AboutUs from '../Components/Sections/AboutUs';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route 
                    path="/student"
                    component={Student}
                />
                <Route
                    path="/about"
                    component={AboutUs}
                />
            </Switch>
        </Router>
    );
};

export default Routes;