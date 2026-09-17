import "../../../css/bookmarks/RightBookmarkPanel.css";

function RightBookmarkPanel() {
  return (
    <div className="right-bookmark-panel">

      {/* Statistics */}
      <div className="bookmark-side-card">
        <h4>📊 Bookmark Overview</h4>

        <div className="stat-item">
          <span>📚 Courses</span>
          <strong>8</strong>
        </div>

        <div className="stat-item">
          <span>🎥 Videos</span>
          <strong>2</strong>
        </div>

        <div className="stat-item">
          <span>📄 Articles</span>
          <strong>1</strong>
        </div>

        <div className="stat-item">
          <span>✅ Completed</span>
          <strong>1</strong>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="bookmark-side-card">
        <h4>🔥 Recently Viewed</h4>

        <ul>
          <li>React Advanced Concepts</li>
          <li>Spring Security Guide</li>
          <li>JavaScript ES2026</li>
          <li>Database Masterclass</li>
        </ul>
      </div>

      {/* Favorite Categories */}
      <div className="bookmark-side-card">
        <h4>⭐ Favorite Categories</h4>

        <div className="category-item">
          <span>React</span>
          <span>12</span>
        </div>

        <div className="category-item">
          <span>Spring Boot</span>
          <span>8</span>
        </div>

        <div className="category-item">
          <span>JavaScript</span>
          <span>6</span>
        </div>

        <div className="category-item">
          <span>Database</span>
          <span>4</span>
        </div>
      </div>

      {/* Tips */}
      <div className="bookmark-side-card">
        <h4>💡 Bookmark Tips</h4>

        <ul>
          <li>Save useful learning resources</li>
          <li>Organize by category</li>
          <li>Review bookmarks weekly</li>
          <li>Complete saved courses</li>
        </ul>
      </div>

    </div>
  );
}

export default RightBookmarkPanel;