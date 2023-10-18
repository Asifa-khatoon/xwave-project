import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import cart1 from '../../images/assets/cat-1.jpg';
import cart2 from '../../images/assets/cat-2.jpg';
import cart3 from '../../images/assets/cat-3.jpg';
import cart4 from '../../images/assets/cat-4.jpg';
import cart5 from '../../images/assets/cat-5.jpg';

const productImages = [cart1, cart2, cart3, cart4, cart5];

const ProductDetails = [
  {
    name: 'Product 1',
    description: 'Description for Product 1',
    buttonText: 'FRESH FRUIT', 
  },
  {
    name: 'Product 2',
    description: 'Description for Product 2',
    buttonText: 'DRIED FRUIT', 
  },
  {
    name: 'Product 3',
    description: 'Description for Product 3',
    buttonText: 'VEGETABLES', 
  },
  {
    name: 'Product 4',
    description: 'Description for Product 4',
    buttonText: 'DRINK FRUIT', 
  },
  {
    name: 'Product 5',
    description: 'Description for Product 5',
    buttonText: 'DRINK FRUIT', 
  },
];

const Slider = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSlideClick = (index) => {
    setSelectedProduct(ProductDetails[index]);
  };

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
            {productImages.map((image, index) => (
              <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
                <div className="image-container position-relative">
                  <img src={image} alt="" />
                  <div className="button-setting position-absolute">
                    <button className="btn bg-white px-2" onClick={() => handleSlideClick(index)}>
                      {ProductDetails[index].buttonText} 
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {selectedProduct && (
            <div>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;


// <SwiperSlide classNameName='swiper-slide position-relative'>
        
// <div class=" " >
// <img src={cart1} alt="" />
//                     <h5><a href="#">Fresh Fruit</a></h5>
//                     <button
//           className="btn btn-primary image-button"
        
//         >
//           </button>
//                 </div>
// </SwiperSlide>
// <SwiperSlide classNameName='swiper-slide '>

//     <div class="" >
//     <img src={cart2} alt="" />
//                     <h5><a href="#">Dried Fruit</a></h5>
//                 </div>
// </SwiperSlide>
// <SwiperSlide classNameName='swiper-slide '>
// <img src={cart3} alt="" />

//     <div class="" >
//                     <h5><a href="#">Vegetables</a></h5>
//                 </div>
// </SwiperSlide>
// <SwiperSlide classNameName='swiper-slide '>

//     <div class="" >
//       <img src={cart4} alt="" />
//                     <h5><a href="#">drink fruits</a></h5>
//                 </div>
// </SwiperSlide>
// <SwiperSlide classNameName='swiper-slide '>

//     <div class="" >
//     <img src={cart5} alt="" />
//                     <h5><a href="#">drink fruits</a></h5>
//                 </div>
// </SwiperSlide>
