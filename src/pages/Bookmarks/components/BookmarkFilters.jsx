import "../../../css/bookmarks/BookmarkFilters.css";

function BookmarkFilters() {
  return (
    <div className="bookmark-filters">

      <div className="filter-buttons">
        <button className="active">All Bookmarks (12)</button>
        <button>Courses (8)</button>
        <button>Videos (2)</button>
        <button>Articles (1)</button>
        <button>Completed (1)</button>
      </div>

      <div className="filter-sort">
        <select>
          <option>Latest First</option>
          <option>Oldest First</option>
          <option>Most Viewed</option>
        </select>
      </div>

    </div>
  );
}

export default BookmarkFilters;