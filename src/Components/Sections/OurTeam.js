import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import passId from '../../Media/Images/passId.jpg';
import passId2 from '../../Media/Images/passId2.png';
import ReactOwlCarousel from 'react-owl-carousel';

// ReactOwlCarousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

// const breakpoints = [
//     {width: 1, itemToshow: 1},
//     {width: 550, itemToshow: 2},
//     {width: 768, itemToshowL: 3},
//     {width: 1200, itemToshow: 4}
// ]


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
<div className='item'>
<div className='col-lg-3 col-md-3 profile text-center '>
      <div className='card-body img-box'>
          <img src={passId} alt='Edgar photo' className='img-responsive passId-size' />
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

<div className='item'>
<div className='card-body col-md-3 profile text-center'>
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
  {/* <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p> */}
   </div>
</div>

<div className='item'>
<div className='card-body col-md-3 profile text-center'>
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
  {/* <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p> */}
   </div>
</div>

<div className='item'>
<div className='card-body col-md-3 profile text-center'>
      <div className='img-box'>
          <img src={passId2} alt='Edgar photo' className='img-responsive passId-size' />
          <ul>
              <a href='https://www.facebook.com/francis.dickson.3781/about'><li><FaFacebookF /></li></a>
              <a href='/'><li><FaTwitter /></li></a>
              <a href='/'><li><BsInstagram /></li></a>
          </ul>
          </div>
      <h2 className=''>LOYCE MDAKI</h2>
      <h3 className=''>MARKETING MANAGER</h3>
      {/* <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p> */}
      </div>
</div>

<div className='item'>
  <div className='card-body col-md-3 profile text-center'>
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
          {/* <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p> */}
          </div>
</div>

<div className='item'>
  <div className='card-body col-md-3 profile text-center'>
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
          {/* <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p> */}
          </div>
</div>
</OwlCarousel>
</div>
     </section>
  );
}

export default OurTeam;