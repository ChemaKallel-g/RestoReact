import React from 'react';
import Checkout from '../../components/CheckoutComponent/CheckoutComponent'; // Importing the Checkout component

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container p-6">
        <h2 className="text-3xl font-bold mb-6">Checkout Page</h2>
        
        {/* Render the Checkout component */}
        <Checkout />
      </div>
    </div>
  );
};

export default CheckoutPage;
