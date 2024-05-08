import { useCallback, useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import HeaderA from "../components/HeaderA";
import "./AdminView.css";

const AdminView = () => {
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

  const onCard2ContainerClick = useCallback(() => {
    navigate("/create-events-new");
  }, [navigate]);

  return (
    <div className="admin-view" data-animate-on-scroll>
      <Footer
        communicationCall="/communication--call@2x.png"
        details1Top="687px"
      />
      <section className="carrds" id="S0002">
        <div className="card-1">
          <div className="admin-dashboard">
            <span className="admin-dashboard-txt-container">
              <p className="admin">Admin</p>
              <p className="admin">Dashboard</p>
            </span>
          </div>
          <img
            className="admin-panel-settings-icon"
            alt=""
            src="/admin-panel-settings.svg"
          />
        </div>
        <div className="card-3">
          <div className="users-list">Users List</div>
          <img
            className="admin-panel-settings-icon"
            alt=""
            src="/supervised-user-circle.svg"
          />
        </div>
        <div className="card-4">
          <div className="event-list">Event List</div>
          <img
            className="admin-panel-settings-icon"
            alt=""
            src="/event-note.svg"
          />
        </div>
        <div className="card-2" onClick={onCard2ContainerClick}>
          <div className="services">Services</div>
          <img
            className="admin-panel-settings-icon"
            alt=""
            src="/miscellaneous-services.svg"
          />
        </div>
      </section>
      <section className="frame" id="S0001">
        <div className="topic-19">
          <img className="topic-1-child6" alt="" src="/rectangle-5074.svg" />
          <div className="admin-view1">Admin View</div>
        </div>
      </section>
      <HeaderA propTop="calc(50% - 540px)" propLeft="calc(50% - 960px)" />
    </div>
  );
};

export default AdminView;
