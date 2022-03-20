import React from 'react';
import Navbar from '../Sections/Navbar';
import Footer from '../Sections/Footer';
import Routes from '../../Routes';
const AppLayout = () => {
    return(
        <>
            <Navbar/>
                <Routes/>
            <Footer/>
        </>
    );
};

export default AppLayout;