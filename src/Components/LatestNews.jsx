import React from "react";
import news1Image from "../Assets/Images/news1.jpg";
import news2Image from "../Assets/Images/news2.jpg";

function LatestNews() {
  const articles = [
    {
      title: "Healthy Fruits and Vegetables",
      date: "Jan 12",
      image: news1Image,
    },
    {
      title: "Tips to Cook Delicious Meals",
      date: "Jan 14",
      image: news2Image,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-500">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestNews;
