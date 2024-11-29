import React from "react";
import chickenImage from "../Assets/Images/chicken.jpg";
import burgerImage from "../Assets/Images/burger.jpg";
import coffeeImage from "../Assets/Images/coffee.jpg";

function FeaturedDishes() {
  const dishes = [
    { name: "Chicken Tenders", price: "$17.00", image: chickenImage },
    { name: "Classic Burger", price: "$14.00", image: burgerImage },
    { name: "Delicious Coffee", price: "$3.00", image: coffeeImage },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Featured Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dishes.map((dish, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={dish.image}
              alt={dish.name}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
            <p className="text-lg text-yellow-500 font-semibold">
              {dish.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDishes;
