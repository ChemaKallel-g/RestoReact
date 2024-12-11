import React from 'react';
import DishCardComponent from '../Card/DishCardComponent'; // Import the DishCardComponent

const DishCardsComponent = ({ dishes }) => {
  return (
    <div className="col-12 row-start-4 mb-4">
      <h2 className="text-dark text-4xl fst-italic">Today's Special</h2>
      <div className="row">
        {dishes.map((dish, index) => (
          <DishCardComponent
            key={index}
            imageSrc={dish.imageSrc}   // Dish image source
            title={dish.title}         // Dish title
            description={dish.description} // Dish description
            price={dish.price}         // Dish price
            orderLink={dish.orderLink} // Order link for the dish
            recipeId={dish.recipeId}   // Dish ID
          />
        ))}
      </div>
    </div>
  );
};

export default DishCardsComponent;
