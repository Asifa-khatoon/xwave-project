
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';



const HomeCarousel =()=>{
    return(
        <>
        <div className="container">
            <div className="row ">
                <div className="col-md-4">
                    <h3 className="fw-bold">Latest Products</h3>
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
        <div className="row">
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
                <div className="col-md-4">
                    <h4><b>Top Rated Products</b></h4>
                <Swiper
        slidesPerView={1}
        spaceBetween={30} 
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
       
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper my-5"
      >
               
    <SwiperSlide classNameName='swiper-slide'>
        <div className="row">
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
        <div className="row">
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
                <div className="col-md-4">
                    <h4><b>Review Products</b></h4>
                <Swiper
        slidesPerView={1}
        spaceBetween={30} 
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
       
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper my-5"
      >
               
    <SwiperSlide classNameName='swiper-slide'>
        <div className="row">
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
        <div className="row">
            <div className="col-md-4 "><img  src="https://themewagon.github.io/ogani/img/latest-product/lp-1.jpg" className="img-fluid" alt="image" /></div>
            <div className="col-md-8 my-3">
                <p>Crab Pool security</p>
                <h4><b>$30.00</b></h4>
                </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-4 "><img  src="https://themewagon.github.io/ogani/img/latest-product/lp-2.jpg"className="img-fluid" alt="image" /></div>
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
            </div>
            
        </div>
        </>
    )
};
export default HomeCarousel;



