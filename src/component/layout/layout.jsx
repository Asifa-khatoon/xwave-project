import React from "react";




import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";


const RootLayout=()=>{
    return(
        <>
 

  <Header/>
 

    <Outlet/>
    <Footer/>


        </>
    )
};
export default RootLayout;