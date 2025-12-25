export const Score = (result, questions) => {
  if (questions === 0) return 0;
  const finalResult = Math.round((result / questions) * 100);
  return finalResult;
};
