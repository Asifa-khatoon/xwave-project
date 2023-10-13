import "./App.css";

import "swiper/css";
import "swiper/css/pagination";
import 'typeface-cairo'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/home";


import RootLayout from "./component/layout/layout";

import ShopNow from "./component/shop/shop-now";
import ProductDetail from "./component/product-details/product-detail";
import Blog from "./component/blog/blog";
import ContactDetails from "./component/contact/contact";
import CheckOutPage from "./component/check-out-page/check-out";
import BlogDetails from "./component/footer/blog-detailss/blog-detail";
import ShopDetsils from "./component/shopping-detailss/shop-details";

function App() {
  let router = createBrowserRouter([


    
    {

      path: "/",
      element: <RootLayout/>,
      children: [

        {
          path: "/",
         element: <Home />,
        },
       
          {
               path: "/",
              element: <Home />,
             },

             {
              path: "/shop",
            element: <ShopNow/>
            },
            {
              path: "/product-details",
            element: <ProductDetail/>
            },
            {
              path: "/blog",
            element: <Blog/>
            },
            {
              path: "/contact",
            element: <ContactDetails/>
            },
            {
              path: "/check-out-page",
            element: <CheckOutPage/>
            },
            {
              path: "/blog-detailss",
            element: <BlogDetails/>
            },
            {
              path: "/shopping-detailss",
            element: <ShopDetsils/>
            },
            


            
       
      ],

      // path: "/",
      // element: <Home/>,
      // children: [
       
      //     {
      //          path: "/products",
      //         element: <Slider/>,
      //        },

      //        {
      //         path: "/shop",
      //       element: <ShopNow/>
      //       },
      //       {
      //         path: "/product-details",
      //       element: <ProductDetail/>
      //       },


       
      // ],
    }



    
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
// {
    //   path: "/",
    //   element: <Home />,
    // },
    // {
    //   path: "/products",
    //   element: <Sliders />,
    // },
    // {
    //   path: "/navbar",
    //   element: <Navbar />,
    // },
    // {
    //   path: "/blog",
    //   element: <Blog />,
    // },