import React from 'react';

function OurFocus() {
  return (
    <section className='ourFocus'>
       <div className='container'>
           <div className=''>

               {/* <h3 className='text-center py-4 '>OUR VISION, MISSION AND GOALS</h3> */}

              <div className='d-lg-flex mt-4 mb-4'>
                        <div className='card-body col-lg-4 bg-white text-center p-4 rounded over-shadow ms-auto'>
                                        <h3 className='display-3 fw-bold fs-4 icon1-hd'> OUR MISSION</h3>
                            <p className='pt-3'>
                                To intiate changes, innovations and devlopment in the education system of Tanzania as well as word Wide.
                            </p>
                        </div>
                    <div className='card-body col-lg-4 bg-white text-center p-4 rounded over-shadow'>
                       <h3 className='display-3 fs-4 fw-bold icon2-hd'> OUR VISION</h3>
                       <p className='pt-3'>
                           To priotize education in Tanzania as well as World Wide in both policy and practices so as to enable to upward socio-economic mobility and as key to escape poverty.
                       </p>
                    </div>

                        <div className='card-body col-lg-4 bg-white text-center p-4 rounded over-shadow'>
                            <h3 className='display-3 fw-bold fs-4 icon3-hd'> OUR GOALS</h3>
                            <p className='pt-3'>
                                Insure inclusive and quality education for all and promote life long learning in Tanzanoia as well as World Wide.
                            </p>
                        </div>
                </div>
           </div>
       </div>
    </section>
  );
}

export default OurFocus;