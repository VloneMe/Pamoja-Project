import React from 'react';
import udsm from '../../Media/Images/udsm.png';
import unicef from '../../Media/Images/unicef.png';
import wfpfood from '../../Media/Images/wfpfood.png'
import who from '../../Media/Images/who.png';

function Partiners() {
  return (
    <section data-bs-version="5.1" class="clients1 cid-sFAw7z51L3" id="clients1-1u">
      <section className='partiners'>
          <div class="container">
            <div class="text-center">
                <h3 className='display-5 fw-bold mt-3'>OUR PARTINERS</h3>
                <p className=''>Pamoja Non government Organization collaborates with.</p>   
            </div>
            <div class="d-lg-flex justify-content-center mt-3">
                <div class="img-size">
                    <img src={udsm} className="" alt="" />
                </div>
                <div class="">
                    <img src={who} className="img-size" alt="" />
                </div>
                <div class="">
                    <img src={unicef} className="img-size" alt="" />
                </div>
                <div class="">
                    <img src={wfpfood} className="img-size" alt="" />
                </div>   
            </div>
        </div>
</section>
      </section>
  );
}

export default Partiners;