import { QUESTIONS } from "../src/QUESTION_BANKS.js";
import Header from "./components/Header.jsx";
import { useState, useEffect, useCallback } from "react";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinshed, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [ommitted, setOmmitted] = useState(0);
  const [wrong, setWronng] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    if (questionIndex >= QUESTIONS.length) {
      setIsFinished(true);
    }
  }, [questionIndex]);

  const NextQuestion = () => {
    const currentQuestion = QUESTIONS[questionIndex];

    if (selectedOption === null) {
      setOmmitted((ommittedQues) => ommittedQues + 1);
    } else if (selectedOption === currentQuestion.correctAnswer) {
      setScore((score) => score + 1);
    } else {
      setWronng((wrongOpt) => wrongOpt + 1);
    }
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
      <h1> {score} right </h1>
      {ommitted} ommitted
      <br />
      {wrong} wrong
      <h1> {selectedOption} </h1>
      {isFinshed ? (
        <Result score={score} ommitted={ommitted} wrong={wrong} />
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
