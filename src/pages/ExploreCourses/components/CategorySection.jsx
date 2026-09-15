import {
  FaLaptop,
  FaBriefcase,
  FaPalette,
  FaChartLine,
  FaHeart,
  FaBookOpen,
} from "react-icons/fa";

import "../../../css/explore/CategorySection.css";

function CategorySection() {
  const categories = [
    {
      icon: <FaLaptop />,
      title: "Development",
      courses: "125 Courses",
      bg: "#EEF2FF",
      color: "#4F6BFF",
    },
    {
      icon: <FaBriefcase />,
      title: "Business",
      courses: "98 Courses",
      bg: "#EAFBF3",
      color: "#22C55E",
    },
    {
      icon: <FaPalette />,
      title: "Design",
      courses: "76 Courses",
      bg: "#F4EAFE",
      color: "#A855F7",
    },
    {
      icon: <FaChartLine />,
      title: "Data Science",
      courses: "64 Courses",
      bg: "#FFF4E5",
      color: "#F59E0B",
    },
    {
      icon: <FaHeart />,
      title: "Health & Fitness",
      courses: "42 Courses",
      bg: "#FDECF2",
      color: "#EC4899",
    },
    {
      icon: <FaBookOpen />,
      title: "Personal Growth",
      courses: "58 Courses",
      bg: "#E8F3FF",
      color: "#3B82F6",
    },
  ];

  return (
    <div className="category-section">
      <h2 className="section-title">Browse by Category</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div
              className="category-icon"
              style={{
                backgroundColor: item.bg,
                color: item.color,
              }}
            >
              {item.icon}
            </div>

            <h5>{item.title}</h5>
            <p>{item.courses}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;