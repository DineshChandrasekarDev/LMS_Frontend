import "../../../css/discussion/RightDiscussionPanel.css";

function RightDiscussionPanel() {
  return (
    <>

      <div className="community-card">

        <div className="panel-header">
          <h4>Community Overview</h4>
          <a href="#">View All</a>
        </div>

        <div className="overview-item">
          💬 <span>256 Discussions</span>
        </div>

        <div className="overview-item">
          ↩️ <span>1.2K Replies</span>
        </div>

        <div className="overview-item">
          👥 <span>950 Learners</span>
        </div>

      </div>

      <div className="community-card">

        <h4>Popular Topics</h4>

        <div className="topic-row">
          React <span>42</span>
        </div>

        <div className="topic-row">
          Spring Boot <span>38</span>
        </div>

        <div className="topic-row">
          JavaScript <span>35</span>
        </div>

        <div className="topic-row">
          Database <span>28</span>
        </div>

      </div>

      <div className="community-card">

        <h4>Community Guidelines</h4>

        <ul>
          <li>Be respectful</li>
          <li>Ask clear questions</li>
          <li>Share resources</li>
          <li>No spam content</li>
        </ul>

      </div>

    </>
  );
}

export default RightDiscussionPanel;