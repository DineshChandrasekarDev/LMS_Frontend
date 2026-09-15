import AssignmentHero from "./components/AssignmentHero";
import UpcomingAssignments from "./components/UpComingAssignments";
import RecentlySubmitted from "./components/RecentlySubmitted";
import RightAssignmentPanel from "./components/RightAssignmentPanel";

function Assignments() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">

        <div className="col-lg-9">
          <AssignmentHero />
          <UpcomingAssignments />
          <RecentlySubmitted />
        </div>

        <div className="col-lg-3">
          <RightAssignmentPanel />
        </div>

      </div>
    </div>
  );
}

export default Assignments;