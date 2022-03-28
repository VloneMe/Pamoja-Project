import React from 'react';
import Navbar from '../Sections/Navbar';
import Footer from '../Sections/Footer';

function Student() {
  return (
    <section>
      {/* Navbar here */}
      <Navbar/>

      <div className=''>

         {/* <!-------------------APPLICATION FORM----------------------> */}

    <div class="container mb-lg-5 mt-3 col-lg-7 col-sm-10 bg-white align-self-center rounded">

        {/* <!----------Application Heading And Buttons-----------> */}

        <div class="">
            <div class="m-5">
                <h2 class="text-center fw-bold mt-4">Application Form</h2>
            </div>
            
        </div>

        {/* <!----------Form Field---------------------> */}

        <form action="" class="">
          <div class="container">
            <div class="d-lg-flex ">
              <div class="form-floating mb-3 mt-3 me-lg-1 col-lg-4">
                <input type="text" id="name" class="form-control form-input form-control-sm" placeholder="Enter full name" required />
                <label for="phone">Full Name</label>
              </div>
                  <div class="form-floating mb-3 mt-3 me-lg-1 col-lg-4">
                    <input type="tel" id="phone" class="form-control form-input form-control-sm" placeholder="Enter full name" required />
                    <label for="phone">Phone</label>
                  </div>
                  <div class="form-floating mb-3 mt-3 col-lg-4">
                    <input type="text" id="inputAddress" class="form-control form-input form-control-sm" placeholder="Enter full name" required />
                    <label for="inputAddress">Current Location</label>
                  </div>
              </div>
    
              <div class="d-lg-flex">
                <div class="form-floating mb-3 mt-3 me-lg-1 col-lg-4">
                    <input type="text" id="" class="form-control form-input" placeholder="Enter full name" required />
                    <label for="name">Guardian Name</label>
                  </div>
                  <div class="form-floating mb-3 mt-3 me-lg-1 col-lg-4">
                    <input type="tel" id="name" class="form-control form-input" placeholder="Enter full name" required />
                    <label for="phone">Gurdian Number</label>
                  </div>
                  <div class="form-floating mb-3 mt-3 col-lg-4">
                    <input type="text" id="inputAddress2" class="form-control form-input" placeholder="Enter school name" required />
                    <label for="inputAddress2">School</label>
                  </div>
              </div>
    
              <div class="">
                  <h5 class="fw-bold">Help you need?</h5>
    
                  <div class="form-floating input-group mb-3 mt-3 col-lg-12 tet-wrap">
                    <input type="text"  id="" class="form-control form-input " name="expectation" placeholder="Expectations, what kind of help do you expect to get from us?" />
                    <label for="expectations" class="form-input-pb">What kind of needs or help do you expect to get from us?</label>
                    
                </div>
              </div>
              
              <div class="mt-3 mb-3">
                  <h6 class="">Upload your birth certificate and passport size</h6>

                  <div class="mb-3 mt-3 shadow">
                    <input class="form-control" type="file" id="formFileMultiple" multiple required />
                  </div>
              </div>
    
              {/* <!--------------Submit Button-----------------> */}

              <div class="mt-3 mb-3 text-center">
                <button type="submit" class="btn bg-primary col-lg-4 col-12 fw-bold"><span class="h5 fw-bold">Submit</span></button>
              </div>
              <br />
          </div>
        </form>
      </div>
      </div>

      {/* footer here */}
       
       <Footer/>

    </section>
  );
}

export default Student;