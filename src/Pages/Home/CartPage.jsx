import React from "react";
import { useCart } from "../../Context/CartContext"; // Use the Cart context
import Cart from "../../components/Common/Cart"; // Import the Cart component

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); // Use cart and removeFromCart from context

  return (
    <div className="container p-6">
      {/* Render the Cart component and pass the necessary props */}
      <Cart cart={cart} onRemoveFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
