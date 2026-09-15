import "../../../css/progress/ProgressHero.css";
import progressImg from "../../../assets/progress.png";

function ProgressHero() {
  return (
    <div className="progress-hero">
      <div className="row align-items-center">
        <div className="col-md-7">
          <span className="hero-tag">📈 PROGRESS</span>

          <h1>
            Track Your <br />
            Learning Journey
          </h1>

          <p>
            Monitor course completion, learning streaks,
            achievements and overall growth.
          </p>

          <button>View Detailed Report →</button>
        </div>

        <div className="col-md-5 text-center">
          <img src={progressImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProgressHero;