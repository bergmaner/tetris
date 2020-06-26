import { useState } from "react";
import { randomSlice } from "../slices";

const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    slice: randomSlice().shape,
    collide: false,
  });
  return [player];
};
export default usePlayer;
