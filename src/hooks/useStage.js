import { useState, useEffect } from "react";
import { createStage } from "../gameConfig";

const useStage = ( player, resetPlayer ) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
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
   console.log(updatedStage)
      return updatedStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player.collide,player.pos.x,player.pos.y,player.slice]);

  return [stage, setStage];
};
export default useStage;
