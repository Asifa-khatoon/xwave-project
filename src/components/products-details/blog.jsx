import React from "react";
import Navbar from "../navbar";
import card1 from "../../images/card-1.jpg";
import card2 from "../../images/blog-2.jpg";
import card3 from "../../images/blog-3.jpg";
import card4 from "../../images/blog-4.jpg";
import card6 from "../../images/blog-6.jpg";

const Blog = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-blog text-white py-4">
        <h1 className="fw-bolder text-center"> Blog</h1>
        <p className="fw-bold text-center">
          {" "}
          HOME- <span> Blog</span>
        </p>
      </div>
      <div class="col-lg-4">
            <div class="search-container">
              <input
                type="text"
                class="search-input fa fa-search"
                placeholder="Search..."
              />
            </div>
         
            <h3 className="fw-bold mt-5  hovering"> Categories</h3>
            <div className="my-5">
              <p className="text-secondary p-2 hovering"> ALL</p>
              <p className="text-secondary py-2 hovering"> beauty 20</p>
              <p className="text-secondary py-2 hovering"> Food (5)</p>
              <p className="text-secondary py-2 hovering"> Life Style(9) </p>
              <p className="text-secondary py-2 hovering"> Travel (10) </p>
            </div>

            <div class="d-grid  justify-content-md-start">
              <h4 className="fw-bolder">Recent News</h4>
              <div class="d-flex my-3">
                <img
                  className=""
                  src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-1.jpg"
                  alt="image"
                />

                <div class="mx-3">
                  <h6 className="fw-bold">
                    Tips You To Balance
                    <br /> Nutrition Meal Day
                  </h6>
                  <span className="text-secondary">MAR 05, 2019</span>
                </div>
              </div>

              <div class="d-flex my-3">
                <img
                  className=""
                  src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-2.jpg"
                  alt="image"
                />

                <div class="mx-3">
              <h6 className="fw-bold">  Tips You To Balance<br /> Nutrition Meal Day
                </h6> 
                  <span className="text-secondary">MAR 05, 2019</span>
                </div>
              </div>

              <div class="d-flex my-3">
                <img
                  className=""
                  src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-3.jpg"
                  alt="image"
                />

                <div class="mx-3">
                <h6 className="fw-bold">4 Principles Help You Lose <br />Weight With Vegetables</h6>
                  <span className="text-secondary">MAR 05, 2019</span>
                </div>
              </div>
            </div>
          </div>

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-8">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="">
                  <img src={card1} class="card-img-top" alt="..." />
                  <div class="card-body my-3">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col">
                <div class="">
                  <img src={card2} class="card-img-top" alt="..." />
                  <div class="card-body m-3">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col">
                <div class="">
                  <img src={card3} class="card-img-top" alt="..." />
                  <div class="card-body my-3">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col">
                <div class="">
                  <img src={card4} class="card-img-top" alt="..." />
                  <div class="card-body m-3">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col">
                <div class="">
                  <img src={card4} class="card-img-top" alt="..." />
                  <div class="card-body my-3">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div class="col">
                <div class="">
                  <img src={card6} class="card-img-top" alt="..." />
                  <div class="card-body my-3">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-5 py-2"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
