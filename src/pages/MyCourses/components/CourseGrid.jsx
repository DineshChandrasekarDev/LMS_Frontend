import CourseCard from "../components/CourseCard";

function CourseGrid() {
  return (
    <div className="row g-4">
      <div className="col-lg-4">
        <CourseCard
          title="Java Full Stack Development"
          modules="12 Modules"
          level="Intermediate"
          progress={75}
          lastAccessed="Today"
        />
      </div>

      <div className="col-lg-4">
        <CourseCard
          title="Python For Beginners"
          modules="10 Modules"
          level="Beginner"
          progress={80}
          lastAccessed="Yesterday"
        />
      </div>
      <div className="col-lg-4">
  <CourseCard
    title="React JS Masterclass"
    modules="8 Modules"
    level="Intermediate"
    progress={55}
    lastAccessed="2 days ago"
  />
</div>

<div className="col-lg-4">
  <CourseCard
    title="JavaScript Essentials"
    modules="9 Modules"
    level="Beginner"
    progress={65}
    lastAccessed="3 days ago"
  />
</div>

<div className="col-lg-4">
  <CourseCard
    title="MySQL Database"
    modules="6 Modules"
    level="Beginner"
    progress={60}
    lastAccessed="4 days ago"
  />
</div>

<div className="col-lg-4">
  <CourseCard
    title="Spring Boot Fundamentals"
    modules="7 Modules"
    level="Intermediate"
    progress={45}
    lastAccessed="5 days ago"
  />
</div>
    </div>
  );
}

export default CourseGrid;