// src/PaymentDetails.js

import React from 'react';
//import './PaymentDetails.css';

const Pay = () => {
  return (
    <div className="payment-container">
      <div className="card-image">
        <img src="path-to-your-card-image" alt="Credit Card" />
      </div>
      <div className="payment-details">
        <h2>Your payment details</h2>
        <form>
          <div className="form-group">
            <label>Card number</label>
            <input type="text" value="3574 - 3574 - 3574 - 3574" readOnly />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value="Anjul Dandekar" readOnly />
          </div>
          <div className="form-group">
            <label>Expires</label>
            <input type="text" value="08 / 2028" readOnly />
          </div>
          <div className="form-group">
            <label>CVC</label>
            <input type="password" value="****" readOnly />
          </div>
          <div className="form-group">
            <input type="checkbox" id="remember-card" />
            <label htmlFor="remember-card">Remember my card info</label>
          </div>
          <button type="submit">Purchase</button>
        </form>
      </div>
    </div>
  );
};

export default Pay;
