import { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import HeaderU from "../components/HeaderU";
import EventCard from '../components/EventCard'
import "./HomePage.css";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/eventcards/getAll");
      setEvents(response.data);
      console.log("Fetched events:", response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();

    const scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
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
      { threshold: 0.15 }
    );

    scrollAnimElements.forEach(element => observer.observe(element));

    return () => {
      scrollAnimElements.forEach(element => observer.unobserve(element));
    };
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    console.log("Events state updated:", events);
  }, [events]);

  const onSeeMoreButtonClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
//   <div>
// <section >
//         {events.length > 0 ? (
//           events.map(event => (
//             // 
//             <EventCard key={event.id} event={event} />
//           ))
//         ) : (
//           <p>No events available</p>
//         )}
//       </section>
//   </div>
    <div className="home-page" data-animate-on-scroll>
      <Footer communicationCall="/communication--call@2x.png" />
      <section className="smart-tickets-smarter-experie-parent">
        <div className="smart-tickets-smarter-container" data-animate-on-scroll>
          <p className="smart-tickets">
            <span className="smart">{`Smart `}</span>
            <span>Tickets</span>
            <span className="smart">{`, `}</span>
          </p>
          <p className="smarter-experiences">
            <span className="smarter">Smarter</span>
            <span> Experiences</span>
          </p>
          <p className="smarter-experiences">{`Scan Your Way to `}</p>
          <p className="unforgettable-moments">
            <span>Unforgettable</span>
            <span className="smart"> Moments!</span>
          </p>
        </div>
        <img className="frame-child" alt="" src="/rectangle-1422@2x.jpg" data-animate-on-scroll />
      </section>
      <Button
        className="see-more-button"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 240, height: 53 }}
        onClick={onSeeMoreButtonClick}
      >
        See More
      </Button>

      

      <section className="topic-1">
        <img className="topic-1-child" alt="" src="/rectangle-507.svg" />
        <div className="latest-events">
          <span className="latest-events-txt-container">
            <span className="latest">Latest</span>
            <span className="events"> Events</span>
          </span>
        </div>
        
      </section>
      <main className="banner">
        <img className="banner-child" loading="eager" alt="" src="/Banner@2x.jpg" />
        <img className="banner-child" alt="" src="/shadow@2x.png" />
        <div className="click-book-container" data-animate-on-scroll>
          <p className="smarter-experiences">
            <span className="events">
              <span>Click</span>
            </span>
          </p>
          <p className="smarter-experiences">
            <span className="events">
              <span className="smarter">Book</span>
              <span>{` & Enjoy`}</span>
            </span>
          </p>
          <p className="smarter-experiences">
            <span className="events">
              <span>{`With `}</span>
            </span>
          </p>
          <p className="smarter-experiences">
            <span className="events">
              <span>Easy</span>
            </span>
            <b className="ticket">Ticket</b>
            <span className="lk">.LK</span>
          </p>
        </div>
      </main>
      <section className="search-bar">
        <div className="search-bar-child" />
        <div className="search-bar-inner">
          <div className="search-wrapper">
            <div className="search">Search</div>
          </div>
        </div>
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="iconsmap-pin-parent">
            <img className="iconsmap-pin" alt="" src="/iconsmappin.svg" />
            <div className="zip-code-or">{`Zip code or State `}</div>
          </div>
        </div>
        <div className="rectangle-group">
          <div className="group-child" />
          <div className="date-parent">
            <div className="date">Date</div>
            <img className="iconscalendar" alt="" src="/iconscalendar.svg" />
          </div>
        </div>
        <div className="rectangle-container">
          <div className="group-child" />
          <div className="search-by-event-artist-venue-parent">
            <div className="search-by-event">{`Search by Event,  Artist, Venue... `}</div>
            <img className="iconssearch" alt="" src="/iconssearch.svg" />
          </div>
        </div>
      </section>

      <div className="eve">
        <section >
                  {events.length > 0 ? (
          events.map(event => (
            // 
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p>No events available</p>
        )}
      </section>
        </div>
      <HeaderU
        header2Position="absolute"
        header2Top="0px"
        header2Left="0px"
        homeWidth="unset"
        homeDisplay="unset"
        homeHeight="unset"
        homeFlex="1"
        eventsWidth="unset"
        eventsDisplay="unset"
        eventsHeight="unset"
        eventsFlex="1"
        aboutUsWidth="unset"
        aboutUsDisplay="unset"
        aboutUsHeight="unset"
        aboutUsFlex="1"
        groupDivWidth="unset"
        groupDivFlex="1"
        onEventsTextClick={onEventsTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onGroupContainerClick={onGroupContainerClick}
      />
    </div>
  );
};

export default HomePage;
