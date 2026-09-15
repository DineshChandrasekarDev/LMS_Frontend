import "../../../css/progress/CourseProgress.css";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

function CourseProgress() {

  const courses = [
    {
      icon: <FaReact />,
      title: "React Development",
      subtitle: "React for Beginners",
      progress: 80
    },
    {
      icon: <SiSpringboot />,
      title: "Spring Boot Masterclass",
      subtitle: "Build REST APIs",
      progress: 55
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      subtitle: "SQL & DB Concepts",
      progress: 100
    },
    {
      icon: <IoLogoJavascript />,
      title: "JavaScript Fundamentals",
      subtitle: "Web Development",
      progress: 70
    }
  ];

  return (
    <div className="course-progress-card">

      <div className="course-progress-header">
        <h3>📘 Course Progress</h3>
        <a href="/">View All</a>
      </div>

      {courses.map((course, index) => (
        <div className="course-row" key={index}>

          <div className="course-info">
            <div className="course-icon">
              {course.icon}
            </div>

            <div>
              <h6>{course.title}</h6>
              <span>{course.subtitle}</span>
            </div>
          </div>

          <div className="course-bar">
            <div
              className="course-fill"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>

          <div className="course-percent">
            {course.progress}%
          </div>

        </div>
      ))}

    </div>
  );
}

export default CourseProgress;