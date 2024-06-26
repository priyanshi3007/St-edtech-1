import React from 'react';
import './Item.css';

const Item = ({ name, calories, price, imageUrl }) => {
  return (
    <div className="item">
      <img src={imageUrl} alt={name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{name}</h3>
        <p className="item-calories">{calories}</p>
      </div>
      <p className="item-price">₹{price}</p>
      <div className="item-quantity">
        <button className="quantity-button">-</button>
        <p className="quantity">1</p>
        <button className="quantity-button">+</button>
      </div>
    </div>
  );
};

export default Item;
