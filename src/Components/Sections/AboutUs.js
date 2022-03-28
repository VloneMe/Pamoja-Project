import React from 'react';
import Navbar from './Navbar';
import OurFocus from './OurFocus';

function AboutUs() {
  return (
    <div id='about-us' className='container'>
        <div className=''>
            <div className=' '>
                <div className='col-lg-10 p-4 text-center mt-4 bg-white rounded border border-1 mx-auto over-shadow icon-hd'>
                   <h3 className='diplay-3 fw pt-3 icon-hd'>ABOUT US</h3>
                   <p className='pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

                <div className=''>

                    <OurFocus/>

                </div>

            </div>
        </div>
    </div>
  );
}

export default AboutUs;