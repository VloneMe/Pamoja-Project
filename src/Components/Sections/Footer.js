import React from 'react';
import {TiMortarBoard} from 'react-icons/ti';

function Footer() {
  return (
    <section className='bg-blue text-white'>
        <div className='container'>
          <ul className='footer-items'>
            <li>Home</li>
            <li>AboutUs</li>
            <li>Faq</li>
            <li>Services</li>
            {/* <li>
            <div className='w-10'>
                   <a className='btn btn-primary ms-lg-3 fw' href='/'>DONATE NOW <TiMortarBoard size='2em'/> </a>
               </div>
            </li> */}
          </ul>
          <hr />
            <div className='text-center fw-bold p-3'>
                © Copyright Pamoja Initiatize 2022. All Rights Reserved.
            </div>
        </div>
    </section>
  );
}

export default Footer;