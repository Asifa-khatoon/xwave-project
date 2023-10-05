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

      <section class="blog spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-5">
                    <div class="blog__sidebar">
                        <div class="blog__sidebar__search">
                            <form className="" action="">
                              <p className="border">
                                <input className="border-nonee" type="text" placeholder="Search..."/>
                                <span class="fa fa-search border-nonee"></span> </p>
                            </form>
                        </div>
                        <div class="blog__sidebar__item">
                            


                        <h3 className="fw-bold mt-5  hovering"> Categories</h3>
            <div className="my-5">
              <p className="text-secondary p-2 hovering"> ALL</p>
              <p className="text-secondary py-2 hovering"> beauty 20</p>
              <p className="text-secondary py-2 hovering"> Food (5)</p>
              <p className="text-secondary py-2 hovering"> Life Style(9) </p>
              <p className="text-secondary py-2 hovering"> Travel (10) </p>
 
          </div>



                        </div>
                        <div class="blog__sidebar__item">
                            <h4>Recent News</h4>
                            <div class="blog__sidebar__recent">
                              
                                <div class="d-flex my-3">
                <img
                  className=""
                  src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-1.jpg"
                  alt="image"
                />

                <div class="mx-3">
              <h6 className="fw-bold"> 09 Kinds Of Vegetables <br/>
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
                        <div class="">
                            <h4 className="fw-bold mb-3 mt-5 f-ww"> <b> Search By</b></h4>
                            <div class="">
                                <button className="mx-2 bg-light border-nonee text-secondary  my-3">Apple </button>
                                <button  className="mx-2 bg-light border-nonee text-secondary "> Beauty</button>
                                <button  className="mx-2 bg-light border-nonee text-secondary "> Vegetables</button>  <br/>

                                <button className="mx-2 bg-light border-nonee text-secondary ">Fruit</button>
                                <button className="mx-2 bg-light border-nonee text-secondary ">Healthy Food</button>
                                <button className="mx-2 bg-light border-nonee text-secondary ">Lifestyle</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="">
                                <div class="mb-4">
                                <img src={card1} class="card-img-top" alt="..." />
                                </div>
                                <div class="blog__item__text">
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
                    class="btn btn-light border rounded-pill px-5 py-2 mt-3 mb-4"
                  >
                    READ MORE 
                  </button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="mb-4">
                                <img src={card2} class="card-img-top" alt="..." />
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
                    class="btn btn-light border rounded-pill px-5 py-2  mt-3 mb-4"
                  >
                    READ MORE
                  </button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="mb-4">
                                <img src={card3} class="card-img-top" alt="..." />
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
                    class="btn btn-light border rounded-pill px-5 py-2  mt-3 mb-4"
                  >
                    READ MORE
                  </button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="mb-4">
                                <img src={card4} class="card-img-top" alt="..." />
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
                    class="btn btn-light border rounded-pill px-5 py-2  mt-3 mb-4"
                  >
                    READ MORE
                  </button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="mb-4">
                                <img src={card4} class="card-img-top" alt="..." />
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
                    class="btn btn-light border rounded-pill px-5 py-2  mt-3 mb-4"
                  >
                    READ MORE
                  </button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="mb-4">
                                <img src={card6} class="card-img-top" alt="..." />
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
                    class="btn btn-light border rounded-pill px-5 py-2  mt-3 mb-4"
                  >
                    READ MORE
                  </button>
                            </div>
                       
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>








      




    </div>
  );
};

export default Blog;
