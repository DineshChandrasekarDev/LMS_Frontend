import "../../../css/certificates/CertificateGrid.css";
import {
  FaDownload,
  FaEye,
  FaAward,
  FaMedal,
  FaCertificate,
} from "react-icons/fa";

function CertificateGrid() {
  const certificates = [
    {
      id: 1,
      title: "React Developer",
      provider: "React Masterclass",
      date: "Aug 2026",
      icon: <FaAward />,
      color: "#3366e8",
    },
    {
      id: 2,
      title: "Spring Boot Expert",
      provider: "Backend Academy",
      date: "Jul 2026",
      icon: <FaMedal />,
      color: "#22c55e",
    },
    {
      id: 3,
      title: "Database Design",
      provider: "SQL Fundamentals",
      date: "Jun 2026",
      icon: <FaCertificate />,
      color: "#f59e0b",
    },
    {
      id: 4,
      title: "JavaScript Mastery",
      provider: "Frontend Academy",
      date: "May 2026",
      icon: <FaAward />,
      color: "#8b5cf6",
    },
    {
      id: 5,
      title: "Cloud Fundamentals",
      provider: "Cloud Learning",
      date: "Apr 2026",
      icon: <FaMedal />,
      color: "#06b6d4",
    },
    {
      id: 6,
      title: "REST API Developer",
      provider: "Spring Boot Masterclass",
      date: "Mar 2026",
      icon: <FaCertificate />,
      color: "#ef4444",
    },
  ];

  return (
    <div className="certificate-grid">
      <div className="row g-4">
        {certificates.map((certificate) => (
          <div className="col-lg-4" key={certificate.id}>
            <div className="certificate-card">
              <div
                className="certificate-icon"
                style={{ color: certificate.color }}
              >
                {certificate.icon}
              </div>

              <h4>{certificate.title}</h4>
              <p>{certificate.provider}</p>

              <span className="issue-date">
                Issued: {certificate.date}
              </span>

              <div className="certificate-actions">
                <button className="view-btn">
                  <FaEye /> View
                </button>

                <button className="download-btn">
                  <FaDownload /> Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificateGrid;