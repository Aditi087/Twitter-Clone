import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTwitter } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import "./auth.css";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import AppleLogin from 'react-apple-login'

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  const responseGoogle = (response:any) => {
    console.log(response);
  };

  return (
    <div className="auth_body">
      <Row className="g-0 row">
        <Col className="auth_part1">
          <FaTwitter id="auth_icon_big" />
        </Col>
        <Col className="auth_part2">
          <FaTwitter id="auth_icon_small" />
          <span className="heading1">Happening now</span>
          <span className="heading3">Join Twitter today.</span>
          <button className="signup_btn">
            <FcGoogle className="me-1" />
            <GoogleLogin
            clientId="754454815100-scfu0omot514a1g64javh9pruvcgpkg2.apps.googleusercontent.com"
            render={renderProps => (
              <button className="g-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign up with Google</button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
            
          </button>
          
          <button className="signup_btn">
            <GrApple className="me-1 mb-1" />
            {/* <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" /> */}
            <b>Sign up with Apple</b>
          </button>
          <div
            className="d-flex justify-content-between"
            style={{ height: "25px", width: "20vw", display:"flex", justifyContent:"space-between" }}
          >
            <div className="line"></div>
            <p>or</p>
            <div className="line"></div>
          </div>
          <button className="signup_btn sign_phone">
            Sign up with a phone number or em..
          </button>
          <span className="small_font terms">
            By signing up, you agree to the <Link to="">Terms of Service</Link>{" "}
            and <Link to="">Privacy Policy</Link>, including{" "}
            <Link to="">Cookie Use.</Link>
          </span>
          <span className="heading6 mb-2">Already have an account?</span>
          <button className="signup_btn" style={{ color: "#1D9BF0" }}>
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
