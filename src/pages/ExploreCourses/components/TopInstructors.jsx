import { FaStar } from "react-icons/fa";

function TopInstructors() {
  const instructors = [
    {
      name: "John Smith",
      role: "React Expert",
      rating: "4.9",
      image: "https://i.pravatar.cc/50?img=11",
    },
    {
      name: "Sarah Wilson",
      role: "Python Trainer",
      rating: "4.8",
      image: "https://i.pravatar.cc/50?img=32",
    },
    {
      name: "David Miller",
      role: "Spring Boot Mentor",
      rating: "4.7",
      image: "https://i.pravatar.cc/50?img=15",
    },
  ];

  return (
    <div className="card border-0 shadow-sm rounded-4 p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0">Top Instructors</h5>

        <a
          href="/"
          className="text-decoration-none small"
          onClick={(e) => e.preventDefault()}
        >
          View All
        </a>
      </div>

      {instructors.map((instructor, index) => (
        <div
          key={index}
          className={`d-flex align-items-center py-3 ${
            index !== instructors.length - 1
              ? "border-bottom"
              : ""
          }`}
        >
          <img
            src={instructor.image}
            alt={instructor.name}
            className="rounded-circle"
            width="50"
            height="50"
          />

          <div className="ms-3 flex-grow-1">
            <h6 className="mb-1 fw-semibold">
              {instructor.name}
            </h6>

            <small className="text-muted">
              {instructor.role}
            </small>
          </div>

          <div className="text-warning fw-semibold">
            <FaStar className="me-1" />
            {instructor.rating}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopInstructors;