import { QUESTIONS } from "../src/QUESTION_BANKS.js";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinshed, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    if (questionIndex >= QUESTIONS.length) {
      setIsFinished(true);
    }
  }, [questionIndex]);

  const NextQuestion = () => {
    const currentQuestion = QUESTIONS[questionIndex];
    setQuestionIndex((prev) => prev + 1);

    if (selectedOption === null) {
      console.log("skipped");
    } else if (selectedOption === currentQuestion.correctAnswer) {
      console.log("correct");
    } else {
      console.log("wrong");
    }

    setSelectedOption(null);
  };

  const chosenOption = (option) => {
    setSelectedOption(option);
  };

  // const currentQuestion = QUESTIONS[questionIndex];

  return (
    <>
      <Header />
      <h1> {score} </h1>
      <h1> {selectedOption} </h1>
      {isFinshed ? (
        <Result />
      ) : (
        <Quiz
          Question={QUESTIONS}
          questionIndex={questionIndex}
          NextQuestion={NextQuestion}
          chosenOption={chosenOption}
        />
      )}{" "}
    </>
  );
}

export default App;
