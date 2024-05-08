import { useCallback, useEffect } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import HeaderA from "../components/HeaderA";
import "./CreateEventsTicketing.css";

const CreateEventsTicketing = () => {
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

  const onSaveButtonClick = useCallback(() => {
    navigate("/create-events-review");
  }, [navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/create-events-banner");
  }, [navigate]);

  return (
    <div className="create-events-ticketing" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="984px"
      />
      <div className="buttons1">
        <Button
          className="save-button1"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 270, height: 54 }}
          onClick={onSaveButtonClick}
        >
          Save and Continue
        </Button>
        <Button
          className="back-button1"
          disableElevation={true}
          color="primary"
          variant="text"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 136, height: 54 }}
          onClick={onBackButtonClick}
        >
          Back
        </Button>
      </div>
      <section className="ticket-details1" id="SCT0001">
        <section className="frame-section" id="SCT0004">
          <TextField
            className="frame-item"
            color="primary"
            size="medium"
            placeholder="5000"
            variant="outlined"
            type="number"
            sx={{ "& .MuiInputBase-root": { height: "67px" }, width: "576px" }}
          />
          <TextField
            className="frame-inner"
            color="primary"
            placeholder="Ticket name Eg: Standing,VIP,VVIP"
            required={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "67px" }, width: "576px" }}
          />
          <div className="ticket-name">Ticket Name</div>
          <div className="ticket-price-lkr">Ticket Price (LKR)</div>
          <div className="what-tickets-are">What tickets are you selling?</div>
        </section>
        <section className="event-tickets-wrapper" id="SCT0003">
          <div className="event-tickets">Event Tickets</div>
        </section>
      </section>
      <ProgressBar
        filledProgress="/filled-progress2.svg"
        filledProgress1="/filled-progress1.svg"
        filledProgress2="/filled-progress1.svg"
        propColor="rgba(30, 30, 30, 0.5)"
        propColor1="#1e1e1e"
        propColor2="#1e1e1e"
      />
      <section className="topic-23" id="SCT0001">
        <div className="create-event2">Create Event</div>
        <img className="topic-2-child1" alt="" src="/rectangle-5073.svg" />
      </section>
      <HeaderA propTop="0px" propLeft="0px" />
    </div>
  );
};

export default CreateEventsTicketing;
