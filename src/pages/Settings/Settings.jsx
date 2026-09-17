import SettingsHero from "./components/SettingsHero";
import SettingsTabs from "./components/SettingsTabs";
import ProfileSettings from "./components/ProfileSettings";
import SocialLinks from "./components/SocialLinks";
import RightSettingsPanel from "./components/RightSettingsPanel";

function Settings() {
  return (
    <div className="container-fluid mt-4">

      <SettingsHero />

      <SettingsTabs />

       <div className="row mt-4">

        <div className="col-lg-8">
          <ProfileSettings />
          <SocialLinks />   
        </div>

       <div className="col-lg-4">
          <RightSettingsPanel />
        </div>

      </div> 

    </div>
  );
}

export default Settings;