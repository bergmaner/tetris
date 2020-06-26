import React, { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import Button from "../components/Button";
import { createStage } from "../gameConfig";
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
  const [player, updatePlayerPosition, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);
  const [end,setEnd] = useState(false);

  const movePlayer = (direction) =>{
    updatePlayerPosition({x:direction, y:0});
  }
console.log(player);
  const handleMove = ({keyCode}) =>{
    if(!end) {
      switch(keyCode)
      {
        case 37: resetPlayer();
        break;
        case 39: movePlayer(1);
        break;
        case 40:console.log('drop');
        break;
      }
    }
  }

  return (
    <Container role="button" tabIndex="0" onKeyDown={(e) => handleMove(e) }>
      <TetrisWrapper>
        <Stage stage={stage} />
        <div>
          <Menu>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
            <Button text="Start" />
          </Menu>
        </div>
      </TetrisWrapper>
    </Container>
  );
};
export default Tetris;
