import "../../../css/profile/ProfileHero.css";
import ProfileHeroImg from "../../../assets/profile-hero.png";

function ProfileHero() {
  return (
    <div className="profile-hero">

      <div className="profile-hero-left">

        <span className="profile-badge">
          👤 PROFILE
        </span>

        <h1>
          Your Learning
          <br />
          Journey Matters
        </h1>

        <p>
          Manage your profile, track your progress and
          keep building a better version of yourself.
        </p>

        <button className="profile-btn">
          Edit Profile →
        </button>

      </div>

      <div className="profile-hero-right">
        <img
          src={ProfileHeroImg}
          alt="Profile Hero"
        />
      </div>

    </div>
  );
}

export default ProfileHero;