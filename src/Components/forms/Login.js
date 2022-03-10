import React from 'react';

function Login() {
  return (
    <>
      <div className=''>
                {/* <!----------ADMIN LOGIN FORM----------------> */}
                
            <section class="container-Middle">
                    <div class="container rounded position-relative">

                        <div class="container mb-lg-5 mt-3 col-lg-6 col-sm-10 bg-white align-self-center rounded">

                        {/* <!----------Application Heading And Buttons-----------> */}

                        <div class="">
                            <div class="">
                                <h2 class="text-center fw-bold pt-5"><span class=" pt-5">Admin Login</span></h2>
                            </div>           
                        </div>

                        {/* <!----------Form Field--------------> */}

                        <form action="" class="">
                            <div class="container">
                            <div class=" ">
                                <div class="form-floating mb-3 mt-3 me-lg-1 col-lg-12">
                                <input type="text" id="username" class="form-control form-input form-control-sm" placeholder="Enter username" required />
                                <label for="username"><img src="images/person.svg" alt="" /> Username</label>
                                </div>
                                <div class="form-floating mb-3 mt-3 col-lg-12">
                                    <input type="password" id="password" class="form-control form-input form-control-sm" placeholder="Enter password" required />
                                    <label for="password"><img src="images/lock.svg" alt="" /> Password</label>
                                </div>

                                {/* <!--------Submit Button-----------> */}

                                <div class="mt-3 mb-3 text-center">
                                <button type="submit" class="btn bg-primary mb-3 mt-5 col-lg-12 col-12 fw-bold"><span class="h5 fw-bold">Submit</span></button>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                    </div>
            </section>
      </div>
    </>
  );
}

export default Login;