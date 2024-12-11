import React, { useState } from "react";
import SideBarMenuComponent from "../../components/Common/SideBarMenu"; // Importation de SideBarMenuComponent
import DishCardComponent from "../../components/Card/DishCardComponent"; // Importation de DishCardComponent
import { useCart } from "../../Context/CartContext"; // Use the Cart context

const CategoryPage = ({ isAdmin }) => {
  const [selectedCategory, setSelectedCategory] = useState("Boissons");
  const { cart, addToCart } = useCart(); // Access cart and addToCart from context
  const [newItem, setNewItem] = useState({ name: "", description: "", price: "" });

  const categories = ["Boissons", "Crêpes", "Gaufres", "Sandwichs"];
  const categoryItems = {
    Boissons: [
      { name: "Café", description: "Un délicieux café chaud", price: 2.5, imageSrc: "http://forkify-api.herokuapp.com/images/511492800ca3.jpg" },
      { name: "Thé", description: "Un thé au citron", price: 3.0 },
      { name: "Jus d'orange", description: "Jus frais d'orange", price: 4.0 },
    ],
    Crêpes: [
      { name: "Crêpe Sucrée", description: "Crêpe avec du sucre et du beurre", price: 5.0, imageSrc: "http://forkify-api.herokuapp.com/images/511492800ca3.jpg" },
      { name: "Crêpe Nutella", description: "Crêpe avec du Nutella", price: 6.0 },
      { name: "Crêpe Salée", description: "Crêpe avec du jambon et du fromage", price: 7.0 },
    ],
    Gaufres: [
      { name: "Gaufre Nature", description: "Gaufre classique", price: 4.5, imageSrc: "http://forkify-api.herokuapp.com/images/511492800ca3.jpg" },
      { name: "Gaufre au chocolat", description: "Gaufre avec du chocolat fondu", price: 5.5 },
      { name: "Gaufre Fruits", description: "Gaufre avec des fruits frais", price: 6.5 },
    ],
    Sandwichs: [
      { name: "Sandwich Poulet", description: "Poulet grillé avec salade", price: 6.0 },
      { name: "Sandwich Thon", description: "Thon et mayonnaise", price: 5.5 },
      { name: "Sandwich Végétarien", description: "Légumes frais avec houmous", price: 5.0 },
    ],
  };

  // Function to handle category selection from sidebar
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };



  // Function to add a new item to the selected category
  const handleAddItem = () => {
    if (!newItem.name || !newItem.price) {
      alert("Name and price are required for the item");
      return;
    }

    const item = {
      name: newItem.name,
      description: newItem.description,
      price: parseFloat(newItem.price),
    };

    categoryItems[selectedCategory].push(item);
    setNewItem({ name: "", description: "", price: "" }); // Reset the newItem state
  };

  // Function to delete an item
  const handleDeleteItem = (index) => {
    categoryItems[selectedCategory].splice(index, 1);
    setSelectedCategory(selectedCategory); // Trigger re-render
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBarMenuComponent isAdmin={isAdmin} categories={categories} onFilterSelect={handleCategorySelect} />

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-3xl font-bold mb-6">{selectedCategory}</h2>

        {/* Admin Section: Add or modify categories and items */}
        {isAdmin && (
          <div className="mb-6">
            

            <div className="mb-4">
              <h3 className="text-xl font-bold">Add a New Item</h3>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="border p-2 mt-2"
                placeholder="Item name"
              />
              <input
                type="text"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                className="border p-2 mt-2 ml-2"
                placeholder="Item price"
              />
              <input
                type="text"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="border p-2 mt-2 ml-2"
                placeholder="Item description"
              />
              <button onClick={handleAddItem} className="ml-2 p-2 bg-cyan-900 text-white">
                Add Item
              </button>
            </div>
          </div>
        )}

        {/* Dish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoryItems[selectedCategory].map((item, index) => (
            <DishCardComponent
              key={index}
              imageSrc={item.imageSrc}
              title={item.name}
              description={item.description}
              price={item.price}
              isAdmin={isAdmin}
              onAddToCart={() => addToCart(item)} // Use the addToCart function from context
            />
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="w-1/4 p-6">
        <h3 className="text-2xl mb-4">Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} TND
              {isAdmin && (
                <button onClick={() => handleDeleteItem(index)} className="text-red-500 ml-2">
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <strong>Total:</strong> {cart.reduce((total, item) => total + item.price, 0).toFixed(2)} TND
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
