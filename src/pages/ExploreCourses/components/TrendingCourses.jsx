import "../../../css/explore/TrendingCourses.css"
function TrendingCourses(){
    return(
<div className="sidebar-card">
  <div className="d-flex justify-content-between mb-3">
    <h5>Trending Courses</h5>
    <a href="/">View All</a>
  </div>

  <div className="trending-item">
    <div className="trend-icon">🎨</div>
    <div>
      <h6>UI/UX Design Basics</h6>
      <small>4.5 ⭐ (872)</small>
    </div>
  </div>

  <div className="trending-item">
    <div className="trend-icon">🔥</div>
    <div>
      <h6>Data Structures in Java</h6>
      <small>4.7 ⭐ (1.3K)</small>
    </div>
  </div>

  <div className="trending-item">
    <div className="trend-icon">🧠</div>
    <div>
      <h6>Machine Learning A-Z</h6>
      <small>4.8 ⭐ (2.2K)</small>
    </div>
  </div>
</div>
    );
}
export default TrendingCourses;