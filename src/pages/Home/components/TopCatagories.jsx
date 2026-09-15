import {
  FaLaptop,
  FaBriefcase,
  FaPalette,
  FaChartLine,
  FaHeart
} from "react-icons/fa";

import "../../../css/home/TopCatagories.css";

function TopCatagories() {
  const categories = [
    {
      icon: <FaLaptop />,
      name: "Development",
      count: 125,
      color: "blue"
    },
    {
      icon: <FaBriefcase />,
      name: "Business",
      count: 98,
      color: "green"
    },
    {
      icon: <FaPalette />,
      name: "Design",
      count: 76,
      color: "purple"
    },
    {
      icon: <FaChartLine />,
      name: "Data Science",
      count: 64,
      color: "orange"
    },
    {
      icon: <FaHeart />,
      name: "Health & Fitness",
      count: 42,
      color: "pink"
    }
  ];

  return (
    <div className="top-categories-card">
      <div className="categories-header">
        <h4>Top Categories</h4>
        <span>View All</span>
      </div>

      {categories.map((cat, index) => (
        <div className="category-row" key={index}>
          <div className="category-left">
            <div className={`category-icon ${cat.color}`}>
              {cat.icon}
            </div>

            <span>{cat.name}</span>
          </div>

          <strong>{cat.count}</strong>
        </div>
      ))}
    </div>
  );
}

export default TopCatagories;