import "../../../css/profile/ProfileStats.css";
import {
  FaBookOpen,
  FaCertificate,
  FaClock,
  FaTrophy,
} from "react-icons/fa";

function ProfileStats() {
  const stats = [
    {
      icon: <FaBookOpen />,
      value: "12",
      label: "Courses Enrolled",
      color: "blue",
    },
    {
      icon: <FaCertificate />,
      value: "5",
      label: "Certificates Earned",
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
      value: "14",
      label: "Achievements",
      color: "purple",
    },
  ];

  return (
    <div className="profile-stats">
      <div className="row g-4">
        {stats.map((item, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div className="profile-stat-card">
              <div className={`stat-icon ${item.color}`}>
                {item.icon}
              </div>

              <div className="stat-content">
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

export default ProfileStats;