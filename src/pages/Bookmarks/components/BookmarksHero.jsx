import "../../../css/bookmarks/BookmarksHero.css";
import BookmarkHeroImg from "../../../assets/bookmark-hero.png";

function BookmarksHero() {
  return (
    <div className="bookmarks-hero">

      <div className="bookmarks-left">

        <span className="bookmark-badge">
          🔖 BOOKMARKS
        </span>

        <h1>
          Saved Courses &
          <br />
          Learning Resources
        </h1>

        <p>
          Keep your favorite courses, lessons,
          articles and videos in one place.
        </p>

        <button className="explore-btn">
          Explore More Courses →
        </button>

      </div>

      <div className="bookmarks-right">
        <img
          src={BookmarkHeroImg}
          alt="Bookmarks Hero"
        />
      </div>

    </div>
  );
}

export default BookmarksHero;