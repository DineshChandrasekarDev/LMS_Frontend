import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

function CourseCard({
  title,
  modules,
  level,
  progress,
  lastAccessed,
}) {
  const getIcon = () => {
    if (title.includes("Java")) return <FaJava size={45} color="#2563eb" />;
    if (title.includes("Python")) return <FaPython size={45} color="#2563eb" />;
    if (title.includes("React")) return <FaReact size={45} color="#2563eb" />;

    return <FaJava size={45} color="#2563eb" />;
  };

  return (
    <div
      className="card border-0 shadow-sm"
      style={{
        borderRadius: "18px",
        minHeight: "280px",
      }}
    >
      <div className="card-body p-4">

        <div className="d-flex justify-content-between">

          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "70px",
              height: "70px",
              background: "#f8f9ff",
              borderRadius: "15px",
            }}
          >
            {getIcon()}
          </div>

          <BsThreeDotsVertical size={20} />
        </div>

        <h4 className="fw-bold mt-3">
          {title}
        </h4>

        <p className="text-muted">
          {modules} • {level}
        </p>

        <div
          className="progress"
          style={{
            height: "8px",
            borderRadius: "10px",
          }}
        >
          <div
            className="progress-bar"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <small className="text-muted">
            Last accessed: {lastAccessed}
          </small>

          <strong>{progress}%</strong>
        </div>

        <button
          className="btn btn-light w-100 mt-4"
          style={{
            height: "50px",
            borderRadius: "12px",
            color: "#2563eb",
            fontWeight: "600",
          }}
        >
          ▶ Continue Learning
        </button>

      </div>
    </div>
  );
}

export default CourseCard;