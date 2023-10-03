import React from 'react'
import organii from '../images/organi.png'

const Navbar = () => {
  return (
    <div>

<div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mb-2">
      <img src={organii}/>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 fw-bold text-color">Home</a></li>
        <li><a href="#" class="nav-link px-2 fw-bold link-dark">shopp</a></li>
         <div class="dropdown ">
 <button class="btn
dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               Pages
             </button>
             <ul class="dropdown-menu bg-dark">
               <li><a class="dropdown-item text-white" href="#">Shop Details</a></li>
               <li><a class="dropdown-item text-white" href="#">Shopping Cart</a></li>
               <li><a class="dropdown-item text-white" href="#">Check Out</a></li>
               <li><a class="dropdown-item text-white" href="#">Blog Details</a></li>
             </ul>
           </div> 
      
        <li><a href="#" class="nav-link px-2  fw-bold link-dark">blog</a></li>
        <li><a href="#" class="nav-link px-2  fw-bold link-dark">contact</a></li>
      </ul>

      <div class="col-md-3 text-end">
      <button type="button" class=" position-relative rounded-circle mx-3">
              <i class="fa fa-heart"></i>
              <span class="  position-absolute top-0 start-100 translate-middle badge rounded-pill bg-colorr">
                1
                <span class="visually-hidden"> </span>
              </span>
            </button>

            <button type="button" class=" position-relative rounded-circle mx-3">
            <i class="fa fa-shopping-bag"></i>
              <span class=" secondary-color position-absolute top-0 start-100 translate-middle badge rounded-pill bg-colorr">
                3
                <span class="visually-hidden"> </span>
              </span>
              
            </button>
          
           
            <span> item: 
                <span className='fw-bold'>  $150.00 </span></span>

      </div>
    </header>
  </div>
     
    </div>
  )
}

export default Navbar

// import React from "react";
// import organi from '../images/organi.png'


// const Navbar = () => {
//  const NavList = {
//    HOME: "home",
//    shop: "Shop",
//    pages: "Pages",
//    blog: "Blog",
//    contact: "Contact",
//    login: "Login",
//    signup: "SignUp"
//  };

//  return (
//    <>
//      <div className="container">
//        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4">
//          <div className="col-md-2 mb-2 mb-md-0">
//            <img src={organi} alt="" />
//          </div>

       
//          <div className="col-md-8 nav-links ">
//            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
//              <li><a href="#" className="nav-link px-2  text-success">{NavList.HOME}</a></li>
//              <li><a href="#" className="nav-link px-2 text-black nav-color">{NavList.shop}</a></li>


            
//              <div class="dropdown ">
//                <button class="btn
//   dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                  Pages
//                </button>
//                <ul class="dropdown-menu bg-dark">
//                  <li><a class="dropdown-item text-white" href="#">Shop Details</a></li>
//                  <li><a class="dropdown-item text-white" href="#">Shopping Cart</a></li>
//                  <li><a class="dropdown-item text-white" href="#">Check Out</a></li>
//                  <li><a class="dropdown-item text-white" href="#">Blog Details</a></li>
//                </ul>
//              </div>
//              <li><a href="#" className="nav-link px-2 text-black">{NavList.blog}</a></li>
//              <li><a href="#" className="nav-link px-2 text-black">{NavList.contact}</a></li>
//            </ul>
//          </div>



//          <div class="col-md-2 icons d-flex ">
//           <div>
//           {/* <img width={20} src={Heart} alt="icon" /> */}
//           </div>
       
//            {/* <img width={20} src={Purse} alt="icon" /> */}
          
//           <div>
//           item: $150.00
//           </div>
         
//          </div>

//        </header>
//      </div>
//    </>
//  );
// }

// export default Navbar
