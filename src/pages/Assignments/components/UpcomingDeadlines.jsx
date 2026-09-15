import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { BsDatabaseFill } from "react-icons/bs";

function UpcomingDeadlines() {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold mb-0">Upcoming Deadlines</h4>
        <a href="/" className="text-decoration-none">
          View All
        </a>
      </div>

      {/* React */}
      <div className="d-flex align-items-center py-2">
        <div className="bg-light rounded-4 p-3 me-3">
          <FaReact size={28} className="text-info" />
        </div>

        <div>
          <h6 className="mb-1 fw-bold">React Dashboard Project</h6>
          <small className="text-danger fw-semibold">
            Tomorrow
          </small>
        </div>
      </div>

      <hr />

      {/* Spring */}
      <div className="d-flex align-items-center py-2">
        <div className="bg-light rounded-4 p-3 me-3">
          <SiSpringboot size={28} className="text-success" />
        </div>

        <div>
          <h6 className="mb-1 fw-bold">Spring Boot API</h6>
          <small className="text-warning fw-semibold">
            In 3 Days
          </small>
        </div>
      </div>

      <hr />

      {/* Database */}
      <div className="d-flex align-items-center py-2">
        <div className="bg-light rounded-4 p-3 me-3">
          <BsDatabaseFill size={28} className="text-primary" />
        </div>

        <div>
          <h6 className="mb-1 fw-bold">Database Design</h6>
          <small className="text-warning fw-semibold">
            In 5 Days
          </small>
        </div>
      </div>
    </div>
  );
}

export default UpcomingDeadlines;