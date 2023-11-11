
import React from "react";
import RootLayout from '../layout/layout'
import Slider from "./products/Product-slider";
import FeaturedProduct from "./Featured-products/featured-productss";
import './home.css'
import TheBlog from "../the-blog";

import { Link } from "react-router-dom";
import ThreeSliders from "./Featured-products/Three-sliders";




const Home =()=>{
  
    return(
        <>
        <section class="hero">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                <div class="hero__categories bg-white p-3 ">
    <div class="hero-categories p-2 px-4 position relative" data-bs-toggle="collapse" data-bs-target="#categoriesList" aria-expanded="false">
        <i class="fa fa-bars px-2 text-white py-2 "></i>
        <span className="text-white fw-bold ">All departments </span> 
    </div>
    <ul class="collapse categories-list" id="categoriesList">
        <li class="my-2 ">Fresh Meat</li>
        <li class="my-2 ">Vegetables</li>
        <li class="my-2 ">Fruit & Nut Gifts</li>
        <li class="my-2 ">Fresh Berries</li>
        <li class="my-2 ">Ocean Foods</li>
        <li class="my-2 ">Butter & Eggs</li>
        <li class="my-2 ">Fastfood</li>
        <li class="my-2 ">Fresh Onion</li>
        <li class="my-2 ">Papayaya & Crisps</li>
        <li class="my-2 ">Oatmeal</li>
        <li class="my-2 ">Fresh Bananas</li>
    </ul>
</div>

                </div>
                <div class="col-lg-9">
                    <div class="hero-section my-3">
                        <div class="search-formm ">
                            <form action="#">
                                <div class="search-categoriess text-center pt-2">
                                   <p className="fw-bold"> All Categories </p> 
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" class="site-btn fw-bold text-white border-0 text-white px-4">SEARCH</button>
                            </form>
                        </div>
                        <div class="">
                            <div class="phone-icon-set text-center    mx-2 rounded-pill">
                                <i class="fa fa-phone rounded-pill "></i>
                            </div>
                            <div class="">
                                <h5 className="fw-bold">+65 11.188.888</h5>
                                <span className="text-secondary">support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    <div class="hero-section-set pt-5 text-center set-bg bannerpic"> 
                        <div class="hero__text mt-4 text-start">
                            <span className="text-decorations">FRUIT FRESH</span>
                            <h2 className="text-black main-text">Vegetable <br />100% Organic</h2>
                            <p className="pb-3">Free Pickup and Delivery Available</p>
                          <button className="btn-shop text-white border-0 py-2 px-4"> SHOP NOW </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
<Slider />
<FeaturedProduct/>



<ThreeSliders/>

<TheBlog/>




   

        </>
    )
};
export default Home;