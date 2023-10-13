import React from 'react'

const Navbarr = () => {
  return (
    <div>

<section class="hero">
        <div class="container">
            <div class="row">
               
            <div class="col-lg-3">
        <div class="hero__categories bg-white p-3">
            <div class="hero-categories position relative" data-bs-toggle="collapse" data-bs-target="#categoriesList" aria-expanded="false">
                <i class="fa fa-bars"></i>
                <span class="text-white fw-bold">All departments</span>
            </div>
            <ul class="collapse categories-list" id="categoriesList">
                <li class="my-2">Fresh Meat</li>
                <li class="my-2">Vegetables</li>
                <li class="my-2">Fruit & Nut Gifts</li>
                <li class="my-2">Fresh Berries</li>
                <li class="my-2">Ocean Foods</li>
                <li class="my-2">Butter & Eggs</li>
                <li class="my-2">Fastfood</li>
                <li class="my-2">Fresh Onion</li>
                <li class="my-2">Papaya & Crisps</li>
                <li class="my-2">Oatmeal</li>
                <li class="my-2">Fresh Bananas</li>
            </ul>
        </div>
    </div>
                <div class="col-lg-9">
                    <div class="hero-section">
                        <div class="search-formm">
                            <form action="#">
                                <div class="search-categoriess">
                                    All Categories
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" class="site-btn text-white border-0 text-white">SEARCH</button>
                            </form>
                        </div>
                        <div class="hero-section__phone">
                            <div class="phone-icon-set">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero-section__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>

      
    </div>
  )
}

export default Navbarr
