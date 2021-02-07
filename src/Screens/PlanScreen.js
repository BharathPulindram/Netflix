import React from "react";
import { useHistory } from "react-router-dom";
import "./PlanScreen.css";
function PlanScreen() {
  const history = useHistory();
  return (
    <div className="planScreen__plan">
      <div className="planScreen__info">
        <div className="planScreen__details">
          <h5>Premium</h5>
          <h6>4K + HDR </h6>
        </div>
        <button onClick={() => history.push("/stripe")}>Subscribe</button>
      </div>
      <div className="planScreen__info">
        <div className="planScreen__details">
          <h5>Basic ***</h5>
          <h6>480p</h6>
        </div>
        <button onClick={() => history.push("/stripe")}>Subscribe</button>
      </div>
      <div className="planScreen__info">
        <div className="planScreen__details">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button onClick={() => history.push("/stripe")}>Subscribe</button>
      </div>
    </div>
  );
}

export default PlanScreen;
