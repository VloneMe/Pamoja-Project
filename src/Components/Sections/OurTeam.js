import React from 'react';
import  Carousel  from 'react-elastic-carousel';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import passId from '../../Media/Images/passId.jpg';
import passId2 from '../../Media/Images/passId2.png';

// const breakpoints = [
//     {width: 1, itemToshow: 1},
//     {width: 550, itemToshow: 2},
//     {width: 768, itemToshowL: 3},
//     {width: 1200, itemToshow: 4}
// ]

function OurTeam() {
  return (
    <section className='ourTeam bg-gray'> 
       <div className='container'>
           <h3 className='text-center py-4 h1-hd'>OUR TEAM</h3>
           <div className='row'>
               <div className='col-md-3 profile text-center '>
                  <div className='img-box'>
                     <img src={passId} alt='Edgar photo' className='img-responsive passId-size' />
                     <ul>
                         <a href='/'><li><FaFacebookF /></li></a>
                         <a href='/'><li><FaTwitter /></li></a>
                         <a href='/'><li><BsInstagram /></li></a>
                     </ul>
                    </div>
                <h2 className=''>EDGAR COMPILER</h2>
                <h3 className=''>Founder / CEO</h3>
                <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                 </div>

                 <div className='col-md-3 profile text-center'>
                  <div className='img-box'>
                     <img src={passId} alt='Edgar photo' className='img-responsive passId-size' />
                     <ul>
                         <a href='/'><li><FaFacebookF /></li></a>
                         <a href='/'><li><FaTwitter /></li></a>
                         <a href='/'><li><BsInstagram /></li></a>
                     </ul>
                    </div>
                <h2 className=''>ROHIT GULAM</h2>
                <h3 className=''>PROJECT MANAGER</h3>
                <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                 </div>

                 <div className='col-md-3 profile text-center'>
                  <div className='img-box'>
                     <img src={passId} alt='Edgar photo' className='img-responsive passId-size' />
                     <ul>
                         <a href='/'><li><FaFacebookF /></li></a>
                         <a href='/'><li><FaTwitter /></li></a>
                         <a href='/'><li><BsInstagram /></li></a>
                     </ul>
                    </div>
                <h2 className=''>FRANCIS NTIMA</h2>
                <h3 className=''>CHIEF SUPERVISER </h3>
                <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                 </div>

                 <div className='col-md-3 profile text-center'>
                  <div className='img-box'>
                     <img src={passId2} alt='Edgar photo' className='img-responsive passId-size' />
                     <ul>
                         <a href='/'><li><FaFacebookF /></li></a>
                         <a href='/'><li><FaTwitter /></li></a>
                         <a href='/'><li><BsInstagram /></li></a>
                     </ul>
                    </div>
                <h2 className=''>LOYCE MDAKI</h2>
                <h3 className=''>MARKETING MANAGER</h3>
                <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                 </div>

                 {/* <div className='col-md-3 profile text-center'>
                  <div className='img-box'>
                     <img src={passId} alt='Edgar photo' className='img-responsive passId-size' />
                     <ul>
                         <a href='/'><li><FaFacebookF /></li></a>
                         <a href='/'><li><FaTwitter /></li></a>
                         <a href='/'><li><BsInstagram /></li></a>
                     </ul>
                    </div>
                <h2 className=''>DISMAS NDADILA</h2>
                <h3 className=''>CHIEF MANAGER</h3>
                <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                 </div>

                 <div className='col-md-3 profile text-center'>
                  <div className='img-box'>
                     <img src={passId} alt='Edgar photo' className='img-responsive passId-size' />
                     <ul>
                         <a href='/'><li><FaFacebookF /></li></a>
                         <a href='/'><li><FaTwitter /></li></a>
                         <a href='/'><li><BsInstagram /></li></a>
                     </ul>
                    </div>
                <h2 className=''>OMAR RASOULI</h2>
                <h3 className=''>CUSTOMER CARE</h3>
                <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                 </div>
                  */}
            </div>
        </div>
    </section>
  );
}

export default OurTeam;