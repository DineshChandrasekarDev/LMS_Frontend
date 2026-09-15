import HeroSection from "./components/HeroSection";
import CourseSection from "./components/CourseSection";
import TopCatagories from "./components/TopCatagories";
import BecomeInstructor from "./components/BecomeInstructor";
import TodaySchedule from "./components/TodaySchedule";
import RightPanel from "./components/RightPanel";

function Home() {
  return (
    <>
      <HeroSection />
      <CourseSection />
      <TopCatagories />
      <BecomeInstructor />
      <TodaySchedule />
      <RightPanel />
    </>
  );
}

export default Home;