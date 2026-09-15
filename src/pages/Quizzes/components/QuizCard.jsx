import { FaClock, FaListUl } from "react-icons/fa";

function QuizCard({
  icon,
  title,
  category,
  description,
  duration,
  questions,
  status,
  buttonText
}) {
  return (
    <div className="quiz-card">

      <div className="quiz-card-header">
        <div className="quiz-icon">{icon}</div>

        <div>
          <h5>{title}</h5>
          <span>{category}</span>
        </div>
      </div>

      <p className="quiz-description">
        {description}
      </p>

      <div className="quiz-meta">
        <span>
          <FaClock /> {duration}
        </span>

        <span>
          <FaListUl /> {questions}
        </span>

        <span className="quiz-status">
          {status}
        </span>
      </div>

      <button className="quiz-btn">
        {buttonText}
      </button>

    </div>
  );
}

export default QuizCard;