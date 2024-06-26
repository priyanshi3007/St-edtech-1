import React from 'react';
import './FrequentlyOrdered.css';

const FrequentlyOrdered = () => {
  return (
    <div className="frequently-ordered">
      <h4 className="title">Frequently Ordered</h4>
      <div className="items-container">
        {/* Repeat this block for each frequently ordered item */}
        <div className="item">
          <img src="Fanta.png" alt="Fanta" className="item-image" />
          <p className="item-name">Fanta - 1 PET</p>
          <p className="item-price">₹89</p>
        </div>
        <div className="item">
          <img src="Fanta.png" alt="Fanta" className="item-image" />
          <p className="item-name">Fanta - 1 PET</p>
          <p className="item-price">₹89</p>
        </div>
        <div className="item">
          <img src="Fanta.png" alt="Fanta" className="item-image" />
          <p className="item-name">Fanta - 1 PET</p>
          <p className="item-price">₹89</p>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyOrdered;
