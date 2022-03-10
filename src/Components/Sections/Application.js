import React from 'react';
import Student from '../forms/Student';
import {BsPeople} from 'react-icons/bs';
import {BsFillPersonFill} from 'react-icons/bs'

function Application() {
  return (
    <section className='application'>
      <div className='container'>
          <div className='py-5'>
             <div className='text-center'>
             <h3 className='fw-bold display-3 fs-3'>Apply Or Submit A Student To Us</h3>
             <p className='fw-bold'>Choose one by clicking for application purpose to our community <br />Please choose wisely</p>
          </div>

         <div className='row py-4 justify-content-around mb-md-3'>
             <div className='application-item col-lg-4'>
               <a className='app-btn' href='/'>Submit a child to pamoja <BsPeople /></a>
             </div>

             <div className='application-item col-lg-4'>
               <a className='' href={<Student/>}>Are you a student Sign Up here <BsFillPersonFill /></a>
             </div>
         </div>
          </div>
      </div>
    </section>
  );
}

export default Application;