import React from "react";
import burgerImage from "../Assets/Images/burger.jpg";

function QualitySection() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Where Quality Meets Excellent Service
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <img
          src={burgerImage}
          alt="Burger"
          className="h-64 w-64 object-cover rounded-lg"
        />
        <p className="text-lg text-gray-600 max-w-4xl">
          Experience the finest dishes prepared with care and quality
          ingredients.
        </p>
      </div>
    </section>
  );
}

export default QualitySection;
