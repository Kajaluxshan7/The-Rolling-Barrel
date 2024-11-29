import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturedDishes from "../Components/FeaturedDishes";
import Feedback from "../Components/Feedback";
import QualitySection from "../Components/QualitySection";
import LatestNews from "../Components/LatestNews";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <Feedback />
      <QualitySection />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default Home;
