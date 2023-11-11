import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,  } from 'swiper/modules';






import './shopping.css'


const ShopDetsils = () => {
  const imageUrls = [
    "https://themewagon.github.io/ogani/img/featured/feature-1.jpg",
    "https://themewagon.github.io/ogani/img/featured/feature-2.jpg",
    "https://themewagon.github.io/ogani/img/featured/feature-3.jpg",
    "https://themewagon.github.io/ogani/img/featured/feature-4.jpg",
    
  ];
  const slidesPerView = window.innerWidth >= 768 ? 4 : window.innerWidth >= 480 ? 2 : 1;

    const [activeTab, setActiveTab] = useState('description'); 

    const handleClick = (tab) => {
      setActiveTab(tab);
    };
  

  return (
    <div>
        <div className='shopping-bg w-100  pt-5 my-3 mb-5 '>

<h1 className='fw-set fw-bold text-white text-center'> Vegetable’s Package </h1>
<p className='text-center pb-4 '> 
<span className='fw-bold  text-white pb-4'>Home-  Vegetables-   </span>
    <span className='text-white'> Vegetable’s Package</span>  
</p>


</div>

<div class="container">
            <div class="row ">
                <div class="col-lg-6 col-md-6">
                    <div class="">
                        <div class="">
                            <img class="w-100"
                                src="https://themewagon.github.io/ogani/img/product/details/product-details-1.jpg" alt=""/>
                        </div>
                        <div className=''>
      <div className='text-center'>
        <Swiper 
          slidesPerView={slidesPerView}
          spaceBetween={30} 
          centeredSlides={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay,Navigation]}
          className="mySwiper py-5 "
        >
          <div className=''> 
       
          <SwiperSlide>
            <img className="" src="https://themewagon.github.io/ogani/img/product/details/thumb-4.jpg" alt="image" />
          </SwiperSlide>
          </div>
          <SwiperSlide className=''>
            <img  className="" src="https://themewagon.github.io/ogani/img/product/details/thumb-1.jpg" alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="https://themewagon.github.io/ogani/img/product/details/thumb-2.jpg" alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="https://themewagon.github.io/ogani/img/product/details/thumb-3.jpg" alt="image" />
          </SwiperSlide>
         
        </Swiper>
      </div>
  


 
  </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="">
                        <h1 className='fw-bold'>Vetgetable’s Package</h1>
                        <div class="text-warning">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span className='text-danger'>(18 reviews)</span>
                        </div>
                        <h3 class="text-danger fw-bold py-2">$50.00</h3>
                        <p className='text-secondary'>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                            vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                            quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                        <div class="">
                            <div class="">
                               
                            </div>
                        </div>
                       
                       
                        <p><b>Availability</b> <span className='px-4 mx-4'>In Stock</span></p>
                            <p><b>Shipping</b> <span  className='px-3 mx-5'>01 day shipping. <samp className='text-danger'>Free pickup today</samp></span></p>
                            <p><b>Weight</b> <span  className='px-5 mx-4'>0.5 kg</span></p>
                            <p><b>Share on</b>
                               <span className='px-3'> 
                                    <a href="#"><i class="fa fa-facebook text-black px-5"></i></a>
                                    <a href="#"><i class="fa fa-twitter  text-black"></i></a>
                                    <a href="#"><i class="fa fa-instagram  text-black px-5"></i></a>
                                    <a href="#"><i class="fa fa-pinterest  text-black "></i></a>
                                    </span>
                               
                          </p>

                       
                    </div>
                </div>
      
    </div>
   


    <div className="container ">
      <div className="row ">
        <div
          className={`col-md-2 text-secondary cursor-value ${activeTab === 'description' ? 'fw-bold' : ''}`}
          onClick={() => handleClick('description')}
        >
          Description
        </div>
        <div
          className={`col-md-2 text-secondary  cursor-value ${activeTab === 'information' ? 'fw-bold' : ''}`}
          onClick={() => handleClick('information')}
        >
          Information
        </div>
        <div
          className={`col-md-2 text-  cursor-value  ${activeTab === 'reviews' ? 'fw-bold' : ''}`}
          onClick={() => handleClick('reviews')}
        >
          Reviews (1)
        </div>
      </div>
    </div>

    <div className="container mt-5 mb-5">
      <h6 className="fw-bold">Product Information</h6>
      <p className="fs text-secondary">
        {activeTab === 'description' && 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.'}


        {activeTab === 'information' && 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'}


        {activeTab === 'reviews' && 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum  id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.'}
      </p>
    </div>

    </div>
    <div className='container'> 
   <div className="row ">
    
          {imageUrls.map((imageUrl, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat "
              key={index}
            >
              <div className="items">
                <div
                  className="picturess set-bg rounded"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                >
                  <ul className="picturess-hover text-black">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured fw-bold my-2 text-center ">
                  <h6>Crab Pool Security</h6>
                  <h5 className="fw-bold">$30.00</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
</div>
</div>
   
  )
}

export default ShopDetsils
