import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import LiveClassCard from "./LiveClassCard";

function UpcomingLiveClasses() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold mb-0">
          Upcoming Live Classes
        </h2>

        <a href="/" className="text-decoration-none">
          View All
        </a>
      </div>

      <div className="row g-4">

        <div className="col-lg-4">
          <LiveClassCard
            status="LIVE"
            statusBg="#FFE5E5"
            statusText="#FF4D4F"
            icon={<FaReact size={45} color="#61DBFB" />}
            title="React Masterclass"
            subtitle="Advanced Concepts & Hooks"
            instructor="John Smith"
            time="Today, 7:00 PM"
            students="120"
            isLive={true}
          />
        </div>

        <div className="col-lg-4">
          <LiveClassCard
            status="STARTS IN 2 HOURS"
            statusBg="#FFE5E5"
             statusText="#ff9f43"
            
            icon={<SiSpringboot size={45} color="#6DB33F" />}
            title="Spring Boot APIs"
            subtitle="Building REST APIs"
            instructor="David Miller"
            time="Today, 9:00 PM"
            students="85"
            isLive={false}
          />
        </div>

        <div className="col-lg-4">
          <LiveClassCard
            status="STARTS IN 5 HOURS"
             statusBg="#FFE5E5"
             statusText="#4c6ef5"
            icon={<FaPython size={45} color="#3776AB" />}
            title="Python For Beginners"
            subtitle="Variables & Functions"
            instructor="Sarah Wilson"
            time="Today, 11:00 PM"
            students="60"
            isLive={false}
          />
        </div>

      </div>
    </>
  );
}

export default UpcomingLiveClasses;