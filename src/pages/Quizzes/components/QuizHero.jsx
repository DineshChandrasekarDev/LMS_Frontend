import "../../../css/quizzes/QuizHero.css";
import { FaArrowRight } from "react-icons/fa";
import quizImage from "../../../assets/quiz.jpeg";

function QuizHero() {
  return (
    <div className="quiz-hero">
      <div className="row align-items-center h-100">

        <div className="col-lg-6">
          <span className="quiz-badge">
            📝 QUIZZES
          </span>

          <h1>
            Test Your
            <br />
            Knowledge
          </h1>

          <p>
            Take quizzes, challenge yourself and
            track your progress.
          </p>

          <button className="quiz-btn">
            Start a Quiz <FaArrowRight />
          </button>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src={quizImage}
            alt=""
            className="quiz-hero-img"
          />
        </div>

      </div>
    </div>
  );
}

export default QuizHero;