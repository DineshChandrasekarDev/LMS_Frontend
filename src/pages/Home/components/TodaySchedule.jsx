import {
  FaClock,
  FaVideo,
  FaBookOpen,
} from "react-icons/fa";

function TodaySchedule() {
  const schedules = [
    {
      title: "React Masterclass",
      time: "07:00 PM",
      icon: <FaVideo />,
      color: "#2563eb",
    },
    {
      title: "Java Assignment",
      time: "03:00 PM",
      icon: <FaBookOpen />,
      color: "#f59e0b",
    },
    {
      title: "Python Quiz",
      time: "09:00 PM",
      icon: <FaClock />,
      color: "#10b981",
    },
  ];

  return (
    <div className="card border-0 shadow-sm rounded-4 p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">
          Today's Schedule
        </h5>

        <a
          href="/"
          className="text-decoration-none small"
          onClick={(e) => e.preventDefault()}
        >
          View All
        </a>
      </div>

      {schedules.map((item, index) => (
        <div
          key={index}
          className={`d-flex align-items-center py-3 ${
            index !== schedules.length - 1
              ? "border-bottom"
              : ""
          }`}
        >
          <div
            className="me-3 d-flex align-items-center justify-content-center"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: `${item.color}15`,
              color: item.color,
            }}
          >
            {item.icon}
          </div>

          <div className="flex-grow-1">
            <div className="fw-semibold">
              {item.title}
            </div>

            <small className="text-muted">
              {item.time}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodaySchedule;