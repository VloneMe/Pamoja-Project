import React from 'react'

function Faq() {
  return (
    <section className='h-100vh'>
       <div className='container'>
         <div className='accordion mb-5 mt-5 shadow text-dark' id="accordionExample">
          <h3 className='display-6 fs-3 text-center py-3 fw-bold'>Frequently Asked Questions? (FAQ)</h3>

         <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is pamoja?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                This is an intiative which deals with solving all the challanges and inequalities in the education system  in Tanzania.
            </div>
          </div>
         </div>
          
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                What type of people do we help?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Pamoja initiative is for the kids who are of school due to different sucumstances and take the back to school.
            </div>
          </div>
         </div>

         <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                What type of help do we provide?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Pamoja initiative provides basic show needs that are required for the student to be at school.
            </div>
          </div>
         </div>

         <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                What places do we operate?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Pamoja initiatives is found in Dar es salaam city in Tanzania.
            </div>
          </div>
         </div> 

         <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                What are our impact to the community?
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Pamoja initiatives impact is to support childrens to got to school and get better education in a good wealth.
            </div>
          </div>
         </div>

         <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                What are our goals for the future genaration?
              </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Pamoja initiatives goals is to make sure the world lives the highly educated people who will be able to stand on their own And sae those who are in need.
            </div>
          </div>
         </div>

      </div>
      </div>
    </section>
  );
}

export default Faq;