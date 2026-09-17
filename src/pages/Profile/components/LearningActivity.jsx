import "../../../css/profile/LearningActivity.css";
import {
  FaPlayCircle,
  FaCheckCircle,
  FaCertificate,
  FaBookOpen,
} from "react-icons/fa";

function LearningActivity() {
  const activities = [
    {
      icon: <FaPlayCircle />,
      title: "Started React Advanced Course",
      time: "2 hours ago",
      color: "blue",
    },
    {
      icon: <FaCheckCircle />,
      title: "Completed Spring Boot Module 5",
      time: "Yesterday",
      color: "green",
    },
    {
      icon: <FaCertificate />,
      title: "Earned JavaScript Certificate",
      time: "3 days ago",
      color: "purple",
    },
    {
      icon: <FaBookOpen />,
      title: "Enrolled in Database Design",
      time: "1 week ago",
      color: "orange",
    },
  ];

  return (
    <div className="learning-activity">
      <div className="section-header">
        <h3>Recent Learning Activity</h3>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="activity-list">
        {activities.map((activity, index) => (
          <div className="activity-card" key={index}>
            <div className={`activity-icon ${activity.color}`}>
              {activity.icon}
            </div>

            <div className="activity-content">
              <h5>{activity.title}</h5>
              <p>{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningActivity;