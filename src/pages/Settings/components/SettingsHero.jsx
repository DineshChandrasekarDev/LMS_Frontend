import "../../../css/settings/SettingsHero.css";
import SettingsHeroImg from "../../../assets/settings-hero.png";

function SettingsHero() {
  return (
    <div className="settings-hero">

      <div className="settings-left">

        <span className="settings-badge">
          ⚙️ SETTINGS
        </span>

        <h1>
          Customize Your
          <br />
          Learning Experience
        </h1>

        <p>
          Manage your account, preferences and privacy
          settings to make learning work for you.
        </p>

        <button className="settings-btn">
          Manage Settings →
        </button>

      </div>

      <div className="settings-right">
        <img
          src={SettingsHeroImg}
          alt="Settings"
        />
      </div>

    </div>
  );
}

export default SettingsHero;