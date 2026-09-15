import { FaClipboardList, FaClock, FaCheckCircle, FaChartBar } from "react-icons/fa";

function AssignmentStats() {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-3 mb-4">
      <h4 className="fw-bold mb-4">Assignment Statistics</h4>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <div className="bg-primary bg-opacity-10 p-3 rounded-4 me-3">
            <FaClipboardList className="text-primary" />
          </div>
          <span>Total Assignments</span>
        </div>
        <strong>24</strong>
      </div>

      <hr />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <div className="bg-warning bg-opacity-10 p-3 rounded-4 me-3">
            <FaClock className="text-warning" />
          </div>
          <span>Pending</span>
        </div>
        <strong>4</strong>
      </div>

      <hr />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <div className="bg-success bg-opacity-10 p-3 rounded-4 me-3">
            <FaCheckCircle className="text-success" />
          </div>
          <span>Submitted</span>
        </div>
        <strong>12</strong>
      </div>

      <hr />

      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="bg-purple bg-opacity-10 p-3 rounded-4 me-3">
            <FaChartBar style={{ color: "#8B5CF6" }} />
          </div>
          <span>Graded</span>
        </div>
        <strong>8</strong>
      </div>
    </div>
  );
}

export default AssignmentStats;