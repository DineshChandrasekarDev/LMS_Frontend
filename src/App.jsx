import React from "react";
import LoginForm from "./pages/Auth/LoginForm";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import HeroSection from "./pages/Home/components/HeroSection";
import CourseSection from "./pages/Home/components/CourseSection";
import RightPanel from "./pages/Home/components/RightPanel";
import MyCourses from "./pages/MyCourses/MyCourses";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/css/layouts/Sidebar.css"
import ExploreCourses from "./pages/ExploreCourses/ExploreCourses";
import LiveClasses from "./pages/LiveClasses/LiveClasses";
import Assignments from "./pages/Assignments/Assignments";
import Quizzes from "./pages/Quizzes/Quizzes";
import Progress from "./pages/Progress/Progress";
import Certificates from "./pages/certificates/Certificates";
import Discussion from "./pages/Discussion/Discussion";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
    const [activePage, setActivePage] = useState("dashboard");

  return (
    <>
     {!isLoggedIn ? (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      ) : (

      <div className="d-flex">

<Sidebar setActivePage={setActivePage} />
        <div className="flex-grow-1 bg-light">

          <Header />

          {activePage === "dashboard" && (
  <div className="container-fluid mt-4">
    <div className="row">
      <div className="col-lg-9">
        <HeroSection />
        <CourseSection />
      </div>

      <div className="col-lg-3">
        <RightPanel />
      </div>
    </div>
  </div>
)}

{activePage === "courses" && (
  <MyCourses />
)}

{activePage === "explorecourses" && (
  <ExploreCourses />
)}
{activePage === "liveclasses" &&(<LiveClasses />)}
{activePage === "assignments" && (
  <Assignments />
)}
{activePage === "quizzes" && (
<Quizzes />
)}
{activePage === "progress" && (
<Progress />
)}
{activePage === "certificates" && (
<Certificates />
)}
{activePage === "discussion" && (
<Discussion />
)}
{activePage === "bookmarks" && (
<Bookmarks />
)}
{activePage === "profile" && (
<Profile />
)}
{activePage === "settings" && (
<Settings />
)}

        </div>

      </div>
      )}
    </>
  );
}

export default App;