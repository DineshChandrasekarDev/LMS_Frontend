import ProgressHero from "./components/ProgressHero";
import ProgressStats from "./components/ProgressStats";
import LearningAnalytics from "./components/LearningAnalytics";
import CourseProgress from "./components/CourseProgress";
import RightProgressPanel from "./components/RightProgressPanel";

function Progress() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">

        {/* Left Content */}
        <div className="col-lg-9">
          <ProgressHero />
          <ProgressStats />
          <LearningAnalytics />
          <CourseProgress />
        </div>

        {/* Right Sidebar */}
        <div className="col-lg-3">
          <RightProgressPanel />
        </div>

      </div>
    </div>
  );
}

export default Progress;