import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Sections/Navbar';
import Footer from '../Sections/Footer';
import Forms from '../../Routes/Forms';
import Main from '../../Routes/Main';
import Student from '../forms/Student';


const AppLayout = () => {
    return(
        <>
           <Router>
               
                    <Switch>
                        <Route path="/" component={Main}
                        />                            
                    </Switch>
               
           </Router> 
        </>
    );
};

export default AppLayout;