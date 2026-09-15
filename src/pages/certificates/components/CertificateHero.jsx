import "../../../css/certificates/CertificateHero.css";
import certificateImg from "../../../assets/certificate.png";

function CertificateHero() {
  return (
    <div className="certificate-hero">

      <div className="hero-left">
        <span className="hero-tag">
          🏆 CERTIFICATES
        </span>

        <h1>
          Your Achievements
          <br />
          Matter
        </h1>

        <p>
          View and download your certificates.
          Keep learning and earn more to showcase
          your skills.
        </p>

        <button>
          Explore Courses →
        </button>
      </div>

      <div className="hero-right">
        <img
          src={certificateImg}
          alt="Certificate"
        />
      </div>

    </div>
  );
}

export default CertificateHero;