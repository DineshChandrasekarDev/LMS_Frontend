import React from "react";
import "../../../css/home/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container-fluid px-4 mb-4">

      <div className="hero-banner">

        <div>
          <h1>Start Learning, Achieve More</h1>

          <p>
            Access high-quality courses, track your progress
            and achieve your goals.
          </p>

          <button className="btn btn-primary px-4 py-2">
            Explore Courses →
          </button>
        </div>

        <div className="hero-image">
          🎓📚
        </div>

      </div>

    </div>
  );
};

export default HeroSection;