import React from "react";
import "./contact.css";
import { useState } from "react";

const contactData = [
  {
    iconClass: "fa fa-phone icon-color",
    title: "Phone",
    text: "+01-3-8888-6868",
  },
  {
    iconClass: "fa fa-map-marker icon-color",
    title: "Address",
    text: "60-49 Road 11378 New York",
  },
  {
    iconClass: "fa fa-clock-o icon-color",
    title: "Open time",
    text: "10:00 am to 23:00 pm",
  },
  {
    iconClass: "fa fa-envelope icon-color",
    title: "Email",
    text: "hello@colorlib.com",
  },
];

const ContactDetails = () => {

  

  return (
    <div>
      <div className="bg-image-set py-3 pt-4">
        <h1 className="fw-set fw-bold text-white text-center">Contact Us</h1>
        <h5 className="fw-bold text-center text-white pb-4">
          Home- <span className=""> Contact us</span>{" "}
        </h5>
      </div>

      <div className="container text-center my-5">
        <div className="row">
          {contactData.map((item, index) => (
            <div className="col-md-3" key={index}>
              <h1>
                <i className={item.iconClass}></i>
              </h1>
              <h3 className="fw-bold">{item.title}</h3>
              <p className="text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
      <iframe className=" w-100  height-set "
       
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28288.41767568662!2d68.59933013142009!3d27.591910914990684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935ceb55ed8d07d%3A0x41cb7e93ac4e2bfe!2sP%C4%ABrjo%20Goth%2C%20Khairpur%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696940846614!5m2!1sen!2s"
        
        
       
      ></iframe>
    </div>

<div class="contact-form spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group">
                        <h1 className="fw-bold text-center my-4">Leave Message</h1>
                    </div>
                </div>
            </div>
            <form action="https://formspree.io/f/mgejryvg" method="POST">
                <div class="row">

                <div class="col-md-5 mx-2 my-2">
                                <input
                                    type="text" class="form-control"
                                    placeholder="Your name"
                                   name="first name"

                                />
                               
                                                           </div>
                            <div class="col-md-6 mx-2 my-2">
                                <input
                                    type="text"
                                    class="form-control"

                                    placeholder="Your Email"
                                  name="email"

                                />
                              
                            </div>
                
                    <div class="col-lg-12">
                        <textarea className="  my-4 form-control" placeholder="Your message" name="feedback"></textarea>
                        <div className="text-center"> 
                        <button className="border-0 text-white fw-bold site-btn px-4 py-2" type="submit ">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>


   
   
       
    </div>
   
  );
};

export default ContactDetails;
