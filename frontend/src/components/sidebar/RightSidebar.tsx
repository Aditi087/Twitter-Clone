import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import { GrApple } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import '../auth/auth.css';

interface IRightSidebarProps {}

const RightSidebar: React.FunctionComponent<IRightSidebarProps> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('GloginToken')
  );
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

  // console.log(isLoggedIn);

  return (
    <div className="rsidebar_body">
      <div className="rsidebar_body2">
        {isLoggedIn === null && (
          <div className="rsidebar_component">
            <span className="heading4">New to Twitter?</span>
            <span className="small_font">
              Sign up now to get your own personalized timeline!
            </span>
            <button className="signup_btn" onClick={() => login()}>
              <FcGoogle className="me-1" />
              Sign in with Google
            </button>
            <button className="signup_btn">
              <GrApple className="me-1 mb-1" />
              <b>Sign up with Apple</b>
            </button>
            <button className="signup_btn home_sign_up">
              Sign up with a phone number or
            </button>
            <span className="small_font terms2">
              By signing up, you agree to the{' '}
              <Link to="">Terms of Service</Link> and{' '}
              <Link to="">Privacy Policy</Link>, including{' '}
              <Link to="">Cookie Use.</Link>
            </span>
          </div>
        )}

        <div className="small_font">
          <div className="rsidebar_footer">
            <Link to="#">
              <span className="bb">Terms of Service</span>
            </Link>
            <Link to="#">
              <span className="bb">Privacy Policy</span>
            </Link>
            <Link to="#">
              <span className="bb">Cookie Policy</span>
            </Link>
            <Link to="#">
              <span className="bb">Accessibility</span>
            </Link>
            <Link to="#">
              <span className="bb">Ads info</span>
            </Link>
            <Link to="#">
              <span className="bb">More ...</span>
            </Link>
          </div>
          <span>© 2022 Twitter, Inc.</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
