// src/PaymentDetails.js

import React from "react";
import "./Section.css";
import creditCardImg from "../images/Credit-Card.jpg";

const Section = () => {
  return (
    
    <div className="payment-container">
      <div className="card-image">
        <img src={creditCardImg} alt="Credit Card" />
      </div>
      <div className="payment-details">
        <h2>Your Payment details</h2>
        <form>
          <div className="form-group">
            <label>Amout</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Payment Status</label>
            <input value="Created" />
          </div>

          <button id="rzp-button1">Pay</button>
        </form>
      </div>
    </div>
    
  );
};

export default Section;
