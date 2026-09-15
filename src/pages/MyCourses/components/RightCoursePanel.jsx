import {
  FaBookOpen,
  FaPlayCircle,
  FaCheckCircle,
  FaCertificate,
  FaFileAlt,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";    
import "../../../css/mycourses/RightCoursePanel.css";

function RightCoursePanel() {
  return (
    <>
      {/* Learning Statistics */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
  <h5 className="fw-bold mb-0">
    Learning Statistics
  </h5>

  <FaChartBar className="text-secondary" />
</div>

          <div className="stat-item">
              <div className="d-flex align-items-center gap-3">
            <div className="stat-icon blue">
              <FaBookOpen />
            </div>
            <span>Total Courses</span>
            </div>
            <strong>12</strong>
          </div>

          <div className="stat-item">
             <div className="d-flex align-items-center gap-3">
            <div className="stat-icon green">
              <FaPlayCircle />
            </div>
            <span>In Progress</span>
                        </div>
            <strong>4</strong>
          </div>

          <div className="stat-item">
         <div className="d-flex align-items-center gap-3">
            <div className="stat-icon purple">
              <FaCheckCircle />
            </div>
            <span>Completed</span>
                        </div>

            <strong>8</strong>
          </div>

          <div className="stat-item">
             <div className="d-flex align-items-center gap-3">
            <div className="stat-icon orange">
              <FaCertificate />
            </div>
            <span>Certificates</span>
                        </div>

            <strong>5</strong>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">Recent Activity</h5>
            <a href="#" className="text-decoration-none">
              View All
            </a>
          </div>

          <div className="activity-item">
            <div className="activity-icon blue">
              <FaBookOpen />
            </div>
            <div>
              <p className="mb-1 fw-semibold">
                Completed Java Module 5
              </p>
              <small className="text-muted">
                Today, 10:30 AM
              </small>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon green">
              <FaCheckCircle />
            </div>
            <div>
              <p className="mb-1 fw-semibold">
                React Quiz Passed
              </p>
              <small className="text-muted">
                Yesterday, 06:20 PM
              </small>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon purple">
              <FaFileAlt />
            </div>
            <div>
              <p className="mb-1 fw-semibold">
                Spring Boot Assignment Submitted
              </p>
              <small className="text-muted">
                Yesterday, 04:15 PM
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended For You */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">
              Recommended For You
            </h5>
            <a href="#" className="text-decoration-none">
              View All
            </a>
          </div>

          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="recommend-icon">
              <FaCloudDownloadAlt />
            </div>

            <div>
              <h6 className="fw-bold mb-1">
                Docker Essentials
              </h6>
              <p className="text-muted mb-0">
                Beginner Level
              </p>
               <small className="text-warning">
      ★★★★☆
    </small>

    <small className="text-muted ms-1">
      4.6 (1.2K)
    </small>
            </div>
          </div>

          <button className="btn btn-outline-primary w-100">
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
}

export default RightCoursePanel;