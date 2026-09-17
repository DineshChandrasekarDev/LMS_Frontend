import React from "react";
import {
  FaHome,
  FaBook,
  FaSearch,
  FaVideo,
  FaClipboardList,
  FaQuestionCircle,
  FaChartBar,
  FaCertificate,
  FaComments,
  FaBookmark,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaGraduationCap
} from "react-icons/fa";

const Sidebar = ({ setActivePage }) => {
    const menuItems = [
  { icon: <FaHome />, text: "Home", page: "dashboard" },
  { icon: <FaBook />, text: "My Courses", page: "courses" },
    { icon: <FaSearch />, text: "Explore Courses", page:"explorecourses"},
    { icon: <FaVideo />, text: "Live Classes", page:"liveclasses"},
    { icon: <FaClipboardList />, text: "Assignments", page:"assignments" },
    { icon: <FaQuestionCircle />, text: "Quizzes",page:"quizzes" },
    { icon: <FaChartBar />, text: "Progress",page:"progress" },
    { icon: <FaCertificate />, text: "Certificates",page:"certificates" },
    { icon: <FaComments />, text: "Discussion" ,page:"discussion" },
    { icon: <FaBookmark />, text: "Bookmarks" ,page:"bookmarks"},
    { icon: <FaUser />, text: "Profile" ,page:"profile"},
    { icon: <FaCog />, text: "Settings" ,page:"settings"}
  ];
const handleLogout = () => {
  localStorage.removeItem("loggedIn");
  window.location.reload();
};
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo-section">
        <FaGraduationCap className="logo-icon" />
        <div>
          <h3>LMS</h3>
          <p>Learn. Practice. Grow.</p>
        </div>
      </div>

      {/* Menu */}
      <ul className="menu-list">
        {menuItems.map((item, index) => (
         <li
  key={index}
  className="menu-item"
  onClick={() => item.page && setActivePage(item.page)}
>
  {item.icon}
  <span>{item.text}</span>
</li>
        ))}
      </ul>

      {/* Logout */}
      <div className="logout-section">
        <FaSignOutAlt />
       <span onClick={handleLogout}>
  Logout
</span>
      </div>
    </div>
  );
};

export default Sidebar;