import React from "react";
import { QUESTIONS } from "../QUESTION_BANKS";
import { Score } from "../CALCULATE_SCORE";

const Result = ({ score, ommitted, wrong }) => {
  const finalScore = Score(score, QUESTIONS.length);
  const ommittedQuestions = Score(ommitted, QUESTIONS.length);
  const wrongAnswers = Score(wrong, QUESTIONS.length);
  return (
    <div>
      <dialog open>
        <p>Your Score is</p>
        <h1> {finalScore} %</h1>
        <h1> {ommittedQuestions} % </h1> <br />
        <h1> {wrongAnswers} %</h1>
      </dialog>
    </div>
  );
};

export default Result;
