import React from 'react';

function Footer() {
  return (
    <section className='bg-info'>
        <div className='container'>
          <ul className='footer-items'>
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>FAQ</li>
          </ul>
            <div className='text-center fw-bold p-3'>
                © Copyright Pamoja Initiatize 2022. All Rights Reserved.
            </div>
        </div>
    </section>
  );
}

export default Footer;