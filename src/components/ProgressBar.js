import { useMemo } from "react";
import "./ProgressBar.css";

const ProgressBar = ({
  filledProgress,
  filledProgress1,
  filledProgress2,
  propColor,
  propColor1,
  propColor2,
}) => {
  const reviewStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const ticketingStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const bannerStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <section className="progress" id="SCR0002">
      <div className="edit">
        <img
          className="filled-progress-icon"
          alt=""
          src="/filled-progress.svg"
        />
        <div className="edit1">Edit</div>
      </div>
      <div className="review">
        <img className="filled-progress-icon1" alt="" src={filledProgress} />
        <div className="review1" style={reviewStyle}>
          Review
        </div>
      </div>
      <div className="ticketing">
        <img className="filled-progress-icon1" alt="" src={filledProgress1} />
        <div className="ticketing1" style={ticketingStyle}>
          Ticketing
        </div>
      </div>
      <div className="banner2">
        <img className="filled-progress-icon1" alt="" src={filledProgress2} />
        <div className="banner3" style={bannerStyle}>
          Banner
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
