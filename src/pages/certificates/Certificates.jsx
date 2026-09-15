import CertificateHero from "./components/CertificateHero";
import CertificateFilters from "./components/CertificateFilters";
import CertificateGrid from "./components/CertificateGrid";
import RightCertificatePanel from "./components/RightCertificatePanel";

function Certificates() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">

        <div className="col-lg-9">
          <CertificateHero />
          <CertificateFilters />
          <CertificateGrid />
        </div>

        <div className="col-lg-3">
          <RightCertificatePanel />
        </div>

      </div>
    </div>
  );
}

export default Certificates;