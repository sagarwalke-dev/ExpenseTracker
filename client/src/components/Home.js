import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/home.css";
import bannerImage1 from "./images/banner1.svg";
import bannerImage2 from "./images/banner2.svg";
import bannerImage3 from "./images/banner3.svg";

function Home() {
  return (
    <>
      <div className='container'>
        <div id='carousel-id' className='carousel slide' data-ride='carousel'>
          <div className='carousel-inner' role='listbox'>
            <div className='carousel-item active '>
              <img src={bannerImage1} alt='First slide' className='img-fluid' />
            </div>
            <div className='carousel-item'>
              <img
                src={bannerImage2}
                alt='Second slide'
                className='img-fluid'
              />
            </div>
            <div className='carousel-item'>
              <img src={bannerImage3} alt='Third slide' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
