import React from "react";
import { useHistory } from "react-router-dom";
import Nav from "../Components/Nav";
import "./ProfileScreen.css";
//import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
function Stripe() {
  const history = useHistory();

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <div className="profileScreen__info">
          <div className="profileScreen__details">
            <h2>Welcome to NETFLIX </h2>
            <div className="profileScreen__plans">
              <button
                onClick={() => history.push("/homescreen")}
                className="profileScreen__signOut"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stripe;
