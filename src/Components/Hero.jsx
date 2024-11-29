import React from "react";
import heroImage from "../Assets/Images/hero-bg.jpg";

function Hero() {
  return (
    <section
      className="bg-cover bg-center text-white text-center py-32 px-4"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1 className="text-4xl font-bold mb-4">
        The Perfect Space to Enjoy Fantastic Food
      </h1>
      <p className="text-lg mb-6">
        Feast on a variety of dishes made with the best ingredients.
      </p>
      <button className="bg-red-500 px-6 py-3 rounded text-white hover:bg-red-600">
        See Our Menu
      </button>
    </section>
  );
}

export default Hero;
