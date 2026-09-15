import "../../../css/quizzes/UpcomingQuiz.css";
import { FaCode, FaCalendarAlt, FaClock } from "react-icons/fa";

function UpcomingQuiz() {
  return (
    <div className="upcoming-card">
      <div className="upcoming-header">
        <h4>🏵 Upcoming Quiz</h4>
        <a href="/">View All</a>
      </div>

      <div className="upcoming-content">
        <div className="quiz-icon-box">
          <FaCode />
        </div>

        <div>
          <h5>React Component Quiz</h5>
          <p>React for Beginners</p>
        </div>
      </div>

      <div className="quiz-details">
        <p>
          <FaCalendarAlt /> Tomorrow, 10:00 AM
        </p>

        <p>
          <FaClock /> 20 mins | 20 Questions
        </p>
      </div>

      <button className="reminder-btn">
        🔔 Set Reminder
      </button>
    </div>
  );
}

export default UpcomingQuiz;