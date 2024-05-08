import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import "./DetailsMainCardTcategory.css";

const DetailsMainCardTcategory = () => {
  const navigate = useNavigate();

  const onEventCard1ContainerClick = useCallback(() => {
    navigate("/view-event");
  }, [navigate]);

  const onSeeMoreButtonClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <section className="details-main-card3">
      <div className="details-main-card-child2" />
      <div className="see-more-button3" onClick={onSeeMoreButtonClick}>
        <div className="check-out">Check Out</div>
      </div>
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
      <div className="event-details7">
        <b className="natamu-neda3">Natamu Neda</b>
      </div>
      <div className="details-main-card-child3" />
    </section>
  );
};

export default DetailsMainCardTcategory;
