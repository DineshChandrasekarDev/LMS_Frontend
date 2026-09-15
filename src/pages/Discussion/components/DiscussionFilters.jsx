import "../../../css/discussion/DiscussionFilters.css";

function DiscussionFilters() {
  return (
    <div className="discussion-filters">

      <div className="filter-buttons">
        <button className="filter-btn active">All Discussions</button>
        <button className="filter-btn">My Posts</button>
        <button className="filter-btn">Unanswered</button>
        <button className="filter-btn">Trending</button>
        <button className="filter-btn">Following</button>
      </div>

      <select className="course-filter">
        <option>Latest First</option>
        <option>Most Popular</option>
        <option>Most Replies</option>
      </select>

    </div>
  );
}

export default DiscussionFilters;