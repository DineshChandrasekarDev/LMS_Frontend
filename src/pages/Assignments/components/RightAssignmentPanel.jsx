import AssignmentStats from "./AssignmentStats";
import RecentSubmissionsPanel from "./RecentSubmissionsPanel";
import UpcomingDeadlines from "./UpcomingDeadlines";

function RightAssignmentPanel() {
  return (
    <>
      <AssignmentStats />
      <UpcomingDeadlines />
      <RecentSubmissionsPanel />
    </>
  );
}

export default RightAssignmentPanel;