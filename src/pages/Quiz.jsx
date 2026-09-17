import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import QuestionCard from "../components/QuestionCard";
import Option from "../components/Option";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";

import questions from "../data/questions";

function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();

  const quizQuestions = questions
    .filter(
      (q) =>
        q.category.toLowerCase() === category.toLowerCase()
    )
    .slice(0, 5);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);

  // Store every answer
  const [answers, setAnswers] = useState([]);

  const [time, setTime] = useState(60);

  // Timer
  useEffect(() => {
    if (quizQuestions.length === 0) return;

    const timer = setInterval(() => {

      setTime((prev) => {

        if (prev <= 1) {

          clearInterval(timer);

          navigate("/result", {
            state: {
              score,
              total: quizQuestions.length,
              review: answers,
            },
          });

          return 0;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // No questions
  if (quizQuestions.length === 0) {
    return (
      <div className="dashboard-layout">

        <Sidebar />

        <main className="dashboard-main">
          <h1>No questions found.</h1>
        </main>

      </div>
    );
  }

  const question = quizQuestions[current];

  // Next button
  const handleNext = () => {

    const isCorrect =
      selected === question.answer;

    const newScore =
      isCorrect ? score + 1 : score;

    // Save current answer
    const answerData = {
      id: question.id,
      question: question.question,
      selectedAnswer: selected,
      correctAnswer: question.answer,
    };

    const updatedAnswers = [
      ...answers,
      answerData,
    ];

    setAnswers(updatedAnswers);

    if (isCorrect) {
      setScore(newScore);
    }

    // Next question
    if (current < quizQuestions.length - 1) {

      setCurrent(current + 1);

      setSelected("");

    } else {

      // Finish quiz
      navigate("/result", {
        state: {
          score: newScore,
          total: quizQuestions.length,
          review: updatedAnswers,
        },
      });
    }
  };

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="quiz-main">

        {/* Header */}
        <div className="quiz-top">

          <h1>{category} Quiz</h1>

          <Timer time={time} />

        </div>

        {/* Progress */}
        <ProgressBar
          current={current + 1}
          total={quizQuestions.length}
        />

        {/* ONE QUESTION */}
        <QuestionCard
          question={question.question}
          currentQuestion={current + 1}
          totalQuestions={quizQuestions.length}
        />

        {/* Options */}
        <div className="options">

          {question.options.map((option) => (

            <Option
              key={option}
              option={option}
              selected={selected === option}
              onClick={() => setSelected(option)}
            />

          ))}

        </div>

        {/* Next */}
        <button
          className="next-button"
          onClick={handleNext}
          disabled={!selected}
        >

          {current === quizQuestions.length - 1
            ? "Finish Quiz"
            : "Next Question →"}

        </button>

      </main>

    </div>
  );
}

export default Quiz;