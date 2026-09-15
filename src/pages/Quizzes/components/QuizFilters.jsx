import "../../../css/quizzes/QuizFilters.css";

function QuizFilters() {
  return (
    <div className="quiz-filters-container">

      <div className="quiz-filter-buttons">
        <button className="quiz-filter-btn active">
          All Quizzes
        </button>

        <button className="quiz-filter-btn">
          My Quizzes
        </button>

        <button className="quiz-filter-btn">
          Due Soon
        </button>

        <button className="quiz-filter-btn">
          Completed
        </button>

        <button className="quiz-filter-btn">
          Not Attempted
        </button>
      </div>

      <select className="quiz-course-dropdown">
        <option>All Courses</option>
        <option>React</option>
        <option>Spring Boot</option>
        <option>Database</option>
        <option>Python</option>
      </select>

    </div>
  );
}

export default QuizFilters;