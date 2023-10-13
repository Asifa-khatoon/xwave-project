import React from "react";
import logoo from "../images/assets/logo.png";
import "./footer.css";



const Footer = () => {
  return (
    <>
      <footer className="bg-footer">
        <div className="footer">
          <div className="container mt-5 py-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div className="widget">
                  <img src={logoo} alt="" />
                  <p className="mt-2"> Address: 60-49 Road 11378 New York</p>

                  <div className="">
                    
                        <p className="">Phone: +65 11.188.888</p>
                   
                        <p> Email: hello@colorlib.com</p>
                     
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="">
                  <h6 className=" fw-bolder">Useful Links</h6>
                  <div className="">
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          About Us
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          About Our Shop
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          Secure Shopping
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          Delivery infomation
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          Privacy Policy
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          {" "}
                          Our Sitemap{" "}
                        </a>
                      </td>
                    </tr>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div clasNname="">
                  <div className=" mt-4">
                    <tr className="">
                      <td>
                        <a href="#" className="text-black">
                          Who We Are
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          Our Services
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          Projects
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          Contact
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          {" "}
                          Innovation
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#" className="text-black">
                          Testimonials
                        </a>
                      </td>
                    </tr>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="">
                  <h6 className=" fw-bolder">
                    Join Our Newsletter Now
                  </h6>
                  <p className="font-size-10 ">
                    Get E-mail updates about our latest shop and special offers.
                  </p>
                  <div className=" mt-5">
                    <div class="input-group mb-3 ">
                      <input
                        type="text"
                        class="border-0 px-3 py-2 "
                        placeholder="Enter Your mail"
                        aria-label=""
                        aria-describedby=""
                      />
                     <button className="border-0 text-white fw-bold site-btn px-3" type="">
                        {" "}
                        SUBSCRIBE
                        </button>
                     
                    </div>
                    <div className="">

                    <button className="text-black px-3 py-2 border shadow rounded-pill mx-2" href="#">
                      <i className="fa fa-facebook"></i>
                    </button>
                    <button className="text-black  px-3 py-2 border shadow rounded-pill mx-2" href="#">
                      <i className="fa fa-instagram"></i>
                    </button>
                    <button className="text-black  px-3 py-2 border shadow rounded-pill mx-2" href="#">
                      <i className="fa fa-twitter"></i>
                    </button>
                    <button className="text-black  px-3 py-2 border shadow rounded-pill mx-2" href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer border-top mt-5 container">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className=" mt-2  text-start text-secondary">
                Copyright ©2023 All rights reserved | This template is made with <i className="fa fa-heart"> </i> by
                </p>

              </div>
              <div className="col-md-6">
                <div className="mt-2 text-end">
                  <img src="https://themewagon.github.io/ogani/img/payment-item.png" alt="" />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
