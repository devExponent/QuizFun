import { useState, useEffect } from "react";
const Timer = 10000;
const TimeLimit = ({ questionIndex }) => {
  const [timeRemaining, setTimeRemaining] = useState(Timer);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((timeleft) => timeleft - 10);
    }, 10);
    return () => clearInterval(timer);
  }, [questionIndex]);

  return (
    <div>
      <h1 className="text-red-600 font-bold">Time left...</h1>
      <progress id="progress" value={timeRemaining} max={Timer} />
    </div>
  );
};

export default TimeLimit;
