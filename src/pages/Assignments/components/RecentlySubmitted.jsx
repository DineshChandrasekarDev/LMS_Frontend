import { FaFileAlt } from "react-icons/fa";

function RecentlySubmitted() {
  const submissions = [
    {
      title: "Java Basics Quiz",
      description: "Chapter 1 - 5",
      date: "Submitted on Sep 8, 2026",
      grade: "Graded: 92%",
      color: "#51cf66"
    },
    {
      title: "HTML Assignment",
      description: "Build a static webpage",
      date: "Submitted on Sep 6, 2026",
      grade: "Graded: 88%",
      color: "#51cf66"
    },
    {
      title: "Python Functions",
      description: "Solve given problems",
      date: "Submitted on Sep 3, 2026",
      grade: "Under Review",
      color: "#4c6ef5"
    }
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
        <h2 className="fw-bold mb-0">
          Recently Submitted
        </h2>

        <a href="/" className="text-decoration-none">
          View All
        </a>
      </div>

      <div className="row g-4">
        {submissions.map((item, index) => (
          <div className="col-lg-4" key={index}>
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

              <div className="d-flex align-items-start">

                <div
                  className="d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: "#f5f7ff",
                    flexShrink: 0
                  }}
                >
                  <FaFileAlt
                    size={25}
                    color="#845ef7"
                  />
                </div>

                <div>
                  <h5 className="fw-bold mb-2">
                    {item.title}
                  </h5>

                  <p className="text-muted mb-2">
                    {item.description}
                  </p>

                  <small className="text-muted">
                    {item.date}
                  </small>
                </div>

              </div>

              <div className="mt-4">
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: `${item.color}20`,
                    color: item.color,
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600"
                  }}
                >
                  {item.grade}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecentlySubmitted;