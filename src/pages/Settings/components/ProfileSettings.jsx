import "../../../css/settings/ProfileSettings.css";

function ProfileSettings() {
  return (
    <div className="profile-settings-card">

      <div className="settings-header">
        <h3>Profile Information</h3>
        <button className="save-btn">
          Save Changes
        </button>
      </div>

      <div className="profile-avatar-section">
        <img
          src="https://i.pravatar.cc/120"
          alt="Profile"
          className="profile-avatar"
        />

        <div>
          <h5>Dinesh Chandrasekar</h5>
          <p>Full Stack Developer</p>

          <button className="upload-btn">
            Change Photo
          </button>
        </div>
      </div>

      <div className="profile-form">

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value="Dinesh Chandrasekar"
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value="dinesh@example.com"
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value="+91 9876543210"
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value="Chennai, India"
            readOnly
          />
        </div>

        <div className="form-group full-width">
          <label>Bio</label>
          <textarea
            rows="4"
            readOnly
            value="Passionate Full Stack Developer focused on React, Spring Boot and modern web technologies."
          />
        </div>

      </div>

    </div>
  );
}

export default ProfileSettings;