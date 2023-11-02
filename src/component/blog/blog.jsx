import React from "react";
import "./blog.css";

const Blog = () => (
  <div>
    <div className="bg-image-set py-3 my-5 ">
      <h1 className="fw-set fw-bolder text-white text-center"> Blog</h1>
      <h5 className="fw-bold text-center text-white pb-4">
       
        Home- <span className=""> Blog</span>
      </h5>
    </div>

    <section class="blog spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-5">
            <div class="">
              <div class="blog-side position-relative">
                <form action="#" className="mt-5 position-relative">
                  <input
                    className=" form-control rounded-pill py-2 px-3  "
                    type="text"
                    placeholder="Search..."
                  />
                  <button className="" type="submit">
                    <span class="fa fa-search button-setting"></span>
                  </button>
                </form>
              </div>
              <div class="">
                <h3 className="fw-bold mt-5  hovering"> Categories</h3>
                <div className="my-5">
                  <p className="text-secondary p-2 hovering"> ALL</p>
                  <p className="text-secondary py-2 hovering"> beauty 20</p>
                  <p className="text-secondary py-2 hovering"> Food (5)</p>
                  <p className="text-secondary py-2 hovering">
                    {" "}
                    Life Style(9){" "}
                  </p>
                  <p className="text-secondary py-2 hovering"> Travel (10) </p>
                </div>
              </div>
              <div class="f-ww">
                <h4 className="f-ww fw-bold"> <b> Recent News</b></h4>
                <div class="">
                  <div class="d-flex my-3">
                    <img
                      className=""
                      src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-3.jpg"
                      alt="image"
                    />

                    <div class="mx-3">
                      <h6 className="fw-bold">
                        {" "}
                        09 Kinds Of Vegetables <br />
                        Protect The Liver
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
                      <h6 className="fw-bold">
                        {" "}
                        Tips You To Balance
                        <br /> Nutrition Meal Day
                      </h6>
                      <span className="text-secondary">MAR 05, 2019</span>
                    </div>
                  </div>
                  <div class="d-flex my-3">
                    <img
                      className=""
                      src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-1.jpg"
                      alt="image"
                    />

                    <div class="mx-3">
                      <h6 className="fw-bold">
                        4 Principles Help You Lose <br />
                        Weight With Vegetables
                      </h6>
                      <span className="text-secondary">MAR 05, 2019</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <h4 className="fw-bold mb-3 mt-5 f-ww">
                  {" "}
                  <b> Search By</b>
                </h4>
                <div class="">
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  my-3">
                    Apple{" "}
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  ">
                    {" "}
                    Beauty
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  ">
                    {" "}
                    Vegetables
                  </button>{" "}
                  <br />
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  ">
                    Fruit
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  ">
                    Healthy Food
                  </button>
                  <button className="mx-2 bg-light border-nonee text-secondary border-0  ">
                    Lifestyle
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-7">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="">
                  <div class="mb-4">
                    <img
                      src="https://themewagon.github.io/ogani/img/blog/blog-2.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text m-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-3 py-2 mt-3"
                  >
                    READ MORE <i class="fa fa-long-arrow-right px-2"></i>
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="mb-4">
                    <img
                      src="https://themewagon.github.io/ogani/img/blog/blog-3.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text my-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-3  py-2 my-2"
                  >
                    READ MORE <i class="fa fa-long-arrow-right px-2"></i>
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="mb-4">
                    <img
                      src="https://themewagon.github.io/ogani/img/blog/blog-1.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text my-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-3 py-2 my-2"
                  >
                    READ MORE <i class="fa fa-long-arrow-right px-2"></i>
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="mb-4">
                    <img
                      src="https://themewagon.github.io/ogani/img/blog/blog-4.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text my-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-3 py-2 my-2"
                  >
                    READ MORE <i class="fa fa-long-arrow-right px-2"></i>
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="mb-4">
                    <img
                      src="https://themewagon.github.io/ogani/img/blog/blog-4.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text my-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-3  py-2 my-2"
                  >
                    READ MORE <i class="fa fa-long-arrow-right px-2"></i>
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="mb-4">
                    <img
                      src="https://themewagon.github.io/ogani/img/blog/blog-6.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="blog__item__text">
                    <p className="text-secondary">
                      {" "}
                      <i class="fa fa-calendar-o"></i> May 4,2019 &nbsp; &nbsp;
                      &nbsp; <i class="fa fa-comment-o"></i> 5{" "}
                    </p>
                    <h5 class="card-title fw-bold  py-2">
                      {" "}
                      Cooking tips make cooking simple
                    </h5>
                    <p class="card-text my-2">
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-light border rounded-pill px-3 py-2 my-2"
                  >
                    READ MORE <i class="fa fa-long-arrow-right px-2"></i>
                  </button>
                </div>
              </div>
              <div className="my-2"> 
              <hr />
              </div>
              <div class="col-lg-12 my-2">
                <div class="blog-btn-2 blog-btn">
                  <a
                    href="#"
                    className=" text-center text-secondary border px-2 "
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className=" text-center  text-secondary border px-2 mx-4"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className=" text-center  text-secondary border px-2"
                  >
                    3
                  </a>

                  <a
                    href="#"
                    className=" text-center  text-secondary border px-2 mx-4"
                  >
                    {" "}
                    <i class="fa fa-long-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
