import { useMemo } from "react";
import "./Stepper.css";

const Stepper = ({
  stepperPosition,
  stepperTop,
  stepperLeft,
  rectangleDivBackgroundColor,
  bGBackgroundColor,
  checkoutColor,
  bGBackgroundColor1,
  doneColor,
}) => {
  const stepperStyle = useMemo(() => {
    return {
      position: stepperPosition,
      top: stepperTop,
      left: stepperLeft,
    };
  }, [stepperPosition, stepperTop, stepperLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const bGStyle = useMemo(() => {
    return {
      backgroundColor: bGBackgroundColor,
    };
  }, [bGBackgroundColor]);

  const checkoutStyle = useMemo(() => {
    return {
      color: checkoutColor,
    };
  }, [checkoutColor]);

  const bG1Style = useMemo(() => {
    return {
      backgroundColor: bGBackgroundColor1,
    };
  }, [bGBackgroundColor1]);

  const doneStyle = useMemo(() => {
    return {
      color: doneColor,
    };
  }, [doneColor]);

  return (
    <div className="stepper" style={stepperStyle}>
      <div className="group-parent">
        <div className="bg-parent">
          <div className="bg" />
          <div className="div7">1</div>
        </div>
        <div className="buy-tickets3">Buy Tickets</div>
      </div>
      <div className="stepper-child" style={rectangleDivStyle} />
      <div className="group-container">
        <div className="bg-parent">
          <div className="bg1" style={bGStyle} />
          <div className="div7">2</div>
        </div>
        <div className="checkout" style={checkoutStyle}>
          Checkout
        </div>
      </div>
      <div className="stepper-child" />
      <div className="group-container">
        <div className="bg-parent">
          <div className="bg1" style={bG1Style} />
          <div className="div7">3</div>
        </div>
        <div className="checkout" style={doneStyle}>
          Done
        </div>
      </div>
    </div>
  );
};

export default Stepper;
