import React from "react";

const Result = ({ score }) => {
  return (
    <div>
      <dialog open>
        <p>Your Score is</p>
        {score}
      </dialog>
    </div>
  );
};

export default Result;
