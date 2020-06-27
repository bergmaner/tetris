import React, { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import Button from "../components/Button";
import { createStage, checkCollision } from "../gameConfig";
import styled from "styled-components";
import usePlayer from "../hooks/usePlayer";
import useStage from "../hooks/useStage";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #111;
  overflow: hidden;
`;
const TetrisWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
`;
const Menu = styled.div`
  width: 100%;
  max-width: 200px;
  display: block;
  padding: 0px 20px;
`;

const Tetris = () => {
  const [player, updatePlayerPosition, resetPlayer, rotatePlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);
  const [end, setEnd] = useState(false);

  const movePlayer = (direction) => {
    console.log("h");
    if (!checkCollision(player, stage, { x: direction, y: 0 }))
      updatePlayerPosition({ x: direction, y: 0 });
  };

  const dropPlayer = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 }))
      updatePlayerPosition({ x: 0, y: 1, collide: false });
    else {
      if(player.pos.y < 1){
        setEnd(true);
        console.log("GameOver")
      }
     
      updatePlayerPosition({ x: 0, y: 0, collide: true });
    }
  };

  const handleStart = () => {
    setStage(createStage());
    resetPlayer();
    setEnd(false);
  };
console.log("player", player)
  const handleMove = ({ keyCode }) => {
    console.log(end,"end");
    if (!end) {
      switch (keyCode) {
        case 37:
          movePlayer(-1);
          break;
          case 38: 
          rotatePlayer(stage,1)
          break;
        case 39:
          movePlayer(1);
          break;
        case 40:
          dropPlayer();
          break;
      }
    }
  };

  return (
    <Container role="button" tabIndex="0" onKeyDown={(e) => handleMove(e)}>
      <TetrisWrapper>
        <Stage stage={stage} />
        <div>
          <Menu>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
            <Button handleClick={handleStart} text="Start" />
          </Menu>
        </div>
      </TetrisWrapper>
    </Container>
  );
};
export default Tetris;
