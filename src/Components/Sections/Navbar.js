import React from 'react';
import {TiMortarBoard} from 'react-icons/ti';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-navbar sticky-top shadow'>
        <div className='container-fluid'>
            <a className='navbar-brand fw-bold ps-lg-5 fs-5'>PAMOJA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div className='collapse navbar-collapse pe-5' id='navbarSupportedContent'>
               <ul className='navbar-nav ms-auto mb-2 mb-lg-0 me-lg-5'>
                  <li className='nav-item'>
                      <a className='nav-link' href='#introsection'>HOME</a>
                  </li>
                  <li className='nav-item'>
                      <a className='nav-link' href='#about-us'>ABOUT-US</a>
                  </li>
                  <li className='nav-item'>
                      <a className='nav-link' href='#faq'>FAQ?</a>
                  </li>
                  <li className='nav-item'>
                      <a className='nav-link' href='#service'>SERVICE</a>
                  </li>
               </ul>

               <div className='w-10'>
                   <a className='btn btn-primary ms-lg-3 fw' href='/'>DONATE NOW <TiMortarBoard size='2em'/> </a>
               </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;