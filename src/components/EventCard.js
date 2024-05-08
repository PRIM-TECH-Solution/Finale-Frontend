import { useMemo } from "react";
import "./EventCard.css";

const EventCard = ({
  rectangle508,
  pM,
  prop,
  galleSamanalaGround,
  dampataHendewa,
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
      <img className="event-card8-child" alt="" src={rectangle508} />
      <img className="event-card8-child" alt="" src="/rectangle-5081@2x.png" />
      <div className="time">
        <img className="access-time-icon1" alt="" src="/access-time.svg" />
        <div className="pm1">{pM}</div>
      </div>
      <div className="date3">
        <img className="access-time-icon1" alt="" src="/date-range.svg" />
        <div className="pm1">{prop}</div>
      </div>
      <div className="location1">
        <img className="fmd-good-icon1" alt="" src="/fmd-good.svg" />
        <div className="galle-samanala-ground">{galleSamanalaGround}</div>
      </div>
      <div className="dampata-hendewa">{dampataHendewa}</div>
    </div>
  );
};

export default EventCard;
