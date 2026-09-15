import "../../../css/certificates/CertificateFilters.css";

function CertificateFilters() {
  return (
    <div className="certificate-filters">
      <div className="filter-tabs">
        <button className="active">All Certificates</button>
        <button>Earned</button>
        <button>In Progress</button>
        <button>Recent</button>
      </div>

      <select className="certificate-category">
        <option>All Categories</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Database</option>
        <option>Cloud</option>
      </select>
    </div>
  );
}

export default CertificateFilters;