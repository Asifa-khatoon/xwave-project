import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import logooo from "../images/assets/logo.png";
import flage from "../images/assets/language.png";

import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleToggle = () => {
    if (step === 'signup') {
      setShowModal(false);
    } else {
      setStep('signup');
      setError('');
    }
  };

  const handleSignIn = () => {
    if (!email || !password) {
      setError('Please fill all fields.');
    } else {
    
      


      console.log('Email:', email);
      console.log('Password:', password);

      setShowModal(false);
    }
  };

  const handleSignUp = () => {
    if (!firstName || !lastName || !username || !email || !password) {
      setError('Please fill all fields.');
    } else {
 
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

     
      setShowModal(false);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="">
                  <ul className="d-flex pt-2 ">
                    <p className='border-end px-3 '>
                      <i className="fa fa-envelope"></i> hello@colorlib.com
                    </p>
                    <vr/>
                    <p className='px-3'>Free Shipping for all Order of $99</p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="nabar-top-right py-2 text-center">
                  <div className="social-icons position-relative mx-3">
                    <a className="text-black px-3" href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a className="text-black px-2" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="text-black px-2" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="text-black px-3" href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </div>
                  <div className="languagess">
                    <img src={flage} alt="" />
                    <div className="mx-2">English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <a className="text-white px-3" href="#">Spanis</a>
                      </li>
                      <li>
                        <a className="text-white px-3" href="#">English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="login-icon">
                    <a href="#">



<Button variant="success" className='text-decorationn border-0 text-black' onClick={() => setShowModal(true)}>
<i className="fa fa-user"></i> login 
      </Button>
                    
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="./index.html">
                  <img className='pt-2' src={logooo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header-links d-flex pt-4">
                <ul>

                <li className="active nav-link">
                    <Link to="/" className=" fw-bold">Home</Link>
                  </li>
                 
                  <li  className=" nav-link">
                    <Link to="/shop" className="link-decoration text-black fw-bold">Shop</Link>
                  </li>
                  <li className=" nav-link">
                    <a className="link-decoration text-black fw-bold" href="#">Pages</a>
                    <ul className="header-links__dropdown">
                      <li className=" nav-link">
                        <Link to="/shopping-detailss">Shop Details </Link>
                      </li>
                      <li className=" nav-link">
                        <Link to="/shopping-cart">Shoping Cart</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="./check-out-page">Check Out</Link>
                      </li>

                      <li className="nav-link">
                        <Link to="./blog-detailss">Blog Details</Link>
                      </li>
                    
                    
                    
                    </ul>
                  </li>
                  <li className="nav-link">
                        <Link className='link-decoration text-black fw-bold' to="/blog">Blog</Link>
                      </li>

                      <li className="nav-link">
                        <Link className='link-decoration text-black fw-bold' to="/contact">Contact</Link>
                      </li>
                  
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 text-center">
              <div className="header-cart-2 pt-4">
                <ul>
                  <li>
                    <a className="mx-1 text-center" href="# ">
                      <i className="fa fa-heart text-black"></i>{" "}
                      <span className="text-white px-1 rounded-pill">1</span>
                    </a>
                  </li>
                  <li>
                    <a className="mx-3 text-center" href="#">
                      <i className="fa fa-shopping-bag text-black"></i>{" "}
                      <span className="text-white px-1 rounded-pill">3</span>
                    </a>
                  </li>
                </ul>
                <div className="header-cart text-black">
                  item: <span className="fw-bold">$150.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
    
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <img className='' src={logooo} alt="" />
        <Modal.Title>    <h2 className='fw-bold mx-5'>{step === 'signup' ? 'Sign Up' : 'Log In'} </h2>   </Modal.Title> 
        </Modal.Header>
        <Modal.Body>
          <Form>

            {step === 'signup' && (
              <> 
             
    
                  <div className=' mx-4 my-2'> 
                <Form.Group  controlId="formFirstName">
                  <Form.Control className=''
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                   
                </Form.Group>
                </div>
                <div className=' mx-4 my-2'> 
                <Form.Group controlId="formLastName">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                
                </Form.Group>
                </div>
                <div className=' mx-4 my-2'> 
               
                <Form.Group controlId="formUsername">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                </div>
              </>
            )}
             <div className=' mx-4 my-2'> 
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            </div>
            <div className=' mx-4 my-2'> 
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
            </Form.Group>
            </div>
          </Form>
          {error && <p className='mx-4 fw-bold text-danger'>{error}</p>}
        </Modal.Body>
        <Modal.Footer>
          {step === 'signup' ? (
           
              <Button variant="success" className='button-bg border-0 px-5 ' onClick={handleSignUp}>
                Sign Up
              </Button>
          
          ) : (
            <>
            <div className='mx-5 pt-5'> 
             <span className=''> don't have an account? </span>
           
              <Button   variant="success" className=' btn text-decorationn border-0  text-black' onClick={handleToggle}>
                signUp Now
              </Button>
              
             
              </div>
              <div className='mt-0 '> 
             
              <Button variant="success" className='px-4' onClick={handleSignIn}>
                Log In
              </Button>
              </div>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default Header;
