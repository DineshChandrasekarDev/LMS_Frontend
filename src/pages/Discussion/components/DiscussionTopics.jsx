import "../../../css/discussion/DiscussionTopics.css";

const posts = [
  {
    avatar: "AS",
    title:
      "How to handle state management in large React applications?",
    tag: "React",
    replies: 12,
    likes: 28
  },
  {
    avatar: "PK",
    title:
      "Difference between @RestController and @Controller in Spring Boot?",
    tag: "Spring Boot",
    replies: 8,
    likes: 16
  },
  {
    avatar: "RJ",
    title:
      "Best practices for database design?",
    tag: "Database",
    replies: 15,
    likes: 32
  }
];

function DiscussionTopics() {
  return (
    <div className="discussion-topics">

      {posts.map((post, index) => (
        <div className="topic-card" key={index}>

          <div className="topic-avatar">
            {post.avatar}
          </div>

          <div className="topic-content">

            <div className="topic-header">

              <h5>{post.title}</h5>

              <span className="topic-tag">
                {post.tag}
              </span>

            </div>

            <p>
              Sample discussion description goes here.
            </p>

            <div className="topic-footer">
              <span>💬 {post.replies}</span>
              <span>♡ {post.likes}</span>
            </div>

          </div>

        </div>
      ))}
    </div>
  );
}

export default DiscussionTopics;