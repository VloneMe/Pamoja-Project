import React from 'react';

function InputData() {
  return (
    <>
            {/* <!-------------------INPUT DATA FORM------------------------> */}

            <div class="container rounded col-lg-6 col-md-10 col-sm-10 pt-5 mt-5">
            <div class="container bg-white pt-2 mt-5 ">
                <form action="">
                <div class="text-center ">
                    <label class="mb-3 mt-3 h3 fw-bold">Input Data Discriptions</label>
                </div>
                <div class="form-floating mb-3 mt-3">
                    <input type="text" class="form-control form-control-lg" id="title" placeholder="Input Title" required />
                    <label for="title" class="form-label">Title</label>  
                </div>
            
                <div class="form-floating mb-3 mt-3 ">
                    <textarea class="form-control h-100 input-group-text text-wrap" id="comment" placeholder="Description about title"></textarea>

                    {/* <!-- <label for="comment">Type........</label> --> */}
                    
                </div>
                <div class="mb-3 mt-3">
                    <button type="submit" class="btn btn-primary col-12 mb-3">POST</button>
                </div>
                </form>
            </div>
            </div>
    
    </>
  );
}

export default InputData;