import "../../../css/progress/LearningAnalytics.css";
import {
  FaFire,
  FaTrophy,
  FaStar,
  FaMedal,
} from "react-icons/fa";

function LearningAnalytics() {
  return (
    <div className="learning-analytics mt-4">
      <div className="row g-4">

        {/* Left Chart */}
        <div className="col-lg-8">
          <div className="analytics-card">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4>Learning Progress</h4>
              <span className="progress-badge">78% Completed</span>
            </div>

            <div className="chart-container">
              <div className="chart-bars">
                <div className="bar" style={{ height: "45%" }}></div>
                <div className="bar" style={{ height: "60%" }}></div>
                <div className="bar" style={{ height: "75%" }}></div>
                <div className="bar active" style={{ height: "95%" }}></div>
                <div className="bar" style={{ height: "85%" }}></div>
                <div className="bar" style={{ height: "70%" }}></div>
                <div className="bar" style={{ height: "90%" }}></div>
              </div>

              <div className="chart-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-4">

          <div className="analytics-card mb-4">
            <h4 className="mb-3">Learning Streak</h4>

            <div className="streak-box">
              <FaFire />
              <h2>14 Days</h2>
            </div>

            <p className="goal-text">
              Weekly Goal Progress
            </p>

            <div className="goal-progress">
              <div className="goal-fill"></div>
            </div>

            <small>80% Completed</small>
          </div>

          <div className="analytics-card">
            <h4 className="mb-3">Achievements</h4>

            <div className="achievement-item">
              <FaTrophy />
              <span>Fast Learner</span>
            </div>

            <div className="achievement-item">
              <FaStar />
              <span>Quiz Master</span>
            </div>

            <div className="achievement-item">
              <FaMedal />
              <span>Top Performer</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default LearningAnalytics;