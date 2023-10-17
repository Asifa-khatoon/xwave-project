import React from "react";
import './featured.css';

const imageUrls = [
  "https://themewagon.github.io/ogani/img/featured/feature-1.jpg",
  "https://themewagon.github.io/ogani/img/featured/feature-2.jpg",
  "https://themewagon.github.io/ogani/img/featured/feature-3.jpg",
  "https://themewagon.github.io/ogani/img/featured/feature-4.jpg",
  "https://themewagon.github.io/ogani/img/featured/feature-5.jpg",
  "https://themewagon.github.io/ogani/img/featured/feature-6.jpg",
  "https://themewagon.github.io/ogani/img/featured/feature-7.jpg",
  "https://themewagon.github.io/ogani/img/featured/feature-8.jpg",
];

const FeaturedProduct = () => {
  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-black">
              <h2 className="fw-bold">Featured Product</h2>
            </div>
            <div className="featuredd pe-auto text-center my-5">
              <ul className="fs-4">
                <li className="active mx-2" data-filter="*">All</li>
                <li className=" mx-2" data-filter=".oranges">Oranges</li>
                <li className=" mx-2" data-filter=".fresh-meat">Fresh Meat</li>
                <li className="mx-2" data-filter=".vegetables">Vegetables</li>
                <li data-filter=".fastfood">Fastfood</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row r">
          {imageUrls.map((imageUrl, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
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

        <div className="">
          <div className="container d-flex py-3 my-4">

            
             
                <div className=" px-2">

                  <img className="w-100" src="https://themewagon.github.io/ogani/img/banner/banner-1.jpg" alt="" />
                </div>

             
            
                <div className=" px-2">

                  <img className="w-100" src="https://themewagon.github.io/ogani/img/banner/banner-2.jpg" alt="" />
                </div>

             
              
            </div>
            </div>
       


       
      </div>
    </section>
  );
};

export default FeaturedProduct;
