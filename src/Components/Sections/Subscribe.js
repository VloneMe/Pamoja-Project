import React from 'react';
import {TiMortarBoard} from 'react-icons/ti';

function Subscribe() {
  return (
    <section className=''>
        <div className='container'>
           <div className='justify-content-center'>
           <div className='text-center mt-3'>
               <p className='h3 fw-bold '>Not Ready To Donate?</p>
               <p className='fw-bold'>Kindly subscribe to our community for updates and help us to provide an even better contribution.</p>
           </div>
            
            <form action=''>
               <div className='container d-lg-flex justify-content-center justify-content-around mt-3 mb-5 bg-gray py-5 rounded'>
                   <div className=''>
                   <label for="inputname" className='form-label fw-bold'>Name</label>
                   <br/>
                   <input type="text" id='inputname' className='form-control input-bg' placeholder='Harry Jameson' required/>
               </div>

               <div className=''>
                   <label for="inputEmail" className='form-label fw-bold'>Email</label>
                   <br/>
                   <input type="email" id='inputEmail' className='form-control input-bg' placeholder='hjameson13@gmail.com' required/>
               </div>

               <div className='mt-4 '>
              <button type='submit' className='btn btn-primary dnate-info'>SEND ME UPDATES</button>
            </div>
               </div>
           </form>
            
        </div>
        </div>
    </section>
  );
}

export default Subscribe;