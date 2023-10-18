import React, { useState } from "react";
import './featured.css'

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

const categoryToDisplay = {
  "*": [1, 2, 3, 4, 5, 6, 7, 8], // Display all images for "All"
  ".oranges": [5, 7, 3, 4], // Display images 1, 3, and 4 for "Oranges"
  ".fresh-meat": [1, 6], // Display images 3, 6, and 2 for "Fresh Meat"
  ".vegetables": [2, 3, 5, 7], // Display images 2, 3, 5, and 7 for "Vegetables"
  ".fastfood": [2, 6, 7, 8], // Display images 2, 6, 7, and 8 for "Fastfood"
};

const FeaturedProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("*");

  const numImagesToDisplay = categoryToDisplay[selectedCategory];

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
                <li
                  className={`mx-2 ${selectedCategory === "*" ? 'active' : ''}`}
                  onClick={() => setSelectedCategory("*")}
                >
                  All
                </li>
                <li
                  className={`mx-2 ${selectedCategory === ".oranges" ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(".oranges")}
                >
                  Oranges
                </li>
                <li
                  className={`mx-2 ${selectedCategory === ".fresh-meat" ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(".fresh-meat")}
                >
                  Fresh Meat
                </li>
                <li
                  className={`mx-2 ${selectedCategory === ".vegetables" ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(".vegetables")}
                >
                  Vegetables
                </li>
                <li
                  className={`mx-2 ${selectedCategory === ".fastfood" ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(".fastfood")}
                >
                  Fastfood
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row ">
          {numImagesToDisplay.map((imageNumber) => (
            <div
              className={`col-lg-3 col-md-4 col-sm-6 mix ${selectedCategory.substr(1)}`}
              key={imageNumber}
            >
              <div className="items">
                <div
                  className={`picturess set-bg rounded ${selectedCategory === "*" ? 'active-category' : ''}`}
                  style={{ backgroundImage: `url(${imageUrls[imageNumber - 1]})` }}
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
            <div className="px-2">
              <img className="w-100" src="https://themewagon.github.io/ogani/img/banner/banner-1.jpg" alt="" />
            </div>
            <div className="px-2">
              <img className="w-100" src="https://themewagon.github.io/ogani/img/banner/banner-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
