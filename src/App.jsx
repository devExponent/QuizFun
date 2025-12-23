import { QUESTIONS } from "../src/QUESTION_BANKS.js";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinshed, setIsFinished] = useState(false);
  useEffect(() => {
    if (questionIndex >= QUESTIONS.length) {
      setIsFinished(true);
    }
  }, [questionIndex]);

  const NextQuestion = () => {
    setQuestionIndex((prev) => prev + 1);
  };

  // const currentQuestion = QUESTIONS[questionIndex];

  return (
    <>
      <Header />

      <Quiz
        Question={QUESTIONS}
        questionIndex={questionIndex}
        NextQuestion={NextQuestion}
      />
    </>
  );
}

export default App;
