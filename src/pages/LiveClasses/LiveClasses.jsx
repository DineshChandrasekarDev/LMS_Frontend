import React from "react";
import LiveClassBanner from "./components/LiveClassBanner";
import UpcomingLiveClasses from "./components/UpcomingLiveClasses";
import TopInstructors from "../ExploreCourses/components/TopInstructors";
import UpcomingClassSidebar from "./components/UpcomingClassSidebar";
import RecentRecordings from "./components/RecentRecordings";
import TodaySchedule from "../Home/components/TodaySchedule";

function LiveClasses() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">

        {/* Left Section */}
        <div className="col-lg-9">
          <LiveClassBanner />

          <div className="mt-4">
            <UpcomingLiveClasses />
          </div>
          <div className="mt-4">
            <TodaySchedule />
          </div>

        </div>

        {/* Right Section */}
        <div className="col-lg-3">
          <TopInstructors />

          <div className="mt-4">
            <UpcomingClassSidebar />
          </div>

          <div className="mt-4">
            <RecentRecordings />
          </div>
        </div>

      </div>
    </div>
  );
}

export default LiveClasses;