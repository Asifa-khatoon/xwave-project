import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const HeroSection = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="bg-white p-3">
              <div
                className="pointerr"
                onClick={toggleCategories}
               
                data-bs-toggle="collapse"
                data-bs-target="#departments"
              >
                <i className={`fa ${showCategories ? 'fa-minus' : 'fa-bars'}`}></i>
                <span>All departments</span>
              </div>
              <ul className="collapse" id="departments">
                <li><a href="#">Fresh Meat</a></li>
                <li><a href="#">Vegetables</a></li>
                <li><a href="#">Fruit & Nut Gifts</a></li>
                <li><a href="#">Fresh Berries</a></li>
                <li><a href="#">Ocean Foods</a></li>
                <li><a href="#">Butter & Eggs</a></li>
                <li><a href="#">Fastfood</a></li>
                <li><a href="#">Fresh Onion</a></li>
                <li><a href="#">Papayaya & Crisps</a></li>
                <li><a href="#">Oatmeal</a></li>
                <li><a href="#">Fresh Bananas</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="">
              <div className=" bg-white p-3">
                <form action="#">
                  <div className="d-flex">
                   
                  
                 
                  <span className="">  All Categories</span>
                  <input type="text" placeholder="What do you need?" className="form-control" />
                  <button type="submit" className="btn btn-primary">SEARCH</button>
                  </div>
                </form>
              </div>
              <div className=" mt-3">
                <div className=" bg-primary p-3 rounded-circle">
                  <i className="fa fa-phone text-white"></i>

                 
                </div>
                <div className="hero__search__phone__text">
                  <h5 className="text-primary">+65 11.188.888</h5>
                  <span className="text-size-2">Support 24/7 time</span>
                </div>
               
              </div>
            </div>
            <div className="bg-images">
              <div className="hero__text">
                <span className="text-primary">FRUIT FRESH</span>
                <h2>Vegetable <br />100% Organic</h2>
                <p>Free Pickup and Delivery Available</p>
                <a href="#" className="btn btn-primary">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
