import React from "react";
import loginImage from "./images/login.svg";
// import "./css/form.css";
function Login() {
  return (
    <>
      <div className='container mt-3  auto'>
        <div className='row '>
          <div className='col-lg-10 col-xl-9  mx-auto'>
            <div className='card card-signin flex-row my-5 shadow-lg p-3 mb-5 bg-white rounded'>
              <div
                className='card-img-left d-none d-md-flex'
                style={{ backgroundImage: `url(${loginImage})` }}></div>
              <div className='card-body'>
                <h5 className='card-title text-center'>Login</h5>
                <div className='' id='error'>
                  {/* {error} */}
                </div>
                <div className='' id='success'>
                  {/* {success} */}
                </div>
                <form
                  className='form-signin'
                  method='POST'
                  //   onSubmit={submitData}
                >
                  <div className='form-label-group'>
                    <input
                      type='email'
                      id='inputEmail'
                      className='form-control'
                      placeholder='Email address'
                      name='username'
                      //   onChange={handleInput}
                      required
                    />
                    <label htmlFor='inputEmail'>Email address</label>
                  </div>
                  <div className='form-label-group'>
                    <input
                      type='password'
                      id='inputPassword'
                      className='form-control'
                      placeholder='Password'
                      name='password'
                      //   onChange={handleInput}
                      required
                    />
                    <label htmlFor='inputPassword'>Password</label>
                  </div>
                  <button
                    className='btn btn-lg btn-primary btn-block text-uppercase'
                    type='submit'
                    // onClick={submitData}
                  >
                    Login
                  </button>
                  <p className='d-block text-center mt-4 small'>
                    Don't Have an Account?
                    <a href='/registration'> Signin</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
