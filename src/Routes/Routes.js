import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Student from '../Components/forms/Student';
import Guardian from '../Components/Sections/AboutUs';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route 
                    path="/student"
                    component={Student}
                />
                <Route
                    path="/Guardian"
                    component={Guardian}
                />
                {/* <Route path="/" component={/> */}
            </Switch>
        </Router>
    );
};

export default Routes;