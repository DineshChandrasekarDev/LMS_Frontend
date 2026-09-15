import {
  FaCalendarAlt,
  FaUsers,
  FaBell
} from "react-icons/fa";

function LiveClassCard({
  status,
  statusBg,
  statusText,
  icon,
  title,
  subtitle,
  instructor,
  time,
  students,
  isLive = false
}) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-3 h-100">

      {/* Status Badge */}
      <div className="mb-3">
        <span
          style={{
            background: statusBg,
            color: statusText,
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "600",
            display: "inline-block",
            whiteSpace: "nowrap"
          }}
        >
          {status}
        </span>
      </div>

      {/* Course Icon */}
      <div
        className="d-flex align-items-center justify-content-center mb-3"
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "16px",
          background: "#f5f7ff"
        }}
      >
        {icon}
      </div>

      {/* Course Details */}
      <h4 className="fw-bold mb-2">
        {title}
      </h4>

      <p className="text-muted mb-3">
        {subtitle}
      </p>

      <p className="mb-2">
        👨 {instructor}
      </p>

      <p className="mb-2">
        <FaCalendarAlt className="me-2" />
        {time}
      </p>

      <p className="mb-4">
        <FaUsers className="me-2" />
        {students} Students
      </p>

      {/* Action Button */}
      {isLive ? (
        <button className="btn btn-primary w-100 rounded-3">
          🎥 Join Now
        </button>
      ) : (
        <button className="btn btn-outline-primary w-100 rounded-3">
          <FaBell className="me-2" />
          Set Reminder
        </button>
      )}

    </div>
  );
}

export default LiveClassCard;