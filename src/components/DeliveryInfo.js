import React from 'react';
import './DeliveryInfo.css';

const DeliveryInfo = ({ address }) => {
  return (
    <div className="delivery-info">
      <h4 className="title">Delivery to</h4>
      <p className="address">{address}</p>
    </div>
  );
};

export default DeliveryInfo;
