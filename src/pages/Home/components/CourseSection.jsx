import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaJs,
} from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import "../../../css/home/CourseSection.css"
const courses = [
  {
    name: "Java",
    icon: <FaJava />,
    learners: "12.4K learners",
    progress: 75,
  },
  {
    name: "Python",
    icon: <FaPython />,
    learners: "18.7K learners",
    progress: 80,
  },
  {
    name: "React JS",
    icon: <FaReact />,
    learners: "11.5K learners",
    progress: 55,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    learners: "14.2K learners",
    progress: 65,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    learners: "8.6K learners",
    progress: 60,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    learners: "6.2K learners",
    progress: 45,
  },
];

function CourseSection() {
  return (
    <div className="container-fluid px-4 pb-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Popular Courses</h3>

        <button className="btn btn-outline-primary">
          View All
        </button>
      </div>

      <div className="row g-4">

        {courses.map((course, index) => (
          <div key={index} className="col-lg-4">

            <div className="course-card">

              <div className="course-icon">
                {course.icon}
              </div>

              <h5>{course.name}</h5>

              <p>{course.learners}</p>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <div className="mt-2 text-end">
                {course.progress}%
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default CourseSection;