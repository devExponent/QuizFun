import { QUESTIONS } from "../src/QUESTION_BANKS.js";
import Header from "./components/Header.jsx";
import { useState, useCallback } from "react";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinshed, setIsFinished] = useState(false);
  // const currentQuestion = Question[questionIndex];

  const NextQuestion = () => {
    const nextIndex = questionIndex + 1;

    if (nextIndex >= QUESTIONS.length) {
      setIsFinished(true);
    } else {
      setQuestionIndex(nextIndex);
    }
  };

  // const currentQuestion = QUESTIONS[questionIndex];

  return (
    <>
      <Header />
      {isFinshed ? (
        <Result />
      ) : (
        <Quiz
          Question={QUESTIONS}
          questionIndex={questionIndex}
          NextQuestion={NextQuestion}
        />
      )}
    </>
  );
}

export default App;
