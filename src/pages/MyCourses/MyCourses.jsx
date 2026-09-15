import CourseGrid from "./components/CourseGrid"
import RightCoursePanel from "./components/RightCoursePanel";

function MyCourses() {
  return (
    <div className="p-4">

      <div className="row g-4">

        {/* Left Content */}
        <div className="col-lg-9">

          {/* Header + Search */}
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">

            <div>
              <h1 className="fw-bold mb-1">My Courses</h1>
              <p className="text-muted mb-0">
                Continue your learning journey
              </p>
            </div>

            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search my courses..."
                style={{
                  width: "260px",
                  height: "46px",
                  borderRadius: "12px",
                }}
              />

              <select
                className="form-select"
                style={{
                  width: "120px",
                  height: "46px",
                  borderRadius: "12px",
                }}
              >
                <option>Recent</option>
                <option>Name</option>
                <option>Progress</option>
              </select>
            </div>

          </div>

          {/* Filter Buttons */}
          <div className="d-flex gap-2 flex-wrap mb-4">
            <button className="btn btn-primary px-4">
              All Courses
            </button>

            <button className="btn btn-outline-secondary px-4">
              In Progress
            </button>

            <button className="btn btn-outline-secondary px-4">
              Completed
            </button>

            <button className="btn btn-outline-secondary px-4">
              Wishlist
            </button>
          </div>

          {/* Course Grid */}
          <CourseGrid />

        </div>

        {/* Right Panel */}
        <div className="col-lg-3">
          <RightCoursePanel />
        </div>

      </div>

    </div>
  );
}

export default MyCourses;