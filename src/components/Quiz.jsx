import { useEffect } from "react";

const Quiz = ({ Question, questionIndex, NextQuestion, selectOption }) => {
  //   useEffect(() => {
  //     setInterval(() => {
  //       console.log("hhhh"    );
  //       NextQuestion();
  //     }, 3000);
  //   }, []);

  const currentQuestion = Question[questionIndex];
  return (
    <>
      <div id="quiz">
        <h1>{currentQuestion && Question[questionIndex].text}</h1>
        <ul className="my-2">
          {currentQuestion &&
            currentQuestion.options.map((option, index) => (
              <li key={`${currentQuestion.id}-${index}`}>
                <button onClick={() => selectOption(option)}>{option}</button>
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
