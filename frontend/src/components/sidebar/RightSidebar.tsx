import * as React from "react";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { Link } from "react-router-dom";
import Search from "./Search";
import "../auth/auth.css";

interface IRightSidebarProps {}

const RightSidebar: React.FunctionComponent<IRightSidebarProps> = (props) => {
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  return (
    <div className="rsidebar_body">
      <div className="rsidebar_body2">
        <div className="rsidebar_component">
          <span className="heading4">New to Twitter?</span>
          <span className="small_font">
            Sign up now to get your own personalized timeline!
          </span>
          <button className="signup_btn">
            <FcGoogle className="me-1" />
            <GoogleLogin
              clientId="754454815100-scfu0omot514a1g64javh9pruvcgpkg2.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="g-btn"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign up with Google
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </button>

          <button className="signup_btn">
            <GrApple className="me-1 mb-1" />
            {/* <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" /> */}
            <b>Sign up with Apple</b>
          </button>
          <button className="signup_btn home_sign_up">
            Sign up with a phone number or em..
          </button>
          <span className="small_font terms2">
            By signing up, you agree to the <Link to="">Terms of Service</Link>{" "}
            and <Link to="">Privacy Policy</Link>, including{" "}
            <Link to="">Cookie Use.</Link>
          </span>
        </div>
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
