import { FaCalendarAlt } from "react-icons/fa";

function UpcomingClassSidebar() {
  const classes = [
    {
      title: "React Masterclass",
      time: "Today, 7:00 PM",
    },
    {
      title: "Python Basics",
      time: "Today, 8:30 PM",
    },
    {
      title: "Spring Boot APIs",
      time: "Tomorrow, 9:00 PM",
    },
  ];

  return (
    <div className="card border-0 shadow-sm rounded-4 p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">
          Your Upcoming Classes
        </h5>

        <a
          href="/"
          className="text-decoration-none small"
          onClick={(e) => e.preventDefault()}
        >
          View All
        </a>
      </div>

      {classes.map((course, index) => (
        <div
          key={index}
          className={`py-3 ${
            index !== classes.length - 1
              ? "border-bottom"
              : ""
          }`}
        >
          <div className="fw-semibold mb-2">
            {course.title}
          </div>

          <small className="text-muted d-flex align-items-center">
            <FaCalendarAlt className="me-2" />
            {course.time}
          </small>
        </div>
      ))}
    </div>
  );
}

export default UpcomingClassSidebar;