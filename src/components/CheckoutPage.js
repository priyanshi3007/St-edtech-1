import React from 'react';
import Header from './Header';
import Item from './Item';
import FrequentlyOrdered from './FrequentlyOrdered';
import DeliveryInfo from './DeliveryInfo';
import TotalBill from './TotalBill';
import './CheckoutPage.css';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <Header />
      <Item 
        name="Caribbean Spicy Zinger Burger"
        calories="300 Kcal"
        price="219"
        imageUrl=""
      />
      <Item 
        name="Cajun Veg Burger"
        calories="210 Kcal"
        price="288"
        imageUrl="path-to-image"
      />
      <FrequentlyOrdered />
      <DeliveryInfo address="23rd Avenue, JP Nagar, Bangalore" />
      <TotalBill total="538" />
      <button className="proceed-button">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CheckoutPage;
