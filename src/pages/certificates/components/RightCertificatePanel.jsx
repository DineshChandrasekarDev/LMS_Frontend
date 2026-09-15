import "../../../css/certificates/RightCertificatePanel.css";
import {
  FaTrophy,
  FaCertificate,
  FaDownload,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

function RightCertificatePanel() {
  return (
    <div className="right-certificate-panel">

      {/* Certificate Goal */}
      <div className="certificate-side-card goal-card">
        <div className="goal-icon">
          🎯
        </div>

        <h3>Next Milestone</h3>

        <p>
          Complete 2 more courses to unlock your
          Advanced Learner Certificate.
        </p>

        <div className="goal-progress">
          <div className="goal-fill"></div>
        </div>

        <small>80% Completed</small>
      </div>

      {/* Latest Achievement */}
      <div className="certificate-side-card">
        <div className="panel-header">
          <h4>🏆 Latest Achievement</h4>
        </div>

        <div className="achievement-box">
          <FaTrophy />

          <div>
            <h6>React Master</h6>
            <span>
              Earned after completing all React modules
            </span>
          </div>
        </div>
      </div>

      {/* Certificate Stats */}
      <div className="certificate-side-card">
        <div className="panel-header">
          <h4>📊 Statistics</h4>
        </div>

        <div className="stat-row">
          <span>Total Certificates</span>
          <strong>12</strong>
        </div>

        <div className="stat-row">
          <span>Downloads</span>
          <strong>34</strong>
        </div>

        <div className="stat-row">
          <span>Achievements</span>
          <strong>5</strong>
        </div>

        <div className="stat-row">
          <span>Completion Rate</span>
          <strong>89%</strong>
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="certificate-side-card">
        <div className="panel-header">
          <h4>📚 Recommended</h4>
        </div>

        <div className="recommended-course">
          <FaBookOpen />

          <div>
            <h6>Docker Essentials</h6>
            <span>
              Earn a new certificate
            </span>
          </div>
        </div>

        <button className="explore-btn">
          Explore Courses
          <FaArrowRight />
        </button>
      </div>

      {/* Download Center */}
      <div className="certificate-side-card download-card">
        <FaCertificate className="download-icon" />

        <h4>Certificate Center</h4>

        <p>
          Download all your certificates
          in one click.
        </p>

        <button className="download-all-btn">
          <FaDownload />
          Download All
        </button>
      </div>

    </div>
  );
}

export default RightCertificatePanel;