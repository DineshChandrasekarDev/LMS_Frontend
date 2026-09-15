import {
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";

import { SiSpringboot } from "react-icons/si";
import { BsThreeDotsVertical } from "react-icons/bs";

import "../../../css/explore/PopularCourses.css";

function PopularCourses() {
  const courses = [
    {
      badge: "Bestseller",
      icon: <FaJava />,
      title: "Java Full Stack Development",
      modules: "12 Modules • Intermediate",
      rating: "4.6",
      students: "(1.2K)",
      price: "₹799",
      progress: "65%",
    },
    {
      badge: "Popular",
      icon: <FaPython />,
      title: "Python For Beginners",
      modules: "10 Modules • Beginner",
      rating: "4.7",
      students: "(2.1K)",
      price: "₹599",
      progress: "75%",
    },
    {
      badge: "Trending",
      icon: <FaReact />,
      title: "React JS Masterclass",
      modules: "8 Modules • Intermediate",
      rating: "4.8",
      students: "(987)",
      price: "₹699",
      progress: "40%",
    },
    {
      badge: "Popular",
      icon: <SiSpringboot />,
      title: "Spring Boot Fundamentals",
      modules: "7 Modules • Intermediate",
      rating: "4.6",
      students: "(1.1K)",
      price: "₹699",
      progress: "50%",
    },
  ];

  return (
    <div className="popular-section">

      <div className="section-header">
        <h2>Popular Courses</h2>
        <a href="/">View All</a>
      </div>

      <div className="popular-grid">

        {courses.map((course, index) => (
          <div className="course-card" key={index}>

            <div className="card-top">

              <span className="course-badge">
                {course.badge}
              </span>

              <BsThreeDotsVertical />
            </div>

            <div className="course-icon">
              {course.icon}
            </div>

            <h4>{course.title}</h4>

            <p>{course.modules}</p>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: course.progress }}
              ></div>
            </div>

            <div className="course-footer">
              <span>
                ⭐ {course.rating} {course.students}
              </span>

              <strong>{course.price}</strong>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCourses;