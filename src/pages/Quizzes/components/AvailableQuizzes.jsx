import "../../../css/quizzes/AvailableQuizzes.css";
import QuizCard from "./QuizCard";

import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCloud } from "react-icons/fa";

function AvailableQuizzes() {
  return (
    <div className="available-quizzes">

      <div className="section-header">
        <h2>Available Quizzes</h2>
        <a href="/">View All</a>
      </div>

      <div className="row g-4">

        <div className="col-lg-4">
          <QuizCard
            icon={<FaReact />}
            title="React Basics Quiz"
            category="React for Beginners"
            description="Test your understanding of React fundamentals."
            duration="20 mins"
            questions="20 Questions"
            status="Not Attempted"
            buttonText="Start Quiz"
          />
        </div>

        <div className="col-lg-4">
          <QuizCard
            icon={<SiSpringboot />}
            title="Spring Boot Fundamentals"
            category="Spring Boot Masterclass"
            description="Assess your Spring Boot knowledge."
            duration="30 mins"
            questions="25 Questions"
            status="Not Attempted"
            buttonText="Start Quiz"
          />
        </div>

        <div className="col-lg-4">
          <QuizCard
            icon={<FaDatabase />}
            title="Database Concepts"
            category="Database Design"
            description="SQL, normalization and relationships."
            duration="25 mins"
            questions="20 Questions"
            status="In Progress"
            buttonText="Continue Quiz"
          />
        </div>

      </div>
    </div>
  );
}

export default AvailableQuizzes;