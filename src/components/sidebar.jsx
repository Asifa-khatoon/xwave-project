import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import cart1 from '../images/cat-1.jpg';
import cart2 from '../images/cat-2.jpg';
import cart3 from '../images/cat-3.jpg';
import cart4 from '../images/cat-4.jpg';
import cart5 from '../images/cat-5.jpg';

const productImages = [cart1, cart2, cart3, cart4, cart5];

const productDetails = [
  {
    name: 'Product 1',
    description: 'Description for Product 1',
  },
  {
    name: 'Product 2',
    description: 'Description for Product 2',
  },
  {
    name: 'Product 3',
    description: 'Description for Product 3',
  },
  {
    name: 'Product 4',
    description: 'Description for Product 4',
  },
  {
    name: 'Product 5',
    description: 'Description for Product 5',
  },
];

const CarouselImg = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSlideClick = (index) => {
    setSelectedProduct(productDetails[index]);
  };

  return (


    <div>

<div class="container text-center">
  <div class="row">
    <div class="col-sm-12">

      <div className='col'> 

            
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
            <img src={image} alt='' />
            {productDetails[index].name}
          </SwiperSlide>
        ))}

{selectedProduct && (
        <div>
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
        </div>
       
      )}
      </Swiper>
      
    
    </div>
    </div>
     </div>
    </div>
    </div>
  );
};

export default CarouselImg;



{/* <i class="fa fa-bars"></i> */}