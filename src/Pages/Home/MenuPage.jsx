import React, { useState } from "react";
import CardComponent from "../../components/MenuComponent/CardMenu"; // Importation de CardComponent
import SideBarMenuComponent from "../../components/Common/SideBarMenu"; // Importation de SideBarMenuComponent
import { useCart } from "../../Context/CartContext"; // Use the Cart context

const MenuPage = ({ isAdmin }) => {
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [newCategoryName, setNewCategoryName] = useState("");
  const { cart, addToCart } = useCart(); // Access cart and addToCart from context

  // Menu items data structure
  const categories = ["Breakfast", "Lunch", "Dinner", "Dessert"];
  const [menuItems, setMenuItems] = useState({
    Breakfast: [
      { name: "Healthy Breakfast", description: "Pancakes, Coffee, Omelette", items: [{ name: "Granula", price: 5.5 }, { name: "Coffee", price: 3.5 }, { name: "Omelette", price: 7.0 }], price: 16.0 },
      { name: "Full Breakfast", description: "Pancakes, Coffee, Omelette", items: [{ name: "Pancakes", price: 5.5 }, { name: "Coffee", price: 3.5 }, { name: "Omelette", price: 7.0 }], price: 16.0 },
    ],
    Lunch: [
      { name: "Lunch Combo", description: "Sandwich, Chips, Soda", items: [{ name: "Sandwich", price: 5.0 }, { name: "Chips", price: 2.0 }, { name: "Soda", price: 1.5 }], price: 8.5 },
    ],
    Dinner: [
      { name: "Dinner Combo", description: "Steak, Pasta, Wine", items: [{ name: "Steak", price: 15.0 }, { name: "Pasta", price: 12.0 }, { name: "Wine", price: 7.0 }], price: 34.0 },
    ],
    Dessert: [
      { name: "Dessert Combo", description: "Ice Cream, Cake, Pie", items: [{ name: "Ice Cream", price: 3.0 }, { name: "Cake", price: 4.0 }, { name: "Pie", price: 4.5 }], price: 11.5 },
    ],
  });

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Admin: Add new category
  const handleAddCategory = () => {
    if (newCategoryName && !categories.includes(newCategoryName)) {
      setMenuItems((prevItems) => ({
        ...prevItems,
        [newCategoryName]: [],
      }));
      setNewCategoryName("");
      alert(`${newCategoryName} category added.`);
    }
  };

  // Admin: Remove category
  const handleRemoveCategory = (category) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the ${category} category?`);
    if (confirmDelete) {
      const { [category]: _, ...rest } = menuItems; // Remove category from menuItems
      setMenuItems(rest);
      alert(`${category} category deleted.`);
    }
  };

  // Admin: Add an item to a category
  const handleAddItemToCategory = (category) => {
    const itemName = prompt("Enter the name of the item:");
    const itemPrice = parseFloat(prompt("Enter the price of the item:"));

    if (itemName && !isNaN(itemPrice)) {
      const newItem = { name: itemName, price: itemPrice };
      setMenuItems((prevItems) => ({
        ...prevItems,
        [category]: [...prevItems[category], newItem],
      }));
    }
  };

  // Admin: Remove item from category
  const handleRemoveItemFromCategory = (category, itemIndex) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete this item from ${category}?`);
    if (confirmDelete) {
      setMenuItems((prevItems) => ({
        ...prevItems,
        [category]: prevItems[category].filter((_, index) => index !== itemIndex),
      }));
      alert("Item deleted successfully.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBarMenuComponent isAdmin={isAdmin} categories={categories} onFilterSelect={handleCategorySelect} />

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-3xl font-bold mb-6">{selectedCategory} Menu</h2>

        {/* Admin Actions */}
        {isAdmin && (
          <div className="mb-6">
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Enter new category name"
              className="p-2 border border-gray-300 rounded"
            />
            <button onClick={handleAddCategory} className="bg-green-500 text-white p-2 ml-2 rounded">
              Add Category
            </button>
            <button onClick={() => handleRemoveCategory(selectedCategory)} className="bg-red-500 text-white p-2 ml-2 rounded">
              Remove Category
            </button>
          </div>
        )}

        {/* Display Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menuItems[selectedCategory].map((set, index) => (
            <CardComponent
              key={index}
              title={set.name}
              description={set.description}
              items={set.items}  // Pass the individual items as part of the set
              totalPrice={set.price}  // Pass the total price of the set
              onAddToCart={() => addToCart(set)} // Function to add the set to the cart
            />
          ))}
        </div>

        {/* Admin: Add Items to Category */}
        {isAdmin && (
          <div className="mt-6">
            <button
              onClick={() => handleAddItemToCategory(selectedCategory)}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Item to Category
            </button>
          </div>
        )}
      </div>

      {/* Cart Section */}
      <div className="w-1/4 p-6">
        <h3 className="text-2xl mb-4">Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price} TND</li>
          ))}
        </ul>
        <div className="mt-2">
          <strong>Total:</strong> {cart.reduce((total, item) => total + item.price, 0).toFixed(2)} TND
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
