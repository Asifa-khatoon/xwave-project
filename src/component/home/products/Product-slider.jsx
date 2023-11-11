import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import cart1 from "../../images/assets/cat-1.jpg";
import cart2 from "../../images/assets/cat-2.jpg";
import cart3 from "../../images/assets/cat-3.jpg";
import cart4 from "../../images/assets/cat-4.jpg";
import cart5 from "../../images/assets/cat-5.jpg";

const Slider = () => {
 

  return (
    <div className="container text-center my-5">
  <div className="row">
    <div className="col-sm-12">
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
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="swiper-slide position-relative">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={cart1} alt="" />
            <button className="border-0 fw-bold py-1 bg-info btn-responsive-width">
              FRESH FRUITS
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide position-relative">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={cart2} alt="" />
            <button className="border-0 fw-bold py-1 bg-light btn-responsive-width">
              DRIED FRUITS
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide position-relative">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={cart3} alt="" />
            <button className="border-0 fw-bold py-1 bg-light btn-responsive-width">
              VEGETABLES
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide position-relative">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={cart4} alt="" />
            <button className="border-0 fw-bold py-1 bg-light btn-responsive-width">
              DRINK FRUITS
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide position-relative">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={cart5} alt="" />
            <button className="border-0 fw-bold py-1 bg-light btn-responsive-width">
              DRINK FRUITS
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>

  
  );
};

export default Slider;
