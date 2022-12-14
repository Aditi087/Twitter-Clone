import React, { useEffect, useState } from 'react';
import Home from '../feed/home/Home';
import LeftSidebar from '../sidebar/LeftSidebar';
import RightSidebar from '../sidebar/RightSidebar';
import './layout.css';
import '../footer/footer.css';
import '../auth/auth.css';
import { Modal } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { GrApple } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Footer1 from '../footer/Footer1';

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  const validateEmail = RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const validPhone = RegExp(/^[6-9]{1}[0-9]{9}$/);
  const validPassword = RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleShow2 = () => {
    setShow2(true);
  };
  const handleShow3 = () => {
    setShow3(true);
  };

  const [dateSelect, setDateSelect] = useState(0);
  const [monthSelect, setMonthSelect] = useState(1);
  const [yearSelect, setYearSelect] = useState(0);
  const [dob, setDob] = useState(0);
  var newDate = new Date(yearSelect, monthSelect - 1, dateSelect);
  useEffect(() => {
    setDob(newDate.getTime());
  }, [monthSelect, dateSelect, yearSelect]);

  const [inputState, setInputState] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [phoneoremail, setPhoneoremail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState({});
  const [loginError, setLoginError] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem('GloginToken') !== null ||
      localStorage.getItem('token') !== null
    ) {
      setIsLoggedIn(true);
    }
  });

  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse: any) => {
      console.log(tokenResponse);
      localStorage.setItem('GloginToken', tokenResponse.access_token);
      setIsLoggedIn(tokenResponse.access_token);
      if (localStorage.getItem('GloginToken') !== null) {
        navigate('/');
      }
    },
  });

  const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  function getDaysInMonth(year: any, month: any) {
    return new Date(year, month, 0).getDate();
  }
  const date: any = [];
  const days = getDaysInMonth(yearSelect, monthSelect);
  // console.log(days);
  for (let i = 1; i <= days; i++) {
    date.push(i);
  }

  const currentYear = new Date().getFullYear();
  const range = (start: number, stop: number, step: number) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const year = range(currentYear, currentYear - 60, -1);
  // console.log(year, 'iii');

  const dateChange = (e: any) => {
    setDateSelect(parseInt(e?.target.value));
  };
  const monthChange = (e: any) => {
    setMonthSelect(e.target.value);
  };
  const yearChange = (e: any) => {
    setYearSelect(e.target.value);
  };
  // console.log(monthSelect, yearSelect, 'ooo');

  let name, value;
  const handleChange = (event: any) => {
    event.persist();
    name = event.target.name;
    value = event.target.value;
    setInputState({ ...inputState, [name]: value });
  };

  // const validation = () => {
  //   let error = {};
  //   if (!inputState.name) {
  //     error.name = 'Username is required';
  //   } else if (inputState.name.length < 3) {
  //     error.name = 'At least 3 characters';
  //   } else if (/\d/.test(inputState.name)) {
  //     error.name = 'Please enter a valid Username';
  //   }
  //   if (!inputState.email) {
  //     error.email = 'Email is required';
  //   } else if (!validateEmail.test(inputState.email)) {
  //     error.email = 'Invalid Email';
  //   }
  //   if (!inputState.phone) {
  //     error.phone = 'Phone is required';
  //     //  } else if (!validateEmail.test(inputState.phone)) {
  //     //    error.phone = 'Invalid Phone';
  //   }
  //   if (!inputState.password) {
  //     error.password = 'Enter password';
  //   }

  //   return error;
  // };

  const [signupCred, setSignupCred] = useState('p');

  const signupToggle = () => {
    if (signupCred === 'p') {
      setSignupCred('e');
    } else {
      setSignupCred('p');
    }
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    // let ErrorList = validation();
    // setError(validation());
    // if (Object.keys(ErrorList).length !== 0) {
    // } else {
    let data;
    data = {
      name: inputState.name,
      email: inputState.email,
      phone: inputState.phone,
      password: inputState.password,
      dateOfBirth: dob,
    };
    await axios
      .post('http://localhost:5000/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        // swal('Good job!', 'Your Registration is successful', 'success');
        alert('Good job! Your Registration is successful success');
        setInputState({
          name: '',
          email: '',
          phone: '',
          password: '',
        });
        setDob(0);
        // navigate('/login');
      })
      .catch((err) => {
        // toast(err.response.data.message);
      });
    // }
  };

  const loginChange = (event: any) => {
    event.persist();
    setPhoneoremail(event.target.value);
  };
  const passwordChange = (event: any) => {
    event.persist();
    setPassword(event.target.value);
  };

  // const LoginNext = (event: any) => {
  const LoginSubmit = async (event: any) => {
    event.preventDefault();
    let data;
    if (validateEmail.test(phoneoremail)) {
      data = {
        email: phoneoremail,
        phone: '',
        password: password,
      };
    } else if (validPhone.test(phoneoremail)) {
      data = {
        email: '',
        phone: phoneoremail,
        password: password,
      };
    }

    await axios
      .post('http://localhost:5000/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        // swal('Good job!', 'Your Registration is successful', 'success');
        alert('Good job! Your login is successful');
        console.log(res);
        localStorage.setItem('token', res?.data?.token);
        localStorage.setItem('name', res?.data?.user?.name);
        localStorage.setItem('userId', res?.data?.user?.userID);
        navigate('/');
        setShow3(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    // }
  };

  return (
    <>
      <div className="layout_body">
        <LeftSidebar />
        <div className="feed">
          <Home />
        </div>
        <RightSidebar />
      </div>
      {/* <Footer1 /> */}
      {isLoggedIn === false && (
        <div id="footer1_body">
          <div className="footer1_body2">
            <div className="footer_part1">
              <div className="footer_content1">
                <span className="footer_heading">
                  Don???t miss what???s happening
                </span>
                <span>People on Twitter are the first to know.</span>
              </div>
            </div>
            <div className="footer_part2">
              <button className="footer_btn login_footer" onClick={handleShow3}>
                Log in
              </button>
              <button className="footer_btn signin_footer" onClick={handleShow}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- login modal ---  */}

      <Modal show={show3} backdrop="static" className="modal">
        <Modal.Header>
          <Modal.Title className="modal_header">
            <IoMdClose onClick={handleClose3} />
            <FaTwitter className="modal_icon" />
            <div></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
          <div className="modal_body_content">
            <span className="heading4">Sign in to Twitter</span>
            <button className="signup_btn" onClick={() => login()}>
              <FcGoogle className="me-1" />
              Sign in with Google
            </button>

            <button className="signup_btn">
              <GrApple className="me-1 mb-1" />
              <b>Sign up with Apple</b>
            </button>
            <div
              className="d-flex justify-content-between"
              style={{
                height: '25px',
                width: '20vw',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div className="line"></div>
              <p>or</p>
              <div className="line"></div>
            </div>
            <div className="modal_input">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Phone or Email"
                  name="email"
                  value={phoneoremail}
                  variant="standard"
                  onChange={loginChange}
                />
              </Box>
            </div>
            <div className="modal_input">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Password"
                  name="password"
                  value={password}
                  variant="standard"
                  onChange={passwordChange}
                />
              </Box>
            </div>
            <button className="signup_btn sign_phone2" onClick={LoginSubmit}>
              Submit
            </button>
            <span className="heading6 mb-2 terms">
              Don???t have an account?{' '}
              <Link
                to="#"
                onClick={() => {
                  handleShow();
                  handleClose3();
                }}
              >
                Sign up
              </Link>
            </span>
          </div>
        </Modal.Body>
      </Modal>

      {/* --- login modal end ---  */}

      {/* --- signup modal ---  */}

      <Modal show={show} backdrop="static" className="modal">
        <Modal.Header>
          <Modal.Title className="modal_header">
            <IoMdClose onClick={handleClose} />
            <FaTwitter className="modal_icon" />
            <div></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
          <div className="modal_body_content">
            <span className="heading4">Join Twitter today</span>
            <button className="signup_btn" onClick={() => login()}>
              <FcGoogle className="me-1" />
              Sign in with Google
            </button>

            <button className="signup_btn">
              <GrApple className="me-1 mb-1" />
              <b>Sign up with Apple</b>
            </button>
            <div
              className="d-flex justify-content-between"
              style={{
                height: '25px',
                width: '20vw',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div className="line"></div>
              <p>or</p>
              <div className="line"></div>
            </div>
            <button
              className="signup_btn sign_phone2"
              onClick={() => {
                handleClose();
                handleShow2();
              }}
            >
              Sign up with a phone number or em..
            </button>
            <span className="small_font terms">
              By signing up, you agree to the{' '}
              <Link to="">Terms of Service</Link> and{' '}
              <Link to="">Privacy Policy</Link>, including{' '}
              <Link to="">Cookie Use.</Link>
            </span>
            <span className="heading6 mb-2 terms">
              Have an account already?{' '}
              <Link
                to="#"
                onClick={() => {
                  handleShow3();
                  handleClose();
                }}
              >
                Log in
              </Link>
            </span>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={show2} backdrop="static" className="modal">
        <Modal.Header>
          <Modal.Title>
            <IoMdClose onClick={handleClose2} />
            <div></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
          <div className="modal_body_content">
            <span className="heading3 mb-3">Create your account</span>
            <div className="modal_input">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Name"
                  name="name"
                  value={inputState.name}
                  variant="standard"
                  onChange={handleChange}
                />
              </Box>
            </div>
            <div className="modal_input">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                {signupCred === 'p' ? (
                  <TextField
                    id="standard-basic"
                    label="Phone"
                    name="phone"
                    value={inputState.phone}
                    variant="standard"
                    onChange={handleChange}
                  />
                ) : (
                  <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    value={inputState.email}
                    variant="standard"
                    onChange={handleChange}
                  />
                )}
              </Box>
            </div>
            {signupCred === 'p' ? (
              <p onClick={signupToggle} className="phone_or_email">
                use email instead
              </p>
            ) : (
              <p onClick={signupToggle} className="phone_or_email">
                use phone instead
              </p>
            )}

            <div
              className="d-flex flex-column m-3"
              style={{ textAlign: 'left' }}
            >
              <span>
                <b>Date of birth</b>
              </span>
              <span>
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </span>
            </div>
            <div className="mx-3 d-flex">
              <Form.Select
                aria-label="Default select example"
                className="me-2 p-3"
                onChange={yearChange}
              >
                <option>Year</option>
                {year.map((y, index) => (
                  <option value={y} key={index}>
                    {y}
                  </option>
                ))}
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                className="mx-2 p-3"
                onChange={monthChange}
              >
                <option>Month</option>
                {Months.map((m, index) => (
                  <option value={index + 1} key={index}>
                    {m}
                  </option>
                ))}
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                className="ml-2 p-3"
                onChange={dateChange}
              >
                <option>Day</option>
                {date.map((d: number, index: number) => (
                  <option value={d} key={index}>
                    {d}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className="modal_input">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Password"
                  name="password"
                  value={inputState.password}
                  variant="standard"
                  onChange={handleChange}
                />
              </Box>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={submitHandler} className="signup_btn sign_phone2">
            Confirm
          </button>
        </Modal.Footer>
      </Modal>

      {/* --- signup modal end ---  */}
    </>
  );
};

export default Layout;
