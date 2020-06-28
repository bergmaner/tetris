import { useState, useEffect, useCallback } from "react";

const useStatus = (rowsCount) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const points = [40, 100, 300, 1200];
  const calcScore = useCallback(() => {
    if (rowsCount > 0) {
      setScore((prev) => prev + points[rowsCount - 1] * (level + 1));
      setRows((prev) => prev + rowsCount);
    }
  }, [level, points, rowsCount]);
  useEffect(() => {
    calcScore();
  }, [rowsCount]);
  return [score, setScore, rows, setRows, level, setLevel];
};
export default useStatus;
