import React from "react";
import { FaJava, FaPython } from "react-icons/fa";
import "../../../css/home/RightPanel.css"
function RightPanel() {
  return (
    <div className="right-panel">
        <div className="widget-card mb-4">

  <h4 className="mb-4">My Progress</h4>

  <div className="d-flex justify-content-between mb-2">
    <span>Overall Progress</span>
    <strong>68%</strong>
  </div>

  <div className="progress mb-4">
    <div
      className="progress-bar bg-success"
      style={{ width: "68%" }}
    ></div>
  </div>

  <div className="row text-center">
    <div className="col">
      <h5>12</h5>
      <small>Enrolled</small>
    </div>

    <div className="col">
      <h5>8</h5>
      <small>Completed</small>
    </div>

    <div className="col">
      <h5>5</h5>
      <small>Certificates</small>
    </div>
  </div>

</div>
      {/* Continue Learning */}
      <div className="widget-card">
        <div className="d-flex justify-content-between mb-3">
          <h5>Continue Learning</h5>
          <a href="#">View All</a>
        </div>

        <div className="course-progress">
          <FaPython className="widget-icon" />
          <div className="flex-grow-1">
            <h6>Python for Beginners</h6>
            <div className="progress">
              <div
                className="progress-bar bg-primary"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <span>80%</span>
        </div>

        <div className="course-progress mt-4">
          <FaJava className="widget-icon" />
          <div className="flex-grow-1">
            <h6>Java Programming</h6>
            <div className="progress">
              <div
                className="progress-bar bg-primary"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <span>75%</span>
        </div>

      </div>

      {/* Live Classes */}
      <div className="widget-card mt-4">

        <div className="d-flex justify-content-between mb-3">
          <h5>Upcoming Live Classes</h5>
          <a href="#">View All</a>
        </div>

        <div className="live-item">
          <div>
            <strong>Data Structures in Java</strong>
            <p>Today, 7:00 PM</p>
          </div>

          <span className="badge bg-primary">
            Live
          </span>
        </div>

        <div className="live-item">
          <div>
            <strong>Python Web Development</strong>
            <p>Fri, 7:00 PM</p>
          </div>

          <span className="badge bg-primary">
            Live
          </span>
        </div>

      </div>

      {/* Announcements */}
      <div className="widget-card mt-4">

        <h5>Announcements</h5>

        <div className="announcement-box">
          <h6>New Course Released!</h6>

          <p>
            Learn Spring Boot from scratch.
            Enroll now and get 20% OFF.
          </p>
        </div>

      </div>

    </div>
  );
}

export default RightPanel;