import React from "react";

const CardComponent = ({ title, description, items, totalPrice, onAddToCart }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 shadow-lg bg-white overflow-hidden">
      {/* Card Header (Title) */}
      <div className="text-white text-center py-4" style={{ backgroundColor: "#006d77" }}>
        <h2 className="text-2xl font-semibold">{title}</h2>
        
      </div>

      {/* Card Body (Items and Prices) */}
      <div className="p-4">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="text-lg">{item.name}</span>
       
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer (Total Price) */}
      <div className="bg-gray-100 p-4 text-right">
        <span className="text-xl font-bold">Total:</span>
        <span className="text-xl text-dark">{` ${totalPrice.toFixed(2)} TND`}</span>
      </div>

      {/* Add to Cart Button */}
      <div className="p-4">
        <button
          className="w-full py-2 bg-cyan-900 text-white rounded-lg "
          onClick={() => onAddToCart({ name: title, description, items, price: totalPrice })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
