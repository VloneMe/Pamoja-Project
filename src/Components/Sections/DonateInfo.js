import React from 'react';
import {TiMortarBoard} from 'react-icons/ti';
import {BiDollar} from 'react-icons/bi';

function DonateInfo() {
  return (
    <section className='Donateinfo'>
       <div className='container-fluid'>
           <div className='text-center pt-2'>
              <TiMortarBoard size="3em" />
          <p className='h3 fw-bold'>Spreading Education Has Never Been Easier! </p>
           </div>

           <div className='d-lg-flex mt-3 justify-content-around'>
               <div className='me-4'>
                   <h3 className='display-5 fs-5 fw-bold'>Just a tap</h3>
                   <a className='btn btn-primary donateinfo-btn'>DONATE NOW <TiMortarBoard size='2em'/></a>
               </div>

               <div className='row'>
                   <h3 className='display-5 fs-5 fw-bold'>Choose amount</h3>
                 <div>
                       
                       <p className='ed fs-4 fw col-5'> <BiDollar className=''/> 0.5</p>

                   </div>

                   
                 {/* <form>
                       <div className='input-group'>
                           <br/>
                           <div className='input-group col-3 ed rounded-pill'>
                               <span class="input-group-text bg-whte">$</span>
                           <input type="text" id='amount' className='form-control' aria-label="Amount (to the nearest dollar)" placeholder='0.5' readOnly/>
                           </div>
                       </div>
                   </form>  */}
               </div>

               <div className=''>
                   <h3 className='display-5 fs-5 fw-bold'>Send payment</h3>
                   <a className='btn btn-success donateinfo-btn'>DONATE NOW <TiMortarBoard size='2em'/></a>
               </div>
           </div> 

           <div className='text-center text-white dnate-info'>
               <h3 className='fs-5'>GO DONATE NOW</h3>
               <button className='btn btn-primary fw mb-3 text-md-center donateinfo-btn '>DONATE NOW <TiMortarBoard size='2em'/> </button>
            </div>          
       </div>
    </section>
  );
}

export default DonateInfo;