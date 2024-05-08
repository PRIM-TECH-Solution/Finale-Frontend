import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import "./DetailsMainCardFinale.css";

const DetailsMainCardFinale = () => {
  const navigate = useNavigate();

  const onEventCard1ContainerClick = useCallback(() => {
    navigate("/view-event");
  }, [navigate]);

  return (
    <section className="details-main-card2">
      <Button
        className="see-more-button2"
        disableElevation={true}
        color="primary"
        size="large"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px" }}
      >
        Download Your Ticket
      </Button>
      <EventCard
        rectangle508="/rectangle-5088@2x.jpg"
        pM="07:00 PM"
        prop="02.12.2023"
        galleSamanalaGround="Viharamahadevi Open Air Theater"
        dampataHendewa="Natamu Neda"
        propLeft="0px"
        propTop="0px"
        onEventCard1ContainerClick={onEventCard1ContainerClick}
      />
      <section className="event-details6">
        <div className="no-of-tickets1">
          <img className="sell-icon" alt="" src="/sell.svg" />
          <div className="no-of-tickets2">No of Tickets :</div>
          <div className="div14">3</div>
          <strong className="t123456">T123456</strong>
          <div className="b123456">B123456</div>
          <div className="successful">Successful</div>
          <div className="lkr14">5000.00LKR</div>
        </div>
        <div className="ticket-id">
          <img className="sell-icon1" alt="" src="/sell.svg" />
          <div className="ticket-id1">Ticket ID :</div>
        </div>
        <div className="amount1">
          <img className="payments-icon" alt="" src="/payments.svg" />
          <div className="amount2">Amount :</div>
        </div>
        <div className="booking-id">
          <img
            className="label-important-icon"
            alt=""
            src="/label-important.svg"
          />
          <div className="booking-id1">Booking ID :</div>
        </div>
        <div className="booking-status">
          <img className="payments-icon" alt="" src="/bookmark-border.svg" />
          <div className="amount2">Booking Status :</div>
        </div>
        <div className="time2">
          <div className="pm3">07:00 PM</div>
          <img className="access-time-icon3" alt="" src="/access-time1.svg" />
        </div>
        <div className="date5">
          <div className="div15">15.02.2023</div>
          <img className="date-range-icon3" alt="" src="/date-range1.svg" />
        </div>
        <div className="location2">
          <img className="fmd-good-icon3" alt="" src="/fmd-good1.svg" />
          <div className="viharamahadevi-open-air2">
            Viharamahadevi Open Air Theatre
          </div>
        </div>
        <b className="natamu-neda2">Natamu Neda</b>
      </section>
      <section className="ticket-price-details2">
        <div className="ticket-price-details-child3" />
        <b className="tickets">Tickets</b>
        <div className="ticket-price-model-12">
          <div className="standing4">Standing</div>
          <div className="div16">1</div>
        </div>
        <div className="ticket-price-model-22">
          <div className="genaral4">Genaral</div>
          <div className="div17">2</div>
        </div>
        <div className="ticket-price-model-32">
          <div className="standing4">VIP</div>
          <div className="div17">0</div>
        </div>
        <div className="ticket-price-details-child4" />
        <div className="ticket-price-details-child5" />
      </section>
      <div className="details-main-card-child1" />
    </section>
  );
};

export default DetailsMainCardFinale;
