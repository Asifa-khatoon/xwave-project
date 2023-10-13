import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AuthModal() {
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
      // Implement your sign-in logic here
      console.log('Email:', email);
      console.log('Password:', password);

      // Close the modal
      setShowModal(false);
    }
  };

  const handleSignUp = () => {
    if (!firstName || !lastName || !username || !email || !password) {
      setError('Please fill all fields.');
    } else {
      // Implement your sign-up logic here
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      // Close the modal
      setShowModal(false);
    }
  };

  return (
    <div>
      {/* <Button variant="primary" onClick={() => setShowModal(true)}>
        Log In
      </Button> */}

      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{step === 'signup' ? 'Sign Up' : 'Log In'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {step === 'signup' && (
              <>
                <Form.Group controlId="formFirstName">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formLastName">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formUsername">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
              </>
            )}
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Modal.Body>
        <Modal.Footer>
          {step === 'signup' ? (
            <>
              <Button variant="primary" onClick={handleSignUp}>
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Button variant="secondary" onClick={handleToggle}>
                signup
              </Button>
              <Button variant="success" onClick={handleSignIn}>
                Log In
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>






      {/* <section class="">
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
                                <div>
                                <input  className='form-control' type="text" placeholder="Street Address"/>
                                </div>
                                  <input  className='form-control' type="text" placeholder="Street Address"/>
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
                                    <span class="">   Create an account?</span>
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
                                    <span class="checkmark">   Ship to a different address?</span>
                                </label>
                            </div>
                            <div className='pt-3 mb-5'>
                                <p>Order notes<span className='text-danger'> *</span></p>
                                <input  className='form-control' type="text"
                                    placeholder="Notes about your order, e.g. special notes for delivery."/>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="bg-success py-5 ">
                                <h4>Your Order</h4>
                                <div class="">Products <span>Total</span></div>
                                <ul>
                                    <li>Vegetable’s Package <span>$75.99</span></li>
                                    <li>Fresh Vegetable <span>$151.99</span></li>
                                    <li>Organic Bananas <span>$53.99</span></li>
                                </ul>
                                <div class="">Subtotal <span>$750.99</span></div>
                                <div class="">Total <span>$750.99</span></div>
                                <div class="">
                                    <label for="accounttt">
                                        Create an account?
                                        <input type="checkbox" id="accounttt"/>
                                        <span class=""></span>
                                    </label>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                                <div class="">
                                    <label for="payment">
                                        Check Payment
                                        <input type="checkbox" id="payment"/>
                                        <span class=""></span>
                                    </label>
                                </div>
                                <div class="">
                                    <label for="paypal">
                                        Paypal
                                        <input type="checkbox" id="paypal"/>
                                        <span class=""></span>
                                    </label>
                                </div>
                                <button type="submit" class="site-btn">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
               
                </form>
            </div>
        </div>
        </section> */}
    </div>
  );
}

export default AuthModal;
