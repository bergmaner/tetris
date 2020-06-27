import { useState, useCallback } from "react";
import { randomSlice, Slices } from "../slices";
import { STAGE_WIDTH, checkCollision } from "../gameConfig";

const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    slice: Slices[0].shape,
    collide: false,
  });

  const rotate = (matrix, direction) => {
    const rotatedSlice = matrix.map((m, index) =>
      matrix.map((col) => col[index])
    );
    if (direction > 0) return rotatedSlice.map((row) => row.reverse());
    return rotatedSlice.reverse();
  };

  const rotatePlayer = (stage, direction) => {
    const clone = JSON.parse(JSON.stringify(player));
    clone.slice = rotate(clone.slice, direction);
    const posX = clone.pos.x;
    let offset = 1;
    while (checkCollision(clone, stage, { x: 0, y: 0 })) {
      clone.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clone.slice[0].length) {
        rotate(clone.slice, -direction);
        clone.pos.x = posX;
        return;
      }
    }
    setPlayer(clone);
  };

  const updatePlayerPosition = useCallback(({ x, y, collide }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x / 2), y: (prev.pos.y += y / 2) },
      collide,
    }));
  });
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      slice: randomSlice().shape,
      collide: false,
    });
  });
  return [player, updatePlayerPosition, resetPlayer, rotatePlayer];
};
export default usePlayer;
