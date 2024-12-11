import React, { useState } from 'react';

const CheckoutComponent = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [error, setError] = useState('');
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!address || !city || !paymentMethod) {
      setError('All fields are required');
      return;
    }

    setError(''); // Clear any previous errors

    // Process the checkout (this would typically be an API call)
    alert(`Order placed successfully!\nLocation: ${address}, ${city}\nPayment Method: ${paymentMethod}`);
  };

  return (
    <div className="container p-6">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      {/* Error message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Checkout Form */}
      <form onSubmit={handleSubmit}>
        {/* Address Field */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your address"
          />
        </div>

        {/* City Field */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your city"
          />
        </div>

        {/* Payment Method Selection */}
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutComponent;
