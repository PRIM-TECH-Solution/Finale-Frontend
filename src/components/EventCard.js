import { useMemo } from "react";
import "./EventCard.css";
import '@testing-library/jest-dom/extend-expect';


const EventCard = ({
  flyer,
  time1,
  date1,
  location1,
  etitle,
  propLeft,
  propTop,
  onEventCard1ContainerClick,
}) => {
  const eventCard8Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className="event-card8"
      style={eventCard8Style}
      onClick={onEventCard1ContainerClick}
    >
      <img className="event-card8-child" alt="Event Flyer" src={flyer} />

       <div className="time">
        <img className="access-time-icon1" alt="" src="/access-time.svg" />
        <div className="pm1">{time1}</div>
      </div>
      <div className="date3">
        <img className="access-time-icon1" alt="" src="/date-range.svg" />
        <div className="pm1">{date1}</div>
      </div>
      <div className="location1">
        <img className="fmd-good-icon1" alt="" src="/fmd-good.svg" />
        <div className="galle-samanala-ground">{location1}</div>
      </div>
      <div className="dampata-hendewa">{etitle}</div>
    </div>
  );
};

export default EventCard;
