import { useState, useCallback } from "react";
import { randomSlice, Slices } from "../slices";
import { STAGE_WIDTH } from "../gameConfig";

const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    slice: Slices[0].shape,
    collide: false,
  });
  const updatePlayerPosition = ({ x, y, collide }) =>{
    setPlayer(prev =>({
      ...prev,
      pos:{x: ( prev.pos.x += x ), y: ( prev.pos.y += y ) },
      collide
    }))

  }
  const resetPlayer = useCallback(()=>{
    setPlayer({
      pos: {x:STAGE_WIDTH /2 -2, y:0},
      slice: randomSlice().shape,
      collide: false

    });
  })
  return [player, updatePlayerPosition, resetPlayer];
};
export default usePlayer;
