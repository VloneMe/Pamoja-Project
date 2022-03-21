import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import passId from '../../Media/Images/passId.jpg';
import Francis from '../../Media/Images/Team/Francis Ntima.jpg';
import Rohit from '../../Media/Images/Team/Rohit Gulam2.jpg';
import Edgar from '../../Media/Images/Team/Edgar Jacob.jpeg';
import Dismas from '../../Media/Images/Team/Dismas Ndadila.jpg'

// ReactOwlCarousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


function OurTeam() {
  return (
     <section className='bg-gray curser-pointer'>
         <div className='container'>

<div className='text-center'> 
    <h2 className='py-5'>OUR TEAM</h2>
</div>
<OwlCarousel
items="3"
className='owl-theme'
autoplay
loop
margin={0}
nav
dots
>   
<div className='item col-md-8'>
<div className='col-lg-3 profile text-center '>
      <div className='card-body img-box'>
          <img src={Edgar} alt='Edgar photo' className='img-responsive passId-size' />
          <ul>
              <a href='/'><li><FaFacebookF /></li></a>
              <a href='/'><li><FaTwitter /></li></a>
              <a href='/'><li><BsInstagram /></li></a>
          </ul>
          </div>
      <h2 className='fs-3'>EDGAR JACOB</h2>
      <h3 className=''>Founder / CEO</h3>
      {/* <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p> */}
      </div>
</div>

<div className='item col-md-8'>
<div className='card-body profile text-center'>
    <div className='img-box'>
       <img src={Rohit} alt='Edgar photo' className='img-responsive passId-size' />
       <ul>
           <a href='/'><li><FaFacebookF /></li></a>
           <a href='/'><li><FaTwitter /></li></a>
           <a href='/'><li><BsInstagram /></li></a>
       </ul>
      </div>
  <h2 className='fs-3'>ROHIT GULAM</h2>
  <h3 className=''>PROJECT MANAGER</h3>
  {/* <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p> */}
   </div>
</div>

<div className='item col-md-8'>
<div className='card-body profile text-center'>
    <div className='img-box'>
       <img src={Francis} alt='Edgar photo' className='img-responsive passId-size' />
       <ul>
           <a href='/'><li><FaFacebookF /></li></a>
           <a href='/'><li><FaTwitter /></li></a>
           <a href='/'><li><BsInstagram /></li></a>
       </ul>
      </div>
  <h2 className='fs-3'>FRANCIS NTIMA</h2>
  <h3 className=''>CHIEF SUPERVISER </h3>
  {/* <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p> */}
   </div>
</div>

<div className='item col-md-8'>
  <div className='card-body profile text-center'>
          <div className='img-box'>
              <img src={Dismas} alt='Edgar photo' className='img-responsive passId-size' />
              <ul>
                  <a href='/'><li><FaFacebookF /></li></a>
                  <a href='/'><li><FaTwitter /></li></a>
                  <a href='/'><li><BsInstagram /></li></a>
              </ul>
              </div>
          <h2 className='fs-3'>DISMAS NDADILA</h2>
          <h3 className=''>CHIEF MANAGER</h3>
          {/* <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p> */}
          </div>
</div>

</OwlCarousel>
</div>
     </section>
  );
}

export default OurTeam;