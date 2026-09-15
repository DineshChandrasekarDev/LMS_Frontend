import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

import AssignmentCard from "./AssignmentCard";

function UpcomingAssignments() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold mb-0">
          Upcoming Assignments
        </h2>

        <a href="/" className="text-decoration-none">
          View All
        </a>
      </div>

      <div className="row g-4">

        <div className="col-lg-4">
          <AssignmentCard
            status="DUE TOMORROW"
            statusColor="#ff6b6b"
            icon={<FaReact size={45} color="#61DBFB" />}
            title="React Dashboard Project"
            description="Build a complete LMS dashboard using React and Bootstrap."
            instructor="John Smith"
            dueDate="Sep 10, 2026"
            progress="80% Complete"
            buttonText="Continue Assignment"
          />
        </div>

        <div className="col-lg-4">
          <AssignmentCard
            status="DUE IN 3 DAYS"
            statusColor="#ff9f43"
            icon={<SiSpringboot size={45} color="#6DB33F" />}
            title="Spring Boot API"
            description="Create REST APIs for course management."
            instructor="David Miller"
            dueDate="Sep 13, 2026"
            progress="40% Complete"
            buttonText="Continue Assignment"
          />
        </div>

        <div className="col-lg-4">
          <AssignmentCard
            status="DUE IN 5 DAYS"
            statusColor="#845ef7"
            icon={<FaDatabase size={45} color="#228be6" />}
            title="Database Design"
            description="Design and submit ER diagram for LMS database."
            instructor="Sarah Wilson"
            dueDate="Sep 15, 2026"
            progress="Not Started"
            buttonText="Start Assignment"
          />
        </div>

      </div>
    </>
  );
}

export default UpcomingAssignments;