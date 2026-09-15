import "../../../css/quizzes/QuizTips.css";
import { FaCheckCircle } from "react-icons/fa";

function QuizTips() {
  const tips = [
    "Read the course material thoroughly",
    "Take notes while learning",
    "Attempt quizzes regularly",
    "Review your incorrect answers",
    "Manage your time during the quiz",
  ];

  return (
    <div className="tips-card">
      <h4>💡 Tips For Better Performance</h4>

      {tips.map((tip, index) => (
        <div className="tip-item" key={index}>
          <FaCheckCircle />
          <span>{tip}</span>
        </div>
      ))}
    </div>
  );
}

export default QuizTips;