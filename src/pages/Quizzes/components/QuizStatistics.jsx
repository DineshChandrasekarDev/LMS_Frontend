import "../../../css/quizzes/QuizStatistics.css";
import {
  FaFileAlt,
  FaPlayCircle,
  FaCheckCircle,
  FaTrophy,
} from "react-icons/fa";

function QuizStatistics() {
  const stats = [
    {
      icon: <FaFileAlt />,
      title: "Total Quizzes",
      value: "18",
      color: "#4f8cff",
      bg: "#edf4ff",
    },
    {
      icon: <FaPlayCircle />,
      title: "Attempted",
      value: "8",
      color: "#22c55e",
      bg: "#eafaf0",
    },
    {
      icon: <FaCheckCircle />,
      title: "Completed",
      value: "6",
      color: "#10b981",
      bg: "#e8faf4",
    },
    {
      icon: <FaTrophy />,
      title: "Avg. Score",
      value: "78%",
      color: "#ff5b61",
      bg: "#fff0f1",
    },
  ];

  return (
    <div className="stats-card">
      <h4>📊 Quiz Statistics</h4>

      <div className="row g-3 mt-2">
        {stats.map((item, index) => (
          <div className="col-6" key={index}>
            <div className="stat-box">
              <div
                className="stat-icon"
                style={{
                  background: item.bg,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              <div>
                <small>{item.title}</small>
                <h5>{item.value}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizStatistics;