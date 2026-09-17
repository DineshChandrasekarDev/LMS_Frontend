import "../../../css/profile/RightProfilePanel.css";
import {
  FaTrophy,
  FaCertificate,
  FaFire,
  FaStar,
} from "react-icons/fa";

function RightProfilePanel() {
  return (
    <div className="right-profile-panel">

      {/* Achievements */}
      <div className="profile-side-card">
        <h4>🏆 Achievements</h4>

        <div className="achievement-item">
          <FaTrophy className="gold-icon" />
          <div>
            <h6>Top Learner</h6>
            <p>Completed 10+ courses</p>
          </div>
        </div>

        <div className="achievement-item">
          <FaFire className="orange-icon" />
          <div>
            <h6>14 Day Streak</h6>
            <p>Consistent learning</p>
          </div>
        </div>

        <div className="achievement-item">
          <FaStar className="purple-icon" />
          <div>
            <h6>Quiz Master</h6>
            <p>90%+ average score</p>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="profile-side-card">
        <h4>📜 Certificates</h4>

        <div className="certificate-item">
          <FaCertificate />
          <span>React Development</span>
        </div>

        <div className="certificate-item">
          <FaCertificate />
          <span>Spring Boot Basics</span>
        </div>

        <div className="certificate-item">
          <FaCertificate />
          <span>JavaScript Mastery</span>
        </div>

        <button className="view-btn">
          View All Certificates
        </button>
      </div>

      {/* Learning Stats */}
      <div className="profile-side-card">
        <h4>📈 Learning Goals</h4>

        <div className="goal-item">
          <span>Weekly Goal</span>
          <span>80%</span>
        </div>

        <div className="progress-line">
          <div className="progress-fill"></div>
        </div>

        <div className="goal-item mt-3">
          <span>Monthly Goal</span>
          <span>65%</span>
        </div>

        <div className="progress-line">
          <div
            className="progress-fill monthly"
          ></div>
        </div>
      </div>

    </div>
  );
}

export default RightProfilePanel;