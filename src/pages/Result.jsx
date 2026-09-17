import { Link, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Result() {

  const location = useLocation();

  const score = location.state?.score || 0;

  const total = location.state?.total || 0;

  const review = location.state?.review || [];

  const percentage =
    total > 0
      ? Math.round((score / total) * 100)
      : 0;

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="result-main">

        <div className="result-card">

          <div className="result-icon">
            🏆
          </div>

          <h1>Quiz Completed!</h1>

          <p>
            Great job! Here is your result.
          </p>

          {/* Score */}
          <div className="score-circle">

            <strong>
              {percentage}%
            </strong>

            <span>
              Score
            </span>

          </div>

          {/* Result Information */}
          <div className="result-info">

            <div>
              <strong>{score}</strong>
              <span>Correct</span>
            </div>

            <div>
              <strong>
                {total - score}
              </strong>
              <span>Wrong</span>
            </div>

            <div>
              <strong>{total}</strong>
              <span>Total</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="result-buttons">

            <Link
              to="/answer-review"
              state={{
                review: review,
              }}
            >
              📝 Answer Review
            </Link>

            <Link to="/categories">
              Try Another Quiz
            </Link>

            <Link to="/dashboard">
              Dashboard
            </Link>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Result;