import React, { useState } from "react";

const SideBarMenuComponent = ({ categories, onFilterSelect , isAdmin }) => {
 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onFilterSelect(category); // Appelle une fonction pour appliquer le filtre.
  };
  // Function to add a new category
  const handleAddCategory = () => {
    if (!newCategory) {
      alert("Category name is required");
      return;
    }
    categories.push(newCategory);
    setNewCategory(""); // Reset the newCategory state
  };
  return (
    <div
      className="w-1/4 text-white p-4"
      style={{ backgroundColor: "#006d77" }} // Style inline pour le fond de la sidebar
    >
      <h2 className="text-2xl font-bold mb-6">Menu Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`p-2 cursor-pointer rounded-lg mb-2 ${
              selectedCategory === category ? "bg-slate-200" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
            style={{
              backgroundColor: selectedCategory === category ? "#006d77" : "",
            }} // Change la couleur de fond lorsque la catégorie est sélectionnée
          >
            {category}
          </li>
        ))}
      </ul>
      {isAdmin && (
      <div className="mb-4">
    <h3 className="text-xl font-bold">Add a New Category</h3>
    <input
      type="text"
      value={newCategory}
      onChange={(e) => setNewCategory(e.target.value)}
      className="border p-2 mt-2"
      placeholder="New category name"
    />
    <button onClick={handleAddCategory} className="ml-2 p-2 bg-cyan-900 text-white">
      Add Category
    </button>
  </div>  )}
    </div>
  );
};

export default SideBarMenuComponent;
