import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import "./DetailsMainCard.css";
import '@testing-library/jest-dom/extend-expect';

const DetailsMainCard = () => {
  const navigate = useNavigate();

  const onEventCard1ContainerClick = useCallback(() => {
    navigate("/view-event");
  }, [navigate]);

  const onSeeMoreButtonClick = useCallback(() => {
    navigate("/book-tickets-for-event");
  }, [navigate]);

  return (
    <main className="details-main-card1">
      <section className="details-main-card-item" />
      <Button
        className="see-more-button1"
        disableElevation={true}
        color="primary"
        size="large"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 193, height: 53 }}
        onClick={onSeeMoreButtonClick}
      >
        Buy Tickets
      </Button>
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
      <img className="access-time-icon2" alt="" src="/access-time1.svg" />
      <img className="date-range-icon2" alt="" src="/date-range1.svg" />
      <img className="fmd-good-icon2" alt="" src="/fmd-good1.svg" />
      <section className="event-details5">
        <div className="featuring-bns-container2">
          <span className="featuring-bns-container3">
            <p className="featuring-bns1">{`Featuring : BNS | Jaya sri | Wasthi | Kanchana | Chithral | Sarith & Surith | Music by NEWS | `}</p>
            <p className="featuring-bns1">{`Food & Beverage Available at the premises.`}</p>
          </span>
        </div>
        <div className="backstage-entertainment-events-container2">
          <span className="featuring-bns-container3">
            <p className="featuring-bns1">{`Backstage Entertainment Events `}</p>
            <p className="featuring-bns1">Proudly Presents "NATAMU NEDA"</p>
          </span>
        </div>
        <div className="time1">
          <div className="pm2">07:00 PM</div>
        </div>
        <div className="date4">
          <div className="div13">15.02.2023</div>
        </div>
        <div className="viharamahadevi-open-air1">
          Viharamahadevi Open Air Theatre
        </div>
        <b className="natamu-neda1">Natamu Neda</b>
        <div className="category-buttons1">
          <div className="music-container">
            <div className="music1">Music</div>
          </div>
          <div className="colombo-container">
            <div className="music1">Colombo</div>
          </div>
        </div>
      </section>
      <section className="ticket-price-details1">
        <div className="ticket-price-details-inner" />
        <b className="ticket-prices1">Ticket Prices</b>
        <div className="ticket-price-model-11">
          <div className="standing3">Standing</div>
          <div className="lkr11">1000.00 LKR</div>
        </div>
        <div className="ticket-price-model-21">
          <div className="standing3">Genaral</div>
          <div className="lkr12">2000.00 LKR</div>
        </div>
        <div className="ticket-price-model-31">
          <div className="standing3">VIP</div>
          <div className="lkr12">5000.00 LKR</div>
        </div>
        <div className="ticket-price-details-child1" />
        <div className="ticket-price-details-child2" />
      </section>
      <div className="details-main-card-inner" />
    </main>
  );
};

export default DetailsMainCard;
