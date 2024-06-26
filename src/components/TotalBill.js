import React from 'react';
import './TotalBill.css';

const TotalBill = ({ total }) => {
  return (
    <div className="total-bill">
      <h4 className="title">Total Bill</h4>
      <p className="total">₹{total}</p>
    </div>
  );
};

export default TotalBill;
