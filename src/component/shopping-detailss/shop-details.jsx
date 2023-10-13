import React from 'react'

import './shopping.css'


const ShopDetsils = () => {
  return (
    <div>
        <div className='shopping-bg  pt-5 my-3 mb-5 '>

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
                            <img class=""
                                src="https://themewagon.github.io/ogani/img/product/details/product-details-1.jpg" alt=""/>
                        </div>
                        <div class="product__details__pic__slider owl-carousel">
                            {/* <img data-imgbigurl="img/product/details/product-details-2.jpg"
                                src="img/product/details/thumb-1.jpg" alt=""/>
                            <img data-imgbigurl="img/product/details/product-details-3.jpg"
                                src="img/product/details/thumb-2.jpg" alt="">
                            <img data-imgbigurl="img/product/details/product-details-5.jpg"
                                src="img/product/details/thumb-3.jpg" alt="">
                            <img data-imgbigurl="img/product/details/product-details-4.jpg"
                                src="img/product/details/thumb-4.jpg" alt=""> */}
                                
                                pictures here 
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
                        <a href="#" class="primary-btn">ADD TO CARD</a>
                        <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                       
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
    </div>
    </div>
  )
}

export default ShopDetsils
