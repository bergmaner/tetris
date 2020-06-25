import React from "react";
import Stage from "./Stage";
import Display from "./Display";
import { createStage } from "../gameConfig"

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <div>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <button>start</button>
      </div>
    </div>
  );
};
export default Tetris;
