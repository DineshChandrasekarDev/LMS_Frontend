import ExploreHero from "./components/ExploreHero";
import CategorySection from "./components/CategorySection";
import PopularCourses from "./components/PopularCourses";
import TrendingCourses from "./components/TrendingCourses";
import TopCatagories from "../Home/components/TopCatagories";
import BecomeInstructor from "../Home/components/BecomeInstructor";

function ExploreCourses() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">

        {/* Left Section */}
        <div className="col-lg-9">
          <ExploreHero />
          <CategorySection />
          <PopularCourses />
        </div>

        {/* Right Section */}
        <div className="col-lg-3">
          <TopCatagories />
          <TrendingCourses />
          <BecomeInstructor />
        </div>

      </div>
    </div>
  );
}

export default ExploreCourses;