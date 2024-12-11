import React, { useState } from "react";

const DishCardComponent = ({
  imageSrc,
  title,
  description,
  price,
  onAddToCart,
  isAdmin,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedImage, setEditedImage] = useState(imageSrc);

  const handleSaveChanges = () => {
    if (editedName && editedDescription && editedPrice) {
      onEdit({
        name: editedName,
        description: editedDescription,
        price: editedPrice,
        imageSrc: editedImage,
      });
      setIsEditing(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleDeleteDish = () => {
    onDelete();
  };

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 shadow-lg bg-white overflow-hidden">
      {/* Image */}
      <img className="card-img-top h-64 w-full object-cover" src={imageSrc} alt={title} />

      <div className="card-body">
        {/* Title */}
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
        ) : (
          <h5 className="card-title text-dark">{title}</h5>
        )}

        {/* Description */}
        {isEditing ? (
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
        ) : (
          <p className="card-text text-md">{description}</p>
        )}

        {/* Price */}
        {isEditing ? (
          <input
            type="number"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
            placeholder="Price"
          />
        ) : (
          <div className="mt-2 text-lg font-bold">
            {price ? `${price.toFixed(2)} TND` : "No Price"}
          </div>
        )}

        {/* Add to Cart Button */}
        {!isEditing && (
          <div className="mt-3">
            <button
              className="w-full py-2 bg-cyan-900 text-white rounded-lg"
              onClick={onAddToCart}
            >
              Add to Cart
            </button>
          </div>
        )}

        {/* Admin Actions */}
        {isAdmin && (
          <div className="mt-2 flex justify-between">
            {isEditing ? (
              <button
                className="p-4 bg-green-500 text-white rounded-lg"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            ) : (
              <button
                className="p-4 bg-yellow-500 text-white rounded-lg"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}

            <button
              className="p-4 bg-red-500 text-white rounded-lg"
              onClick={handleDeleteDish}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishCardComponent;
