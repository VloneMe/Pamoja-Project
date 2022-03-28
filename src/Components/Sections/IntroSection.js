import React from 'react';
import Slider0 from '../../Media/Images/Slider0.jpg';
import Navbar from './Navbar';
import {TiMortarBoard} from 'react-icons/ti';


function IntroSection() {
  return (
    <section id='introsection'  className='bg-image bg-info'>
        <div className='overlay'>
             {/* <Navbar /> */}

        <div className='container-fluid ps-5 banner'>
          <div class="pt-5">
             <div className='pt-5 text-white'>
            <h1>ARE YOU READY TO BE THE CHANGE <br/> THE WORLD NEED?</h1>
            <p className='display-6 fs-4 fw'>DONATE TO QUALITY EDUCATION ALL OVER THE WORLD</p>
            <div className='mt-5'>
              <a className='btn btn-primary p-2 me-4 col-lg-2'>DONATE NOW <TiMortarBoard size='2em'/></a>
              <a className='btn btn-outline-warning p-2 col-lg-2'>BE A DONOR <TiMortarBoard size='2em' /></a>
            </div>
          </div>
          </div>
        </div>      
        </div>
      </section>
    
  );
}

export default IntroSection;