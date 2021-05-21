import React from "react";
import "./css/footer.css";
const Footer = () => {
  return (
    <>
      <footer className=' mainfooter '>
        <div className='footer-middle'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 copy'>
                <p className='text-center'>
                  &copy; Copyright 2021 - Expense Tracker. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <Form>

                    <div className="copyright text-center">
                        Copyright &copy; 2021 <span>Expense Tracker</span>
                    </div>
                    
                </Form> */}
    </>
  );
};

export default Footer;
