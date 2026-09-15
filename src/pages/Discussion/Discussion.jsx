import DiscussionHero from "./components/DiscussionHero";
import DiscussionFilters from "./components/DiscussionFilters";
import DiscussionTopics from "./components/DiscussionTopics";
import RightDiscussionPanel from "./components/RightDiscussionPanel";

function Discussion() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">

        <div className="col-lg-9">
          <DiscussionHero />
          <DiscussionFilters />
          <DiscussionTopics />
        </div>

        <div className="col-lg-3">
          <RightDiscussionPanel />
        </div>

      </div>
    </div>
  );
}

export default Discussion;