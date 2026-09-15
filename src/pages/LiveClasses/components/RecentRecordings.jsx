import { FaPlayCircle } from "react-icons/fa";

function RecentRecordings() {
  const recordings = [
    {
      title: "React Hooks Deep Dive",
      duration: "45 mins"
    },
    {
      title: "Spring Boot Security",
      duration: "1h 12m"
    },
    {
      title: "Python OOP Concepts",
      duration: "58 mins"
    }
  ];

  return (
    <div className="card border-0 shadow-sm rounded-4 p-3">
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">
          Recent Recordings
        </h5>

        <a
          href="/"
          className="text-decoration-none small"
          onClick={(e) => e.preventDefault()}
        >
          View All
        </a>
      </div>

      {recordings.map((video, index) => (
        <div
          key={index}
          className={`d-flex align-items-center py-3 ${
            index !== recordings.length - 1
              ? "border-bottom"
              : ""
          }`}
        >
          <div
            className="d-flex align-items-center justify-content-center me-3"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "12px",
              background: "#EEF4FF",
              color: "#2563EB"
            }}
          >
            <FaPlayCircle size={20} />
          </div>

          <div>
            <div className="fw-semibold">
              {video.title}
            </div>

            <small className="text-muted">
              {video.duration}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentRecordings;