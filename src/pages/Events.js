import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import HeaderU from "../components/HeaderU";
import EventCard from "../components/EventCard";
import "./Events.css";

const Events = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

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
  return (
    <div className="events1" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="2992px"
      />
      <section className="topic-2">
        <div className="top-categories">
          <span className="top-categories-txt-container">
            <span className="top">Latest</span>
            <span className="categories"> Events</span>
          </span>
        </div>
        <img className="topic-2-child" alt="" src="/rectangle-5072.svg" />
      </section>
      <section className="categories-cards">
        <div className="card-parent">
          <CategoryCard rectangle1426="/rectangle-1426@2x.png" mUSIC="MUSIC" />
          <CategoryCard
            rectangle1426="/rectangle-1426@2x.png"
            mUSIC="SPORTS"
            propLeft="1152px"
          />
          <CategoryCard
            rectangle1426="/rectangle-1426@2x.png"
            mUSIC="EXHIBITION"
            propLeft="864px"
          />
          <CategoryCard
            rectangle1426="/rectangle-1426@2x.png"
            mUSIC="DRAMA"
            propLeft="576px"
          />
          <CategoryCard
            rectangle1426="/rectangle-1426@2x.png"
            mUSIC="CONCERTS"
            propLeft="288px"
          />
        </div>
      </section>
      <section className="topic-16">
        <div className="top-categories">
          <span className="top-categories-txt-container">
            <span className="top">Top</span>
            <span className="categories"> Categories</span>
          </span>
        </div>
        <img className="topic-2-child" alt="" src="/rectangle-5072.svg" />
      </section>
      <div className="banner-events">
        <img
          className="banner-events-child"
          alt=""
          src="/rectangle-14241@2x.jpg"
        />
        <img
          className="banner-events-item"
          alt=""
          src="/rectangle-1425@2x.png"
        />
      </div>
      <div className="search-bar1">
        <div className="search-bar-item" />
        <div className="group-div">
          <div className="search-container">
            <div className="search1">Search</div>
          </div>
        </div>
        <div className="rectangle-parent1">
          <div className="rectangle-div" />
          <div className="iconsmap-pin-group">
            <img className="iconsmap-pin1" alt="" src="/iconsmappin.svg" />
            <div className="zip-code-or1">{`Zip code or State `}</div>
          </div>
        </div>
        <div className="rectangle-parent2">
          <div className="rectangle-div" />
          <div className="date-group">
            <div className="date1">Date</div>
            <img className="iconscalendar1" alt="" src="/iconscalendar.svg" />
          </div>
        </div>
        <div className="rectangle-parent3">
          <div className="rectangle-div" />
          <div className="search-by-event-artist-venue-group">
            <div className="search-by-event1">{`Search by Event,  Artist, Venue... `}</div>
            <img className="iconssearch1" alt="" src="/iconssearch.svg" />
          </div>
        </div>
      </div>
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
        onAboutUsTextClick={onAboutUsTextClick}
        onGroupContainerClick={onGroupContainerClick}
      />
      <main className="event-cards1">
        <EventCard
          flyer="/rectangle-5089@2x.jpg"
          time1="08:20 PM"
          date1="15.12.2023"
          location1="Nuwaraeliya"
          etitle="Pub London"
          propLeft="1296px"
          propTop="1088px"
        />
        <EventCard
          flyer="/rectangle-50810@2x.jpg"
          time1="04:00 PM"
          date1="22.12.2023"
          location1="Dubai"
          etitle="NEWS Rush"
          propLeft="864px"
          propTop="1088px"
        />
        <EventCard
          flyer="/rectangle-50811@2x.jpg"
          time1="07:55 PM"
          date1="12.12.2023"
          location1="Akuressa Public Ground"
          etitle="Mathota Blast"
          propLeft="432px"
          propTop="1088px"
        />
        <EventCard
          flyer="/rectangle-50812@2x.jpg"
          time1="06:20 PM"
          date1="10.12.2023"
          location1="Lotus Tower"
          etitle="31st Night"
          propLeft="0px"
          propTop="1088px"
        />
        <EventCard
          flyer="/rectangle-508@2x.jpg"
          time1="07:20 PM"
          date1="09.12.2023"
          location1="Galle Samanala Ground"
          etitle="Dampata Hendewa"
          propLeft="1296px"
          propTop="540px"
        />
        <EventCard
          flyer="/rectangle-5082@2x.jpg"
          time1="07:40 PM"
          date1="08.12.2023"
          location1="University of Ruhuna"
          etitle="Phoenix"
          propLeft="864px"
          propTop="540px"
        />
        <EventCard
          flyer="/rectangle-5083@2x.jpg"
          time1="07:44 PM"
          date1="07.12.2023"
          location1="Maharagama"
          etitle="Kottu Beach Party"
          propLeft="432px"
          propTop="540px"
        />
        <EventCard
          flyer="/rectangle-5084@2x.jpg"
          time1="06:00 PM"
          date1="06.12.2023"
          location1="Cinnamon Lake Side"
          etitle="Ananthaya"
          propLeft="0px"
          propTop="540px"
        />
        <EventCard
          flyer="/rectangle-5085@2x.jpg"
          time1="08:30 PM"
          date1="05.12.2023"
          location1="Tangalle"
          etitle="Tango"
          propLeft="1296px"
          propTop="0px"
        />
        <EventCard
          flyer="/rectangle-5086@2x.jpg"
          time1="08:00 PM"
          date1="04.12.2023"
          location1="Viharamahadevi "
          etitle="Kolamba Sanniya"
          propLeft="864px"
          propTop="0px"
        />
        <EventCard
          flyer="/rectangle-5087@2x.jpg"
          time1="07:30 PM"
          date1="03.12.2023"
          location1="The Grand Mountain Hotel - Mathale"
          etitle="Lak Nada"
          propLeft="432px"
          propTop="0px"
        />
        <EventCard
          flyer="/rectangle-5088@2x.jpg"
          time1="07:00 PM"
          date1="02.12.2023"
          location1="Viharamahadevi Open Air Theater"
          etitle="Natamu Neda"
          propLeft="0px"
          propTop="0px"
          onEventCard1ContainerClick={onEventCard1ContainerClick}
        />
      </main>
    </div>
  );
};

export default Events;
