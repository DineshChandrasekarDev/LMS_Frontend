import "../../../css/bookmarks/BookmarkList.css";

function BookmarkList() {
  const bookmarks = [
    {
      title: "React Advanced Concepts",
      type: "Course",
      progress: "75%",
      category: "React",
      icon: "⚛️",
    },
    {
      title: "Spring Boot Security Guide",
      type: "Article",
      progress: "100%",
      category: "Spring Boot",
      icon: "🍃",
    },
    {
      title: "JavaScript ES2026 Features",
      type: "Video",
      progress: "45%",
      category: "JavaScript",
      icon: "📺",
    },
    {
      title: "Database Design Masterclass",
      type: "Course",
      progress: "90%",
      category: "Database",
      icon: "🗄️",
    },
  ];

  return (
    <div className="bookmark-grid">
      <div className="bookmark-grid-header">
        <h2>Saved Resources</h2>
        <a href="/">View All</a>
      </div>

      {bookmarks.map((item, index) => (
        <div className="bookmark-card" key={index}>
          <div className="bookmark-icon">
            {item.icon}
          </div>

          <div className="bookmark-content">
            <h5>{item.title}</h5>
            <p>{item.type}</p>

            <div className="bookmark-meta">
              <span>{item.category}</span>
              <span>{item.progress} Completed</span>
            </div>
          </div>

          <button className="bookmark-btn">
            Continue
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookmarkList;