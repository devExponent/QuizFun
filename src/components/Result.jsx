import React from "react";
import { QUESTIONS } from "../QUESTION_BANKS";
import { Score } from "../CALCULATE_SCORE";

const Result = ({ stats, userAnswers }) => {
  const { correct, omitted, wrong } = stats;
  const finalScore = Score(correct, QUESTIONS.length);
  const ommitedQuestions = Score(omitted, QUESTIONS.length);
  const wrongAnswers = Score(wrong, QUESTIONS.length);
  return (
    <div className="">
      <dialog
        open
        className="w-10/12 mx-auto lg:w-5/12 bg-[#0e163a80] text-white p-4"
      >
        <h2 className="text-xl md:text-2xl lg:text-5xl  font-bold text-center">
          QUIZ COMPLETED!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 text-center gap-3 my-4">
          <div className="flex flex-col text-red-500">
            <p className="font-bold text-3xl ">{ommitedQuestions} %</p>
            <p>SKIPPED</p>
          </div>
          <div className="flex flex-col text-green-500">
            <p className="font-bold text-3xl">{finalScore} %</p>
            <p>ANSWERED CORRECTLY</p>
          </div>

          <div className="flex flex-col text-yellow-500">
            <p className="font-bold text-3xl">{wrongAnswers} %</p>
            <p>ANSWERED INCORRECTLY</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">RESULTS</h1>
        </div>
        <div className="">
          {userAnswers.map((item, index) => (
            <div className="flex flex-col my-2">
              <h1 key={index}> {item.questions}</h1>
              <h2
                className={
                  item.answers === "No answer selected"
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {item.answers}{" "}
              </h2>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
};

export default Result;
