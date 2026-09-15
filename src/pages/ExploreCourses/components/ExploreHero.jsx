import "../../../css/explore/ExploreHero.css";

function ExploreHero() {
  return (
    <div className="explore-hero">
      <div className="hero-left">

        <span className="hero-badge">
          🚀 Start Learning Today
        </span>

        <h1 className="hero-title">
          Explore Courses
        </h1>

        <p className="hero-subtitle">
          Discover thousands of courses from industry experts.
        </p>

        <p className="hero-subtitle">
          Learn new skills and advance your career.
        </p>

        <button className="browse-btn">
          Browse Courses →
        </button>

      </div>

      <div className="hero-right">
      <img
  src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
  alt="Courses"
/>
      </div>
    </div>
  );
}

export default ExploreHero;