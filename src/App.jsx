import { QUESTIONS } from "../src/QUESTION_BANKS.js";
import Header from "./components/Header.jsx";
import { useState, useEffect, useCallback } from "react";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinshed, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizStats, setQuizStats] = useState({
    correct: 0,
    wrong: 0,
    omitted: 0,
  });
  useEffect(() => {
    if (questionIndex >= QUESTIONS.length) {
      setIsFinished(true);
    }
  }, [questionIndex]);

  const NextQuestion = () => {
    const currentQuestion = QUESTIONS[questionIndex];

    setQuizStats((prev) => {
      if (selectedOption === null) {
        return { ...prev, omitted: prev.omitted + 1 };
      } else if (selectedOption === currentQuestion.correctAnswer) {
        return { ...prev, correct: prev.correct + 1 };
      } else {
        return { ...prev, wrong: prev.wrong + 1 };
      }
    });
    setQuestionIndex((next) => next + 1);
    setSelectedOption(null);
  };

  const chosenOption = (option) => {
    setSelectedOption(option);
  };

  const start = () => {
    setHasStarted(true);
    setQuestionIndex(0);
  };

  // const currentQuestion = QUESTIONS[questionIndex];

  return (
    <>
      <Header />

      {isFinshed ? (
        <Result stats={quizStats} />
      ) : !hasStarted ? (
        <div className="flex items-center justify-center min-h-screen">
          <button
            onClick={start}
            className="px-6 py-2 bg-red-500 text-white rounded"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <Quiz
          Question={QUESTIONS}
          questionIndex={questionIndex}
          NextQuestion={NextQuestion}
          chosenOption={chosenOption}
        />
      )}
    </>
  );
}

export default App;
