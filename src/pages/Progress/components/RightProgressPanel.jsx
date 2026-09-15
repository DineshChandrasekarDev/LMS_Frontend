import "../../../css/progress/RightProgressPanel.css";
import {
  FaTrophy,
  FaFire,
  FaBullseye,
  FaClock,
  FaLeaf,
  FaClipboardCheck,
} from "react-icons/fa";

function RightProgressPanel() {
  return (
    <div className="right-progress-panel">

      {/* Achievements */}
      <div className="progress-side-card">
        <div className="card-title-row">
          <h4>🏆 Achievements</h4>
          <a href="/">View All</a>
        </div>

        <div className="achievement-item">
          <FaTrophy />
          <div>
            <h6>Quiz Master</h6>
            <span>Scored 90%+ in 5 quizzes</span>
          </div>
        </div>

        <div className="achievement-item">
          <FaFire />
          <div>
            <h6>Consistent Learner</h6>
            <span>7 day learning streak</span>
          </div>
        </div>

        <div className="achievement-item">
          <FaBullseye />
          <div>
            <h6>Course Completer</h6>
            <span>Completed 10+ courses</span>
          </div>
        </div>

        <div className="achievement-item">
          <FaTrophy />
          <div>
            <h6>Certified Developer</h6>
            <span>Earned 5 certificates</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="progress-side-card">
        <div className="card-title-row">
          <h4>🕒 Recent Activity</h4>
          <a href="/">View All</a>
        </div>

        <div className="activity-item">
          <FaClipboardCheck />
          <div>
            <h6>Completed React Basics Quiz</h6>
            <span>Scored 90%</span>
          </div>
          <small>2h ago</small>
        </div>

        <div className="activity-item">
          <FaLeaf />
          <div>
            <h6>Finished useState Lesson</h6>
            <span>React for Beginners</span>
          </div>
          <small>5h ago</small>
        </div>

        <div className="activity-item">
          <FaTrophy />
          <div>
            <h6>Earned Quiz Master Badge</h6>
            <span>Achievement unlocked</span>
          </div>
          <small>1 day ago</small>
        </div>

        <div className="activity-item">
          <FaClipboardCheck />
          <div>
            <h6>Completed Spring Boot Module</h6>
            <span>Spring Boot Masterclass</span>
          </div>
          <small>2 days ago</small>
        </div>
      </div>

      {/* Motivation Card */}
      <div className="motivation-card">
        <div className="target-icon">🎯</div>

        <h3>Keep Going!</h3>

        <p>
          You are doing great. Complete
          2 more courses to earn a new badge.
        </p>

        <button>
          Explore Courses →
        </button>
      </div>
    </div>
  );
}

export default RightProgressPanel;