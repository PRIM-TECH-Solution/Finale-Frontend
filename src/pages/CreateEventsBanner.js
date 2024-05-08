import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import HeaderA from "../components/HeaderA";
import "./CreateEventsBanner.css";

const CreateEventsBanner = () => {
  const navigate = useNavigate();
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

  const onBackButtonClick = useCallback(() => {
    navigate("/create-events-new");
  }, [navigate]);

  const onSaveButtonClick = useCallback(() => {
    navigate("/create-events-ticketing");
  }, [navigate]);

  return (
    <div className="create-events-banner" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="1020px"
      />
      <div className="buttons2">
        <Button
          className="back-button2"
          disableElevation={true}
          color="primary"
          variant="text"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 136, height: 54 }}
          onClick={onBackButtonClick}
        >
          Back
        </Button>
        <Button
          className="save-button2"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 270, height: 54 }}
          onClick={onSaveButtonClick}
        >
          Save and Continue
        </Button>
      </div>
      <section className="banner1" id="SCB0004">
        <div className="feature-image-must-container">
          <p className="feature-image-must">
            Feature Image must be at 1680 pixels wide by 567 pixels high.
          </p>
          <p className="feature-image-must">
            Valid file formats: JPG, GIF, PNG.
          </p>
        </div>
        <input className="banner-item" required={true} type="file" />
        <div className="upload-event-banner">Upload Event Banner Here</div>
        <div className="event-banner">Event Banner</div>
      </section>
      <section className="flyer" id="SCB0003">
        <div className="feature-image-must-container1">
          <p className="feature-image-must">
            Feature Image must be 384 pixels wide by 480 pixels high.
          </p>
          <p className="feature-image-must">
            Valid file formats: JPG, GIF, PNG.
          </p>
        </div>
        <input className="banner-item" required={true} type="file" />
        <div className="upload-event-banner">Upload Event Flyer Here</div>
        <div className="event-banner">Event Flyer</div>
      </section>
      <ProgressBar
        filledProgress="/filled-progress2.svg"
        filledProgress1="/filled-progress2.svg"
        filledProgress2="/filled-progress1.svg"
        propColor="rgba(30, 30, 30, 0.5)"
        propColor1="rgba(30, 30, 30, 0.5)"
        propColor2="rgba(30, 30, 30, 0.5)"
      />
      <section className="topic-24" id="SCB0001">
        <div className="create-event3">Create Event</div>
        <img className="topic-2-child2" alt="" src="/rectangle-5073.svg" />
      </section>
      <HeaderA propTop="0px" propLeft="0px" />
    </div>
  );
};

export default CreateEventsBanner;
