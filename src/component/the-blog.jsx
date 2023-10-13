import React from 'react'





const TheBlog = () => {

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
      title: 'Cooking tips make cooking simple',
      content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
    },
    {
      imageSrc: 'https://themewagon.github.io/ogani/img/blog/blog-3.jpg',
      date: 'May 4, 2019',
      comments: 5,
      title: 'Cooking tips make cooking simple',
      content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
    },
  ];
  
  return (
  <>

<div className="container">
      <h1 className="text-center fw-bold my-5">From The Blog</h1>
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


  
  
  </>
  )
}

export default TheBlog
