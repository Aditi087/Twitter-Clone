import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTwitter } from 'react-icons/fa';
import { GrApple } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';
import './auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse: any) => {
      console.log(tokenResponse);
      console.log(tokenResponse.access_token);
      localStorage.setItem('GloginToken', tokenResponse.access_token);
      if (localStorage.getItem('GloginToken') !== null) {
        navigate('/');
      }
    },
  });

  return (
    <div className="auth_body">
      <Row className="g-0">
        <Col className="auth_part1">
          <FaTwitter id="auth_icon_big" />
        </Col>
        <Col className="auth_part2">
          <FaTwitter id="auth_icon_small" />
          <span className="heading1">Happening now</span>
          <span className="heading3 mb-5">Join Twitter today.</span>
          <button className="signup_btn" onClick={() => login()}>
            <FcGoogle className="me-1" />
            Sign in with Google
          </button>

          <button className="signup_btn">
            <GrApple className="me-1 mb-1" />
            {/* <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" /> */}
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
          <button className="signup_btn sign_phone">
            Sign up with a phone number or em..
          </button>
          <span className="small_font terms">
            By signing up, you agree to the <Link to="">Terms of Service</Link>{' '}
            and <Link to="">Privacy Policy</Link>, including{' '}
            <Link to="">Cookie Use.</Link>
          </span>
          <span className="heading6 mb-2">Already have an account?</span>
          <button className="signup_btn" style={{ color: '#1D9BF0' }}>
            <b>Sign in</b>
          </button>
        </Col>
      </Row>
      <div className="auth_footer">
        <div className="d-flex justify-content-center">
          <Link to="#">About</Link>
          <Link to="#">Help Centre</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Cookie Policy</Link>
          <Link to="#">Accessibility</Link>
          <Link to="#">Ads info</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Status</Link>
          <Link to="#">Careers</Link>
          <Link to="#">Brand Resources</Link>
          <Link to="#">Advertising</Link>
          <Link to="#">Marketing</Link>
          <Link to="#">Twitter for Business</Link>
          <Link to="#">Developers</Link>
          <Link to="#">Directory</Link>
          <Link to="#">Settings</Link>
        </div>
        <p className="d-flex justify-content-center">© 2022 Twitter, Inc.</p>
      </div>
    </div>
  );
};

export default Auth;
