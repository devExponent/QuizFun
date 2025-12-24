import { QUESTIONS } from "../src/QUESTION_BANKS.js";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinshed, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (questionIndex >= QUESTIONS.length) {
      setIsFinished(true);
    }
  }, [questionIndex]);

  const NextQuestion = () => {
    setQuestionIndex((prev) => prev + 1);
  };

  const selectOption = (Selectedoption) => {
    const currentQuestion = QUESTIONS[questionIndex];
    if (Selectedoption === currentQuestion.correctAnswer) {
      console.log("right");
      setScore((dec) => dec + 1);
    } else {
      console.log("wrong");
    }
  };

  // const currentQuestion = QUESTIONS[questionIndex];

  return (
    <>
      <Header />
      <h1> {score} </h1>
      {isFinshed ? (
        <Result />
      ) : (
        <Quiz
          Question={QUESTIONS}
          questionIndex={questionIndex}
          NextQuestion={NextQuestion}
          selectOption={selectOption}
        />
      )}{" "}
    </>
  );
}

export default App;
