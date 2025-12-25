import { useEffect } from "react";
import TimeLimit from "./TimeLimit";

const Quiz = ({ Question, questionIndex, NextQuestion, chosenOption }) => {
  useEffect(() => {
    const Timer = setTimeout(() => {
      console.log("hhhh");
      NextQuestion();
    }, 10000);
    return () => clearTimeout(Timer);
  }, [questionIndex, NextQuestion]);

  const currentQuestion = Question[questionIndex];
  return (
    <>
      <div id="quiz">
        <TimeLimit questionIndex={questionIndex} />
        <h1 className="font-bold text-blue-500 text-xl">
          {currentQuestion && Question[questionIndex].text}
        </h1>
        <ul className="my-2">
          {currentQuestion &&
            currentQuestion.options.map((option, index) => (
              <li key={`${currentQuestion.id}-${index}`}>
                <button
                  onClick={() => chosenOption(option)}
                  className="hover:bg-stone-500 hover:w-full rounded-2xl p-4"
                >
                  {option}
                </button>
              </li>
            ))}
        </ul>
        {/* {currentoptions ? "hhh" : null} */}
        <h1 className="text-right">
          <button onClick={NextQuestion} className="bg-blue-500 px-3">
            Next
          </button>
        </h1>
      </div>
    </>
  );
};

export default Quiz;
