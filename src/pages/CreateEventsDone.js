import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import HeaderA from "../components/HeaderA";
import "./CreateEventsDone.css";

const CreateEventsDone = () => {
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

  const onMainPageButtonClick = useCallback(() => {
    navigate("/admin-view1");
  }, [navigate]);

  return (
    <div className="create-events-done" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="943px"
      />
      <Button
        className="main-page-button1"
        disableElevation={true}
        color="primary"
        name="Main Page"
        size="large"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 187, height: 53 }}
        onClick={onMainPageButtonClick}
      >
        Main Page
      </Button>
      <Button
        className="view-event-button1"
        disableElevation={true}
        color="primary"
        size="medium"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 187, height: 53 }}
      >
        View Event
      </Button>
      <div className="your-event-created">
        Your Event Created Successfully !
      </div>
      <img
        className="create-events-done-child"
        alt=""
        src="/rectangle-1439@2x.png"
      />
      <ProgressBar
        filledProgress="/filled-progress1.svg"
        filledProgress1="/filled-progress1.svg"
        filledProgress2="/filled-progress1.svg"
      />
      <section className="topic-21" id="SCR0001">
        <div className="create-event">Create Event</div>
        <img className="topic-2-item" alt="" src="/rectangle-5073.svg" />
      </section>
      <HeaderA />
    </div>
  );
};

export default CreateEventsDone;
