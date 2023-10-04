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
    buttonText: 'FRESHFRUIT', 
  },
  {
    name: 'Product 2',
    description: 'Description for Product 2',
    buttonText: 'DRIEDFRUIT', 
  },
  {
    name: 'Product 3',
    description: 'Description for Product 3',
    buttonText: 'VEGETABLES', 
  },
  {
    name: 'Product 4',
    description: 'Description for Product 4',
    buttonText: ' DRINKFRUIT', 
  },
  {
    name: 'Product 5',
    description: 'Description for Product 5',
    buttonText: 'DRINKFRUIT', 
  },
];

const CarouselImg = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSlideClick = (index) => {
    setSelectedProduct(productDetails[index]);
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
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
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
                <div className="image-container">
                  <img src={image} alt="" />
                  <div className="button-container">
                    <button className="btn bg-white px-5" onClick={() => handleSlideClick(index)}>
                      {productDetails[index].buttonText} 
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

export default CarouselImg;
