import React from "react";
import "./css/Registration.css";

// import registrationImage from "../images/registration.svg";

const Registration = () => {
  return (
    <>
      <div className="container mt-3 auto">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto ">
            <div className="card card-signin flex-row my-5 shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-img-left d-none d-md-flex">
              {/* style={{ backgroundImage: `url(${registrationImage})` }} */}
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <div className="" id="error"></div>
                <div className="" id="success"></div>
                <form className="form-signin" method="POST" onSubmit="">
                  <div className="form-label-group pointer">
                    <input
                      type="text"
                      id="inputName"
                      className="form-control"
                      placeholder="Name"
                      title="Enter valid name"
                    />
                    <label htmlFor="inputName">Name</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      name="email"
                      className="form-control"
                      placeholder="Email address"
                      onChange=""
                      required
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="tel"
                      id="inputContact"
                      className="form-control"
                      placeholder="Contact number"
                      name="contact"
                      pattern="[1-9]{1}[0-9]{9}"
                      title="Enter 10 digit mobile number"
                      onChange=""
                      required
                    />
                    <label htmlFor="inputContact">Contact number</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputWork"
                      className="form-control"
                      placeholder="Work"
                      name="work"
                      onChange=""
                      required
                    />
                    <label htmlFor="inputWork">Work</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange=""
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputConfirmPassword"
                      className="form-control"
                      placeholder="Confirm password"
                      name="cpassword"
                      onChange=""
                      required
                    />
                    <label htmlFor="inputConfirmPassword">
                      Confirm password
                    </label>
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onSubmit=""
                  >
                    Register
                  </button>

                  <p className="d-block text-center mt-4 small">
                    <a href=""> Already Have an Account?</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
