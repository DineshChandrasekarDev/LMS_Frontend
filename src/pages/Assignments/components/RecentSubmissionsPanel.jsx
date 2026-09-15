import { FaFileAlt } from "react-icons/fa";

function RecentSubmissionsPanel() {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold mb-0">Recent Submissions</h4>
        <a href="/" className="text-decoration-none">
          View All
        </a>
      </div>

      {/* Item 1 */}
      <div className="d-flex align-items-center py-2">
        <div className="bg-light rounded-4 p-3 me-3">
          <FaFileAlt className="text-purple" size={22} />
        </div>

        <div>
          <h6 className="mb-1 fw-bold">Java Basics Quiz</h6>
          <span className="badge bg-success-subtle text-success">
            Graded: 92%
          </span>
        </div>
      </div>

      <hr />

      {/* Item 2 */}
      <div className="d-flex align-items-center py-2">
        <div className="bg-light rounded-4 p-3 me-3">
          <FaFileAlt className="text-warning" size={22} />
        </div>

        <div>
          <h6 className="mb-1 fw-bold">HTML Assignment</h6>
          <span className="badge bg-success-subtle text-success">
            Graded: 88%
          </span>
        </div>
      </div>

      <hr />

      {/* Item 3 */}
      <div className="d-flex align-items-center py-2">
        <div className="bg-light rounded-4 p-3 me-3">
          <FaFileAlt className="text-danger" size={22} />
        </div>

        <div>
          <h6 className="mb-1 fw-bold">Python Functions</h6>
          <span className="badge bg-primary-subtle text-primary">
            Under Review
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecentSubmissionsPanel;