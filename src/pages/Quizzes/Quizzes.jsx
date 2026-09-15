import QuizHero from "./components/QuizHero";
import QuizFilters from "./components/QuizFilters";
import AvailableQuizzes from "./components/AvailableQuizzes";
import RightQuizPanel from "./components/RightQuizPanel";

function Quizzes() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">

        {/* Left Section */}
        <div className="col-lg-9">
          <QuizHero />
          <QuizFilters />
          <AvailableQuizzes />
        </div>

        {/* Right Sidebar */}
        <div className="col-lg-3">
          <RightQuizPanel />
        </div>

      </div>
    </div>
  );
}

export default Quizzes;