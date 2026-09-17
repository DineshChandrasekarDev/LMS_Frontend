import "../../../css/settings/SettingsTabs.css";

function SettingsTabs() {
  return (
    <div className="settings-tabs">

      <button className="tab-btn active">
        Account Settings
      </button>

      <button className="tab-btn">
        Security
      </button>

      <button className="tab-btn">
        Notifications
      </button>

      <button className="tab-btn">
        Appearance
      </button>

      <button className="tab-btn">
        Privacy
      </button>

    </div>
  );
}

export default SettingsTabs;