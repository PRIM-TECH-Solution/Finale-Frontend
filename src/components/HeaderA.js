import { useMemo } from "react";
import "./HeaderA.css";

const HeaderA = ({ propTop, propLeft }) => {
  const header1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <header className="header-11" style={header1Style}>
      <div className="logo2">
        <div className="easyticketlk10">
          <span className="easyticketlk-txt6">
            <span>Easy</span>
            <b>Ticket</b>
            <span>.LK</span>
          </span>
        </div>
      </div>
      <div className="header-topics2">
        <div className="home3">Home</div>
        <div className="home3">Events</div>
        <div className="home3">About Us</div>
        <div className="admin3">
          <div className="admin4">Admin</div>
          <img
            className="akar-iconsperson1"
            alt=""
            src="/akariconsperson.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderA;
