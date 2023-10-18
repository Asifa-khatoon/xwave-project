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
  const [inputStatus, setInputStatus] = useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
  });

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

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    if (!value) {
      setError(`Please fill the ${field} field.`);
    } else {
      setError('');
    }

    setInputStatus({ ...inputStatus, [field]: !!value });
  };

  return (
    <div>
      <Button
        variant="success"
        className="text-decorationn border-0 text-black"
        onClick={() => setShowModal(true)}
      >
        <i className="fa fa-user"></i> Login
      </Button>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="fw-bold mx-5">
              {step === 'signup' ? 'Sign Up' : 'Log In'}
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {step === 'signup' && (
              <>
                <div className="mx-4 my-2">
                  <Form.Group controlId="formFirstName">
                    <Form.Control
                      className={inputStatus.firstName ? 'looks-good' : ''}
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        handleInputChange(e, 'firstName');
                      }}
                    />
                  </Form.Group>
                </div>
                <div className="mx-4 my-2">
                  <Form.Group controlId="formLastName">
                    <Form.Control
                      className={inputStatus.lastName ? 'looks-good' : ''}
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        handleInputChange(e, 'lastName');
                      }}
                    />
                  </Form.Group>
                </div>
                <div className="mx-4 my-2">
                  <Form.Group controlId="formUsername">
                    <Form.Control
                      className={inputStatus.username ? 'looks-good' : ''}
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        handleInputChange(e, 'username');
                      }}
                    />
                  </Form.Group>
                </div>
              </>
            )}
            <div className="mx-4 my-2">
              <Form.Group controlId="formEmail">
                <Form.Control
                  className={inputStatus.email ? 'looks-good' : ''}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleInputChange(e, 'email');
                  }}
                />
              </Form.Group>
            </div>
            <div className="mx-4 my-2">
              <Form.Group controlId="formPassword">
                <Form.Control
                  className={inputStatus.password ? 'looks-good' : ''}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleInputChange(e, 'password');
                  }}
                />
              </Form.Group>
            </div>
          </Form>
          {error && <p className="mx-4 fw-bold text-danger">{error}</p>}
        </Modal.Body>
        <Modal.Footer>
          {step === 'signup' ? (
            <Button
              variant="success"
              className="button-bg border-0 px-5"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          ) : (
            <>
              <div className="mx-5 pt-5">
                <span className="">Don't have an account? </span>
                <Button
                  variant="success"
                  className="btn text-decorationn border-0 text-black"
                  onClick={handleToggle}
                >
                  Sign Up Now
                </Button>
              </div>
              <div className="mt-0">
                <Button
                  variant="success"
                  className="px-4"
                  onClick={handleSignIn}
                >
                  Log In
                </Button>
              </div>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AuthModal;







// import cart1 from '../../images/assets/cat-1.jpg';
// import cart2 from '../../images/assets/cat-2.jpg';
// import cart3 from '../../images/assets/cat-3.jpg';
// import cart4 from '../../images/assets/cat-4.jpg';
// import cart5 from '../../images/assets/cat-5.jpg';
