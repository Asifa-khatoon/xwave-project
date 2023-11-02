

import React from "react";
import '../blog/blog.css'
import { useState } from "react";

const ShopNow = () => {

  const [sliderValue, setSliderValue] = useState(50); // Initial value for the slider

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  }



  


  return(

  <div>
    <div className="blogDetail-bg py-2 my-3">
      <h1 className="fw-set fw-bolder text-white text-center pt-5">
      Organi Shop
      </h1>
      <h5 className=" text-center text-white pb-5">
        <span className="fw-bold"> Home- </span>{" "}
       <span> Shop</span>
      </h5>
    </div>

    <section class="blog spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-5 ">
            <div class="">
          
             
              <div class="mt-5">
              <h2 className=" fw-bold ">All departments </h2> 
   
  
        <p class="py-2 ">Fresh Meat</p>
        <p class="py-2 ">Vegetables</p>
        <p class="py-2 ">Fruit & Nut Gifts</p>
        <p class="py-2 ">Fresh Berries</p>
        <p class="py-2 ">Ocean Foods</p>
        <p class="py-2 ">Butter & Eggs</p>
        <p class="py-2 ">Fastfood</p>
        <p class="py-2 ">Fresh Onion</p>
        <p class="py-2 ">Papayaya & Crisps</p>
        <p class="py-2 ">Oatmeal</p>
       
   
              </div>
              {/* <div class="f-ww">
                <h4 className="f-ww fw-bold">Recent News</h4>
                <div class="">
                  <div class="d-flex my-3">
                    <img
                      className=""
                      src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-3.jpg"
                      alt="image"
                    />

                    <div class="mx-3">
                      <h6 className="fw-bold">
                        {" "}
                        09 Kinds Of Vegetables <br />
                        Protect The Liver
                      </h6>
                      <span className="text-secondary">MAR 05, 2019</span>
                    </div>
                  </div>

                  <div class="d-flex my-3">
                    <img
                      className=""
                      src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-2.jpg"
                      alt="image"
                    />

                    <div class="mx-3">
                      <h6 className="fw-bold">
                        {" "}
                        Tips You To Balance
                        <br /> Nutrition Meal Day
                      </h6>
                      <span className="text-secondary">MAR 05, 2019</span>
                    </div>
                  </div>
                  <div class="d-flex my-3">
                    <img
                      className=""
                      src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-1.jpg"
                      alt="image"
                    />

                    <div class="mx-3">
                      <h6 className="fw-bold">
                        4 Principles Help You Lose <br />
                        Weight With Vegetables
                      </h6>
                      <span className="text-secondary">MAR 05, 2019</span>
                    </div>
                  </div>
                </div>
              </div> */}
  <div>
      <input
        type="range"
        min="0"
        max="200"
        value={sliderValue}
        onChange={handleSliderChange}
        className="bg-danger"
      />
      <p className="text-danger fw-bold">Slider Value: {sliderValue}</p>
    </div>
                <div className=""> 

    <button  className="bg-info rounded-pill p-2 "> </button> <span className=""> white</span>    
    </div>          
              <div class="">
                <h4 className="fw-bold mb-3 mt-5 f-ww">
                  {" "}
                  <b> Search By</b>
                </h4>
                <div class="">
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  my-3">
                    Apple{" "}
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  ">
                    {" "}
                    Beauty
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  ">
                    {" "}
                    Vegetables
                  </button>{" "}
                  <br />
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  ">
                    Fruit
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  ">
                    Healthy Food
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  ">
                    Lifestyle
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-7">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6"></div>
              <div className="my-5">
               </div>
            </div>
          
          </div>
        
        </div>
      
      </div>
   

   
    </section>
  </div>
  )
}

export default ShopNow;

