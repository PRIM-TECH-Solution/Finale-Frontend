import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderU from "../components/HeaderU";
import Stepper from "../components/Stepper";
import "./OrderCompleted.css";

const OrderCompleted = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
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

  const onMainPageButtonClick = useCallback(() => {
    // Please sync "Admin View" to the project
  }, []);

  const onViewEventButtonClick = useCallback(() => {
    navigate("/download-ticket");
  }, [navigate]);

  return (
    <div className="order-completed" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="687px"
      />
      <Button
        className="main-page-button"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 187, height: 53 }}
        onClick={onMainPageButtonClick}
      >
        Main Page
      </Button>
      <Button
        className="view-event-button"
        disableElevation={true}
        color="primary"
        size="medium"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 187, height: 53 }}
        onClick={onViewEventButtonClick}
      >
        Get Ticket
      </Button>
      <div className="payment-successfull">Payment Successfull !</div>
      <img
        className="order-completed-child"
        alt=""
        src="/rectangle-1439@2x.png"
      />
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
      />
      <Stepper
        stepperPosition="absolute"
        stepperTop="216px"
        stepperLeft="653px"
        rectangleDivBackgroundColor="#1e1e1e"
        bGBackgroundColor="#1e1e1e"
        checkoutColor="#1e1e1e"
        bGBackgroundColor1="#1e1e1e"
        doneColor="#1e1e1e"
      />
      <section className="topic-17">
        <h1 className="buy-tickets2">Buy Tickets</h1>
        <img className="topic-1-child4" alt="" src="/rectangle-5071.svg" />
      </section>
    </div>
  );
};

export default OrderCompleted;
