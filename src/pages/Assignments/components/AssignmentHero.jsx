import "../../../css/assignments/AssignmentHero.css"

function AssignmentHero() {
  return (
    <div className="assignment-banner">
      <div className="row align-items-center">

        <div className="col-md-6">

          <span className="assignment-badge">
            📝 ASSIGNMENTS
          </span>

          <h1 className="assignment-title">
            Assignments
          </h1>

          <p className="assignment-text">
            Complete and submit your assignments before deadlines.
          </p>

          <p className="assignment-text">
            Track progress, grades and feedback from instructors.
          </p>

          <div className="assignment-buttons">
            <button className="btn btn-primary">
              View Assignments
            </button>

            <button className="btn btn-light">
              Submission History
            </button>
          </div>

        </div>

        <div className="col-md-6 text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3976/3976626.png"
            alt="Assignments"
            className="assignment-banner-img"
          />

        </div>

      </div>
    </div>
  );
}

export default AssignmentHero;