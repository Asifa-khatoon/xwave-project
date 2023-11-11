import React from "react";
import "../../blog/blog.css";

const BlogDetails = () => {

  
  const blogPosts = [
    {
      imageSrc: 'https://themewagon.github.io/ogani/img/blog/blog-1.jpg',
      date: 'May 4, 2019',
      comments: 5,
      title: 'Cooking tips make cooking simple',
      content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
    },
    {
      imageSrc: 'https://themewagon.github.io/ogani/img/blog/blog-2.jpg',
      date: 'May 4, 2019',
      comments: 5,
      title: '6 ways to prepare breakfast for 30',
      content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
    },
    {
      imageSrc: 'https://themewagon.github.io/ogani/img/blog/blog-3.jpg',
      date: 'May 4, 2019',
      comments: 5,
      title: 'Visit the clean farm in the US',
      content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
    },
  ];

  return(

  <div>
    <div className="blogDetail-bg py-5 my-5">
      <h1 className="fw-set fw-bolder text-white text-center pt-5">
        The Moment You Need To Remove Garlic From The Menu
      </h1>
      <h5 className="fw-bold text-center text-white pb-5">
        <span className="px-3"> By Michael Scofield </span>{" "}
        <span className="border-start px-4"> January 14, 2019 </span>{" "}
        <span> 8 Comments</span>
      </h5>
    </div>

    <section class="blog spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-5 mt-5 pt-5">
            <div class="">
              <div class="blog-side position-relative mt-5 ">
                <form action="#" className="mt-5 position-relative ">
                  <input
                    className=" form-control rounded-pill py-2 px-3  "
                    type="text"
                    placeholder="Search..."
                  />
                  <button className="" type="submit">
                    <span class="fa fa-search  pt-3 pb-2 px-3"></span>
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
                <h4 className="f-ww fw-bold">Recent News</h4>
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
              <div class="col-lg-6 col-md-6 col-sm-6"></div>
              <div className="my-5">
                <img
                  className="mt-5 w-100"
                  src="https://themewagon.github.io/ogani/img/blog/details/details-pic.jpg"
                  alt=""
                />
                <h5 className="text-secondary py-3">
                  {" "}
                  Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui. Curabitur non nulla sit
                  amet nisl tempus convallis quis ac lectus. Mauris blandit
                  aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus. Sed
                  porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Proin eget tortor risus. Donec rutrum congue leo eget
                  malesuada. Curabitur non nulla sit amet nisl tempus convallis
                  quis ac lectus. Donec sollicitudin molestie malesuada. Nulla
                  quis lorem ut libero malesuada feugiat. Curabitur arcu erat,
                  accumsan id imperdiet et, porttitor at sem.
                </h5>
                <h4 className="fw-bold">
                  {" "}
                  <b>
                    {" "}
                    The corner window forms a place within a place that is a
                    resting point within the large space.{" "}
                  </b>
                </h4>
                <p className="text-secondary py-3 text-spacing ">
                 
                  The study area is located at the back with a view of the vast
                  nature. Together with the other buildings, a congruent story
                  has been managed in which the whole has a reinforcing effect
                  on the components. The use of materials seeks connection to
                  the main house, the adjacent stables
                </p>
              </div>

              <div class="">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="d-flex">
                                    <div class="">
                                        <img className="rounded-pill" src="https://themewagon.github.io/ogani/img/blog/details/details-author.jpg" alt=""/>
                                    </div>
                                    <div class="px-2  pt-4">
                                        <h6 className=" mb-0 fw-bold">Michael Scofield</h6>
                                        <span className="">Admin</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="">
                                   
                                         <p className="mb-0"><span className="fw-bold"> <b> Categories: </b></span> Food</p>
                                        <h6><span className="fw-bold"> <b> Tags: </b></span> All, Trending, Cooking, Healthy Food, Life Style</h6>
                                   
                                    <div class="">
                                       <h4>  <a href="#"><i class="fa fa-facebook text-secondary  "></i></a> 
                                        <a href="#"><i class="fa fa-twitter  text-secondary px-3"></i></a>
                                        <a href="#"><i class="fa fa-google-plus  text-secondary px-3"></i></a>
                                        <a href="#"><i class="fa fa-linkedin  text-secondary px-3"></i></a>
                                        <a href="#"><i class="fa fa-envelope  text-secondary px-3"></i></a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
            </div>
          
          </div>
        
        </div>
      
      </div>
      <div className="my-5 py-3">
      <hr />
      </div>
      <div className="container">
      <h1 className="text-center fw-bold my-5">  <b> Post You May Like </b></h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {blogPosts.map((post, index) => (
          <div className="col" key={index}>
            <div className="">
              <img src={post.imageSrc} className="card-img-top" alt="..." />
              <div className="card-body my-4">
                <p className="text-secondary">
                  <i className="fa fa-calendar-o"></i> {post.date} &nbsp; &nbsp; &nbsp;
                  <i className="fa fa-comment-o"></i> {post.comments}{" "}
                </p>
                <h5 className="card-title fw-bold py-2">{post.title}</h5>
                <p className="card-text my-2">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

   
    </section>
  </div>
  )
}

export default BlogDetails;
