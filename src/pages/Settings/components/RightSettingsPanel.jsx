import "../../../css/settings/RightSettingsPanel.css";

function RightSettingsPanel() {
  return (
    <div className="right-settings-panel">

      {/* Account Status */}
      <div className="settings-side-card">
        <h4>🟢 Account Status</h4>

        <div className="status-item">
          <span>Profile Completion</span>
          <strong>85%</strong>
        </div>

        <div className="progress-line">
          <div className="progress-fill"></div>
        </div>

        <div className="status-item">
          <span>Email Verified</span>
          <span className="verified">✓ Verified</span>
        </div>

        <div className="status-item">
          <span>Phone Verified</span>
          <span className="verified">✓ Verified</span>
        </div>
      </div>

      {/* Security */}
      <div className="settings-side-card">
        <h4>🔒 Security Status</h4>

        <div className="status-item">
          <span>Password Strength</span>
          <strong>Strong</strong>
        </div>

        <div className="status-item">
          <span>Two Factor Auth</span>
          <strong>Enabled</strong>
        </div>

        <div className="status-item">
          <span>Last Login</span>
          <strong>Today</strong>
        </div>
      </div>

      {/* Learning Summary */}
      <div className="settings-side-card">
        <h4>📊 Learning Summary</h4>

        <div className="summary-item">
          <span>Courses</span>
          <strong>12</strong>
        </div>

        <div className="summary-item">
          <span>Certificates</span>
          <strong>5</strong>
        </div>

        <div className="summary-item">
          <span>Learning Hours</span>
          <strong>148h</strong>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="settings-side-card">
        <h4>⚡ Quick Actions</h4>

        <button className="quick-btn">
          Export Profile
        </button>

        <button className="quick-btn">
          Download Data
        </button>

        <button className="quick-btn danger-btn">
          Delete Account
        </button>
      </div>

    </div>
  );
}

export default RightSettingsPanel;