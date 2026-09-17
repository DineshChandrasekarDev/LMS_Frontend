import BookmarksHero from "./components/BookmarksHero";
import BookmarkFilters from "./components/BookmarkFilters";
import BookmarkList from "./components/BookmarkList";
import RightBookmarkPanel from "./components/RightBookmarkPanel";

function Bookmarks() {
  return (
     <div className="container-fluid mt-4">
      <div className="row">

        <div className="col-lg-9">
          <BookmarksHero />
          <BookmarkFilters />
          <BookmarkList />
        </div>

        <div className="col-lg-3">
          <RightBookmarkPanel />
        </div>

      </div>
    </div>
  );
}

export default Bookmarks;