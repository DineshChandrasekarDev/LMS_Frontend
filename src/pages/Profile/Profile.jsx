import LearningActivity from "./components/LearningActivity";
import ProfileHero from "./components/ProfileHero";
import ProfileStats from "./components/ProfileStats";
import RightProfilePanel from "./components/RightProfilePanel";

function Profile(){
    return(
        <div className="container-fluid mt-4">
      <div className="row">

        <div className="col-lg-9">
          <ProfileHero />
          <ProfileStats />
          <LearningActivity />
        </div>
        <div className="col-lg-3">
          <RightProfilePanel />
        </div>
      </div>
    </div>
    );
}
export default Profile;