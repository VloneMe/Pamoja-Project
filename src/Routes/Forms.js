import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Student from '../Components/forms/Student';
import Guardian from '../Components/forms/Guardian';

function Forms() {
  return (
    <Router>
       <Switch>
           <Route path="/guardian">
              <Guardian/>
           </Route>

           <Route 
            path="/student"
            component={Student}
           />
       </Switch>
    </Router>
  );
}

export default Forms;