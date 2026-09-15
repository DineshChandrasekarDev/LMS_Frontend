import "../../../css/liveclasses/LiveClassBanner.css";
function LiveClassBanner() {
  return (
    <div className="live-banner">
      <div className="row align-items-center">

        <div className="col-md-6">
          <span className="live-badge">🔴 LIVE</span>

          <h1 className="live-title">
            Live Classes
          </h1>

          <p className="live-text">
            Join interactive sessions with industry experts.
          </p>

          <p className="live-text">
            Learn in real-time and ask questions directly.
          </p>

          <div className="banner-buttons">
            <button className="btn btn-primary">
              Join Next Class
            </button>

            <button className="btn btn-light">
              View Schedule
            </button>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Live Class"
            className="live-banner-img"
          />
        </div>

      </div>
    </div>
  );
}

export default LiveClassBanner;