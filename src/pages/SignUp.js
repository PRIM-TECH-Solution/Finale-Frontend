import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderU from "../components/HeaderU";
import "./SignUp.css";

export default function AddUser () {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    nic: "",
    mobileNo: "",
  });

  const { name,email,password,nic,mobileNo } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/auth/addUser", user);
    navigate("/log-in");
  };

  const [showPassword, setShowPassword] = useState(false);
  
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onLogInInsteadClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onSocialMediaSignuploginClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  return (
    <div className="sign-up" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="1421px"
      />
      <section className="create-an-account1">
        <div className="frame-parent1">
          <div className="create-an-account-parent">
            <div className="create-an-account2">Create an account</div>
            <div className="log-in-instead" onClick={onLogInInsteadClick}>
              log in instead
            </div>
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
          <div className="password">
            <div className="label-parent3">
              <div className="label5">First name</div>
              
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
            
          </div>
          {/* <div className="password">
            <div className="label-parent3">
              <div className="label5">Last name</div>
              
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message5">Error message</div>
          </div> */}
          <div className="password">
            <div className="label-parent3">
              <div className="label5">Email</div>
              
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              type="email"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
            />
           
          </div>
          <div className="password">
            <div className="label-parent3">
              <div className="label5">Mobile Number</div>
              
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              type="tel"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              placeholder="Enter mobile No"
                name="mobileNo"
                value={mobileNo}
                onChange={(e) => onInputChange(e)}
            />
            
          </div>
          <div className="password">
            <div className="label-parent3">
              <div className="label5">NIC | Passport Number</div>
              
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              placeholder="Enter NIc or Passport Number"
                name="nic"
                value={nic}
                onChange={(e) => onInputChange(e)}
            />
            
          </div>
          <div className="password">
            <div className="label-parent3">
              <div className="label5">Password</div>
              
            </div>
            <TextField
              className="text-field15"
              color="primary"
              size="medium"
              required={true}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPasswordClick}
                      aria-label="toggle password visibility"
                    >
                      <Icon>
                        {showPassword ? "visibility_off" : "visibility"}
                      </Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <div className="error-message5">Error message</div>
          </div>
          <div className="check-box">
            <FormControlLabel
              className="check-box1"
              label=""
              control={<Checkbox id="large" color="primary" required />}
            />
            <div className="i-want-to-container">
              <p className="by-creating-an-account-i-agre">
                <span>{`By creating an account, I agree to our `}</span>
                <span className="terms-of-use">Terms of use</span>
                <span className="span1">{` `}</span>
              </p>
              <p className="and-privacy-policy">
                <span className="and">and</span>
                <span className="span1">{` `}</span>
                <span className="privacy-policy">
                  <span>Privacy Policy</span>
                  <span className="span1">{` `}</span>
                </span>
              </p>
            </div>
          </div>
          <Button
            className="button5"
            disableElevation={true}
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 534, height: 64 }}
          >
            Create an account
          </Button>
          </form>
          <div className="divider">
            <div className="divider1" />
            <div className="i-want-to-container">OR</div>
            <div className="divider1" />
          </div>
          <div
            className="social-media-signuplogin"
            onClick={onSocialMediaSignuploginClick}
          >
            <div className="social-media-logo-parent">
              <img
                className="social-media-logo"
                alt=""
                src="/social-media-logo.svg"
              />
              <div className="i-want-to-container">Continue with Google</div>
            </div>
          </div>
        </div>
      </section>
      <img className="sign-up-child" alt="" src="/rectangle-1423@2x.png" />
      <div className="divider3" />
      <div className="easyticketlk3">
        <div className="easyticketlk4">
          <span className="easyticketlk-txt1">
            <span>Sign Up For Easy</span>
            <b>Ticket</b>
            <span>.LK</span>
          </span>
        </div>
      </div>
      <HeaderU
        header2Position="absolute"
        header2Top="0px"
        header2Left="0px"
        homeWidth="96px"
        homeDisplay="flex"
        homeHeight="32px"
        homeFlex="unset"
        eventsWidth="96px"
        eventsDisplay="flex"
        eventsHeight="32px"
        eventsFlex="unset"
        aboutUsWidth="96px"
        aboutUsDisplay="flex"
        aboutUsHeight="32px"
        aboutUsFlex="unset"
        groupDivWidth="96px"
        groupDivFlex="unset"
        onHomeTextClick={onHomeTextClick}
        onEventsTextClick={onEventsTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onGroupContainerClick={onGroupContainerClick}
      />
    </div>
  );
}


