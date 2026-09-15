import {
  FaCalendarAlt,
  FaUserGraduate,
  FaChartBar,
  FaPlay,
  FaFileAlt
} from "react-icons/fa";

function AssignmentCard({
  status,
  statusColor,
  icon,
  title,
  description,
  instructor,
  dueDate,
  progress,
  buttonText
}) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-3 h-100">

      {/* Status Badge */}
      <span
        className="badge rounded-pill align-self-start mb-3"
        style={{
          backgroundColor: statusColor,
          color: "#fff",
          fontSize: "11px",
          padding: "7px 14px",
          width: "fit-content",
          display: "inline-block"
        }}
      >
        {status}
      </span>

      {/* Icon */}
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

      {/* Title */}
      <h4
        className="fw-bold mb-2"
        style={{ minHeight: "70px" }}
      >
        {title}
      </h4>

      {/* Description */}
      <p
        className="text-muted mb-3"
        style={{ minHeight: "70px" }}
      >
        {description}
      </p>

      {/* Instructor */}
      <p className="mb-2">
        <FaUserGraduate className="me-2 text-warning" />
        {instructor}
      </p>

      {/* Due Date */}
      <p className="mb-2">
        <FaCalendarAlt className="me-2" />
        {dueDate}
      </p>

      {/* Progress */}
      <p className="mb-4">
        <FaChartBar className="me-2" />
        {progress}
      </p>

      {/* Button */}
      <button className="btn btn-outline-primary w-100 rounded-3 mt-auto">
        {progress === "Not Started" ? (
          <FaPlay className="me-2" />
        ) : (
          <FaFileAlt className="me-2" />
        )}
        {buttonText}
      </button>

    </div>
  );
}

export default AssignmentCard;