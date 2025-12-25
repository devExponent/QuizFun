import React from "react";
import { QUESTIONS } from "../QUESTION_BANKS";
import { Score } from "../CALCULATE_SCORE";

const Result = ({ score, ommitted, wrong }) => {
  const finalScore = Score(score, QUESTIONS.length);
  const ommittedQuestions = Score(ommitted, QUESTIONS.length);
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
            <p className="font-bold text-3xl ">{ommittedQuestions} %</p>
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
      </dialog>
    </div>
  );
};

export default Result;
