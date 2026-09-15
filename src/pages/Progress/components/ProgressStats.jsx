import "../../../css/progress/ProgressStats.css";
import {
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaTrophy,
} from "react-icons/fa";

function ProgressStats() {
  const stats = [
    {
      icon: <FaBookOpen />,
      value: "12",
      label: "Courses Enrolled",
      color: "blue",
    },
    {
      icon: <FaCheckCircle />,
      value: "8",
      label: "Courses Completed",
      color: "green",
    },
    {
      icon: <FaClock />,
      value: "148h",
      label: "Learning Hours",
      color: "orange",
    },
    {
      icon: <FaTrophy />,
      value: "5",
      label: "Certificates Earned",
      color: "purple",
    },
  ];

  return (
    <div className="progress-stats">
      <div className="row g-4">
        {stats.map((item, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="stat-card">
              <div className={`stat-icon ${item.color}`}>
                {item.icon}
              </div>

              <div>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressStats;