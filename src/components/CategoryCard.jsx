import { Link } from "react-router-dom";

function CategoryCard({ icon, title }) {
  return (
    <div className="category-card">
      <div className="category-icon">{icon}</div>

      <h3>{title}</h3>

      <Link to={`/quiz/${title}`}>
        Start Quiz →
      </Link>
    </div>
  );
}

export default CategoryCard;