import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import ProgressBar from "../components/ProgressBar";
import HeaderA from "../components/HeaderA";
import "./CreateEventsReview.css";

const CreateEventsReview = () => {
  const navigate = useNavigate();

  const onEventCard1ContainerClick = useCallback(() => {
    navigate("/view-event");
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

  const onSaveButtonClick = useCallback(() => {
    navigate("/create-events-done");
  }, [navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/create-events-ticketing");
  }, [navigate]);

  return (
    <div className="create-events-review" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="2100px"
      />
      <div className="buttons">
        <Button
          className="save-button"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 270, height: 54 }}
          onClick={onSaveButtonClick}
        >
          Save and Continue
        </Button>
        <Button
          className="back-button"
          disableElevation={true}
          color="primary"
          variant="text"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 136, height: 54 }}
          onClick={onBackButtonClick}
        >
          Back
        </Button>
      </div>
      <main className="filled-details" id="MCR0001">
        <div className="details-main-card">
          <EventCard
            rectangle508="/rectangle-5088@2x.jpg"
            pM="07:00 PM"
            prop="02.12.2023"
            galleSamanalaGround="Viharamahadevi Open Air Theater"
            dampataHendewa="Natamu Neda"
            propLeft="48px"
            propTop="24px"
            onEventCard1ContainerClick={onEventCard1ContainerClick}
          />
          <img className="access-time-icon" alt="" src="/access-time1.svg" />
          <img className="date-range-icon" alt="" src="/date-range1.svg" />
          <img className="fmd-good-icon" alt="" src="/fmd-good1.svg" />
          <div className="event-details1">
            <div className="featuring-bns-container">
              <span className="featuring-bns-container1">
                <p className="featuring-bns">{`Featuring : BNS | Jaya sri | Wasthi | Kanchana | Chithral | Sarith & Surith | Music by NEWS | `}</p>
                <p className="featuring-bns">{`Food & Beverage Available at the premises.`}</p>
              </span>
            </div>
            <div className="backstage-entertainment-events-container">
              <span className="featuring-bns-container1">
                <p className="featuring-bns">{`Backstage Entertainment Events `}</p>
                <p className="featuring-bns">Proudly Presents "NATAMU NEDA"</p>
              </span>
            </div>
            <div className="pm">07:00 PM</div>
            <div className="div6">15.02.2023</div>
            <div className="viharamahadevi-open-air">
              Viharamahadevi Open Air Theatre
            </div>
            <b className="natamu-neda">Natamu Neda</b>
            <div className="category-buttons">
              <div className="music-wrapper">
                <div className="music">Music</div>
              </div>
              <div className="colombo-wrapper">
                <div className="music">Colombo</div>
              </div>
            </div>
          </div>
          <div className="ticket-price-details">
            <b className="ticket-prices">Ticket Prices</b>
            <div className="ticket-price-model-1">
              <div className="standing2">Standing</div>
              <div className="lkr8">1000.00 LKR</div>
            </div>
            <div className="ticket-price-model-2">
              <div className="standing2">Genaral</div>
              <div className="lkr9">2000.00 LKR</div>
            </div>
            <div className="ticket-price-model-3">
              <div className="standing2">VIP</div>
              <div className="lkr9">5000.00 LKR</div>
            </div>
            <div className="ticket-price-details-child" />
            <div className="ticket-price-details-item" />
          </div>
          <div className="details-main-card-child" />
        </div>
        <div className="topic-18">
          <div className="event-details2">Event Details</div>
          <img className="topic-1-child5" alt="" src="/rectangle-5071.svg" />
        </div>
        <img
          className="filled-details-child"
          alt=""
          src="/rectangle-1424@2x.png"
        />
      </main>
      <div className="almost-done">
        Almost Done ! Check everything is correct
      </div>
      <ProgressBar
        filledProgress="/filled-progress1.svg"
        filledProgress1="/filled-progress1.svg"
        filledProgress2="/filled-progress1.svg"
        propColor="#1e1e1e"
        propColor1="#1e1e1e"
        propColor2="#1e1e1e"
      />
      <section className="topic-22" id="SCR0001">
        <div className="create-event1">Create Event</div>
        <img className="topic-2-inner" alt="" src="/rectangle-5073.svg" />
      </section>
      <HeaderA propTop="0px" propLeft="0px" />
    </div>
  );
};

export default CreateEventsReview;
