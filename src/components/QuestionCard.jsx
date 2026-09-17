function QuestionCard({ question, currentQuestion, totalQuestions }) {
  return (
    <div className="question-card">

      <p className="question-number">
        Question {currentQuestion} / {totalQuestions}
      </p>

      <h2>{question}</h2>

    </div>
  );
}

export default QuestionCard;