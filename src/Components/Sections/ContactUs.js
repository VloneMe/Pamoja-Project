import React from 'react';
import {SiGmail} from 'react-icons/si';
import {SiTwitter} from 'react-icons/si';
import {SiInstagram} from 'react-icons/si';

function ContactUs() {
  return (
    <section className='ContactUs'>
      <div className='container'>
         <div className='card shadow mb-4 col-md-6 col-lg-6 mx-auto'>
            <div className='card-body'>
                <div className='row'>
                    {/* <div className='mb-3'>
                       <div className='col-lg-6 text-center'>
                           <h3>KINDLY SUBSCRIBE!</h3>
                       <p className>By subscibing and leave us a message help us  to improve our services, even being able to reach more kids in needs <br/>Be part of our services</p>
                       </div>
                    </div> */}
                    <div>
                       <div className='mb-3'>
                     <h3 className='text-center'>Contact Us</h3>
                     <div className='form-group'>
                       <label for="name">Name</label>
                       <input type="text" id='name' className='form-control' placeholder='Your name' required/>
                      </div>  

                      <div className='form-group'>
                       <label for="email">Email</label>
                       <input type="email" id='email' className='form-control' placeholder='Email Address' required/>
                      </div>  

                      <div className='form-group'>
                       <label>Message</label>
                       <textarea row="3" className='form-control' placeholder='Leave us a message ...'></textarea>
                   </div>

                   <div className='form-group py-3'>
                       <button type="button" className='btn btn-primary shadow w-100'>Send Message</button>
                      </div>  
                    </div>
                </div>
            </div>
         </div>
         </div>
      </div> 
  </section>
  );
}

export default ContactUs;