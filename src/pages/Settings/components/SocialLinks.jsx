import "../../../css/settings/SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links-card">

      <h3>Social Profiles</h3>

      <div className="social-form">

        <div className="social-group">
          <label>LinkedIn</label>
          <input
            type="text"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div className="social-group">
          <label>GitHub</label>
          <input
            type="text"
            placeholder="https://github.com/yourusername"
          />
        </div>

        <div className="social-group">
          <label>Portfolio Website</label>
          <input
            type="text"
            placeholder="https://yourportfolio.com"
          />
        </div>

        <div className="social-group">
          <label>Twitter / X</label>
          <input
            type="text"
            placeholder="https://x.com/yourprofile"
          />
        </div>

      </div>

      <button className="social-save-btn">
        Update Social Links
      </button>

    </div>
  );
}

export default SocialLinks;