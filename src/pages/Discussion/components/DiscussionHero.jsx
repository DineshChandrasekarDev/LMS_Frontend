import "../../../css/discussion/DiscussionHero.css";
import DiscussionImg from "../../../assets/discussions.png"
function DiscussionHero() {
  return (
    <div className="discussion-hero">

      <div className="discussion-left">
        <span className="discussion-badge">
          💬 DISCUSSION
        </span>

        <h1>
          Learn Together
          <br />
          Grow Together
        </h1>

        <p>
          Ask questions, share knowledge,
          and connect with fellow learners.
        </p>

        <button>
          Start a Discussion →
        </button>
      </div>

      <div className="discussion-right">
        <img
         src={DiscussionImg}
          alt=""
        />
      </div>

    </div>
  );
}

export default DiscussionHero;