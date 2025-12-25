import React from "react";
import { QUESTIONS } from "../QUESTION_BANKS";

const Result = ({ score }) => {
  let finalAnswer = ((score / QUESTIONS.length) * 100).toFixed(2);
  return (
    <div>
      <dialog open>
        <p>Your Score is</p>
        {finalAnswer} %
      </dialog>
    </div>
  );
};

export default Result;
