import React from 'react'
import './check.css'

const CheckOutPage = () => {
  return (
    <div>

<div className='bg-image-set  pt-5 '>

<h1 className='fw-set fw-bolder text-white text-center'> Checkout </h1>
<h5 className='fw-bold text-center text-white pb-4'> Home-    <span className=''> check out</span>   </h5>



</div>

<div class="container">
                
                    <h6 className=' py-2  text-center border-top my-5 border-success bg-colorr text-secondary'>  <i class="fa fa-tag fa-rotate-90 icon-color"></i> Have a coupon? <a className='text-secondary' href="#"> <u> Click here </u> </a> to enter your code
                    </h6>
                </div>



                <section class="">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                  
                </div>
            </div>
            <div class="">
                <h4>  <b>   Billing Details </b>
                 </h4>
                <form action="#">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="row">
                            <div class="col-lg-6">
                                    <div class="">
                                        <p>Fist Name<span className='text-danger'>*</span></p>
                                        <input className='form-control' type="text"/>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="">
                                        <p>Last Name<span className='text-danger'>*</span></p>
                                        <input  className='form-control' type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3">
                                <p>Country<span className='text-danger'>*</span></p>
                                <input  className='form-control' type="text"/>
                            </div>
                            <div class="py-3">
                                <p>Address<span className='text-danger'>*</span></p>
                                <div className='py-3'>
                                <input  className='form-control' type="text" placeholder="Street Address"/>
                                </div>
                              
                                <input  className='form-control' type="text" placeholder="Apartment, suite, unite ect (optinal)"/>
                            </div>
                            <div class="py-3">
                                <p>Town/City<span className='text-danger'>*</span></p>
                                <input  className='form-control' type="text"/>
                            </div>
                            <div class="py-3">
                                <p>Country/State<span className='text-danger'>*</span></p>
                                <input  className='form-control' type="text"/>
                            </div>
                            <div class="">
                                <p>Postcode / ZIP<span className='text-danger'>*</span></p>
                                <input  className='form-control' type="text"/>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="py-3">
                                        <p>Phone<span className='text-danger'>*</span></p>
                                        <input  className='form-control' type="number"/>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="py-3">
                                        <p>Email<span className='text-danger'>*</span></p>
                                        <input  className='form-control' type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <label for="account">
                                  
                                    <input type="checkbox" id="account"/>
                                    <span class="mx-4">   Create an account?</span>
                                </label>
                            </div>
                            <p>Create an account by entering the information below. If you are a returning customer
                                please login at the top of the page</p>
                            <div class="py-3">
                                <p>Account Password<span className='text-danger'>*</span></p>
                                <input  className='form-control' type="password"/>
                            </div>
                            <div class="">
                                <label for="accounts">
                                  
                                    <input type="checkbox" id="accounts"/>
                                    <span class=" mx-4 form-check-input">   Ship to a different address?</span>
                                </label>
                            </div>
                            <div className='pt-3 mb-5'>
                                <p>Order notes<span className='text-danger'> *</span></p>
                                <input  className='form-control' type="text"
                                    placeholder="Notes about your order, e.g. special notes for delivery."/>
                            </div>
                        </div>

                        {/* card section */}
                        <div class="col-lg-4 col-md-6">
                            <div class="bg-colorr container py-5 px-5 mx-3 ">
                                <h4 className='border-bottom'> <b> Your Order </b></h4>
                                <div class="d-flex justify-content-between fw-bold">Products <span>Total</span> </div>
                              

                                <div class="d-flex justify-content-between py-2 text-secondary">Vegetable’s Package  <span>$75.99</span> </div>
                                <div class="d-flex justify-content-between  text-secondary">Fresh Vegetable <span>$151.99</span> </div>
                                  
                                <div class="d-flex justify-content-between py-2 text-secondary"> Organic Bananas <span>$53.99</span></div>
                              <hr/>
                              <div class="d-flex justify-content-between  fw-bold fs-5"> <b> Subtotal </b> <b> <span>$750.99</span> </b></div>
                              <hr/>
                             
                              <div class="d-flex justify-content-between  fw-bold fs-5"> <b> Total </b> <b> <span className='text-danger'>$750.99</span> </b></div>
                               <hr/>
                                <div class="">
                                    <label for="accounttt">
                                      
                                        <input type="checkbox" id="accounttt"/>
                                        <span class="px-1">   Create an account?</span>
                                    </label>
                                </div>
                                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                                <div class="my-3">
                                    <label for="payment">
                                       
                                        <input type="checkbox" id="payment"/>
                                        <span class="px-1"> Check Payment</span>
                                    </label>
                                </div>
                                <div class="">
                                    <label for="paypal">
                                       
                                        <input type="checkbox" id="paypal"/>
                                        <span class=" px-1"> Paypal </span>
                                    </label>
                                </div>
                                <div className='text-center'> 
                                <button type="submit" class="site-btn my-4 border-0 text-white px-5 py-2  ">PLACE ORDER</button> </div>
                            </div>
                        </div>
                    </div>
               
                </form>
            </div>
        </div>
        </section>




              
       

  
      
    </div>
  )
}

export default CheckOutPage
