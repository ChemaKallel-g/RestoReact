import React from "react";
import { NavLink } from "react-router-dom";

const Cart = ({ cart, onRemoveFromCart }) => {
  const totalAmount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="w-full md:w-full p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Cart</h3>

      {/* Cart Items */}
      <ul className="space-y-4">
        {cart.length === 0 ? (
          <li className="text-center text-gray-500">Your cart is empty</li>
        ) : (
          cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="text-lg">{item.name}</span>
              <span className="text-lg text-dark">{` ${item.price.toFixed(2)} TND`}</span>
              <button
                className="text-red-500 hover:text-red-700 text-sm"
                onClick={() => onRemoveFromCart(index)}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>

      {/* Cart Total */}
      {cart.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>{` ${totalAmount} TND`}</span>
          </div>

          {/* Checkout Button */}
          <div className="mt-4">
            <NavLink to="/checkout">
            <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Checkout
            </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
