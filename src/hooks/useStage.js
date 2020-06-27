import { useState, useEffect } from "react";
import { createStage } from "../gameConfig";

const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCount, setRowsCount] = useState(0);
  useEffect(() => {
    const sweep = (newStage) =>
      newStage.reduce((result, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCount((prev) => prev + 1);
          console.log("rows", rowsCount);
          result.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return result;
        }
        result.push(row);
        return result;
      }, []);

    const updateStage = (prev) => {
      const updatedStage = prev.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      player.slice.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            updatedStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collide ? "merge" : "clear"}`,
            ];
          }
        });
      });
      if (player.collide) {
        resetPlayer();
        return sweep(updatedStage);
      }
      return updatedStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player]);

  return [stage, setStage, rowsCount];
};
export default useStage;
