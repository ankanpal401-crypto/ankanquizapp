import { Link, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AnswerReview() {
  const location = useLocation();

  const review = location.state?.review || [];

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        <div className="review-header">
          <h1>Answer Review</h1>
          <p>Review your answers and learn from your mistakes.</p>
        </div>

        {review.length === 0 ? (
          <div className="question-card">
            <h2>No answer review available.</h2>

            <Link to="/categories">
              Try Another Quiz
            </Link>
          </div>
        ) : (
          <div className="review-list">

            {review.map((item, index) => {

              const isCorrect =
                item.selectedAnswer === item.correctAnswer;

              return (
                <div
                  className={`review-card ${
                    isCorrect ? "correct" : "wrong"
                  }`}
                  key={item.id}
                >

                  <div className="review-question-number">
                    Question {index + 1}
                  </div>

                  <h2>{item.question}</h2>

                  <div className="review-answer">

                    <p>
                      <strong>Your Answer:</strong>{" "}
                      {item.selectedAnswer || "Not Answered"}

                      <span>
                        {isCorrect ? " ✓" : " ✕"}
                      </span>
                    </p>

                    <p>
                      <strong>Correct Answer:</strong>{" "}
                      {item.correctAnswer}
                      {" ✓"}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>
        )}

        <div className="review-buttons">

          <Link to="/categories">
            Try Another Quiz
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

        </div>

      </main>
    </div>
  );
}

export default AnswerReview;