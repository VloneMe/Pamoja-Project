import React from 'react';
import { Link } from 'react-router-dom';
import Student from '../forms/Student';
import {BsPeople} from 'react-icons/bs';
import {BsFillPersonFill} from 'react-icons/bs'

function Application() { 
    
  return (
    <section  className='application Donateinfo'>
      <div className='container'>
          <div className='py-5'>
             <div className='text-center'>
             <h3 className='fw-bold display-3 fs-3'>Apply Or Submit A Student To Us</h3>
             <p className='fw'>Are you a student or A guardian want ro Submit a student to us? Please place one of the button as required.</p>
          </div>

         <div className='row py-4 text-center mb-md-3'>
             <div className='col-lg-6'>
               <Link to="/student">
                <span 
                  className='btn btn-outline-primary text-black'
                >
                  Submit a child to pamoja 
                  <BsPeople />
                </span>
               </Link>
             </div>

             <div className='col-lg-6'>
               <a href="/" className='btn btn-outline-primary text-black'>Are you a student Sign Up here <BsFillPersonFill /></a>
             </div>
         </div>
          </div>
      </div>
    </section>
  );
}

export default Application;