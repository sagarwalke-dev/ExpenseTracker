import React from "react";
import "./css/contact.css";
const Contact = () => {
  return (
    <>
      <div className='container mt-5 pt-3  auto'>
        <div className='card  shadow-lg p-3 mb-5 bg-white rounded'>
          <div className='contact_form'>
            <div className='row'>
              <div className='col-lg-10 offset-lg-1'>
                <div className='contact_form_container'>
                  <div className='contact_form_title'>Get in Touch</div>

                  <form className='form-signin'>
                    <div className='form-label-group pointer'>
                      <input
                        type='text'
                        id='inputName'
                        className='form-control'
                        placeholder='Name'
                        name='name'
                        required
                      />
                      <label htmlFor='inputName'>Name</label>
                    </div>
                    <div className='form-label-group'>
                      <input
                        type='email'
                        id='inputEmail'
                        className='form-control'
                        placeholder='Email'
                        name='email'
                        required
                      />
                      <label htmlFor='inputEmail'>Email</label>
                    </div>
                    <div className='form-label-group'>
                      <input
                        type='tel'
                        id='inputContact'
                        className='form-control'
                        placeholder='Contact'
                        name='contact'
                        required
                      />
                      <label htmlFor='inputEmail'>Contact</label>
                    </div>
                    <div className='form-label-group'>
                      <textarea
                        id='inputMessage'
                        className='form-control'
                        placeholder='Message'
                        name='message'
                        required></textarea>
                    </div>

                    <div className='contact_form_button'>
                      {" "}
                      <button
                        type='submit'
                        className='button contact_submit_button'>
                        Send Message
                      </button>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='panel'></p>
    </>
  );
};

export default Contact;
