
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import cart1 from "../images/assets/cat-1.jpg";
import cart2 from "../images/assets/cat-2.jpg";
import cart3 from "../images/assets/cat-3.jpg";
import cart4 from "../images/assets/cat-4.jpg";
import cart5 from "../images/assets/cat-5.jpg";

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
        <div className="col-md-12"> 
        <div class="row">
          <div class="col-md-3 ">
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
            <Swiper
        slidesPerView={1}
        spaceBetween={30} 
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
       
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper "
      >
               
    <SwiperSlide classNameName='swiper-slide'>
        <div className="row my-4">
                        <div className="col-md-4"><img  src="https://themewagon.github.io/ogani/img/latest-product/lp-1.jpg" className="img-fluid" alt="image" /></div>
            <div className="col-md-8 my-3">
                <p>Crab Pool security</p>
                <h4><b>$30.00</b></h4>
                </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-4 "><img  src="https://themewagon.github.io/ogani/img/latest-product/lp-2.jpg" className="img-fluid" alt="image" /></div>
            <div className="col-md-8 my-3">
                <p>Crab Pool security</p>
                <h4><b>$30.00</b></h4>
                </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-4 "><img  src="https://themewagon.github.io/ogani/img/latest-product/lp-3.jpg" className="img-fluid" alt="image" /></div>
            <div className="col-md-8 my-3">
                <p>Crab Pool security</p>
                <h4><b>$30.00</b></h4>
                </div>
        </div>
        </SwiperSlide>
    <SwiperSlide classNameName='swiper-slide'>
        <div className="row mt-4">
            <div className="col-md-4 "><img  src="https://themewagon.github.io/ogani/img/latest-product/lp-1.jpg" className="img-fluid" alt="image" /></div>
            <div className="col-md-8 my-3">
                <p>Crab Pool security</p>
                <h4><b>$30.00</b></h4>
                </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-4 "><img  src="https://themewagon.github.io/ogani/img/latest-product/lp-2.jpg" className="img-fluid" alt="image" /></div>
            <div className="col-md-8 my-3">
                <p>Crab Pool security</p>
                <h4><b>$30.00</b></h4>
                </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-4 "><img  src="https://themewagon.github.io/ogani/img/latest-product/lp-3.jpg" className="img-fluid" alt="image" /></div>
            <div className="col-md-8 my-3">
                <p>Crab Pool security</p>
                <h4><b>$30.00</b></h4>
                </div>
        </div>
        </SwiperSlide>
      </Swiper>
          </div>
          <div class=" col-md-9">
            <div class="row">
             


              <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        Navigation={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="swiper-slide position-relative ">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img className="w-100" src={cart1} alt="" />
            <button className="border-0 fw-bold py-1  bg-light bn5 btn-responsive-width">
              FRESH FRUITS
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide position-relative">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img className="w-100" src={cart2} alt="" />
            <button className="border-0 fw-bold py-1 bg-light bn5 btn-responsive-width">
              DRIED FRUITS
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide position-relative ">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img className="w-100" src={cart3} alt="" />
            <button className="border-0 fw-bold py-1 bg-light bn5 btn-responsive-width">
              VEGETABLES
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide position-relative">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img className="w-100" src={cart4} alt="" />
            <button className="border-0 fw-bold py-1 bg-light bn5 btn-responsive-width">
              DRINK FRUITS
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide position-relative ">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img className="w-100" src={cart5} alt="" />
            <button className="border-0 fw-bold py-1 bg-light bn5 btn-responsive-width">
              DRINK FRUITS
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
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

