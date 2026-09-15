import {
  FaBookOpen,
  FaCheckCircle,
  FaChartBar,
  FaFire
} from "react-icons/fa";

function StatsCards() {

  const stats = [
    {
      icon: <FaBookOpen />,
      title: "Total Courses",
      value: "18",
      sub: "+2 this month",
      bg: "#eef5ff"
    },
    {
      icon: <FaCheckCircle />,
      title: "Completed Courses",
      value: "12",
      sub: "67% completion",
      bg: "#edfdf5"
    },
    {
      icon: <FaChartBar />,
      title: "Average Quiz Score",
      value: "89%",
      sub: "+12% improvement",
      bg: "#f7efff"
    },
    {
      icon: <FaFire />,
      title: "Learning Streak",
      value: "24 Days",
      sub: "Keep it up!",
      bg: "#fff7eb"
    }
  ];

  return (
    <div className="row g-4">

      {stats.map((item,index)=>(
        <div className="col-md-3" key={index}>

          <div
            className="progress-stat-card"
            style={{ background: item.bg }}
          >
            <div className="icon-box">
              {item.icon}
            </div>

            <div>
              <h3>{item.value}</h3>
              <h6>{item.title}</h6>
              <small>{item.sub}</small>
            </div>

          </div>

        </div>
      ))}

    </div>
  );
}

export default StatsCards;