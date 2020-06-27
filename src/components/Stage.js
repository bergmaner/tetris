import React from "react"
import Cell from "./Cell"
import styled from 'styled-components'

const Board = styled.div`
display: grid;
grid-template-rows: repeat(${props => props.height},calc(25vw / ${props => props.width}));
grid-template-columns: repeat(${props => props.width},1fr);
grid-gap: 1px;
border: 2px solid #333;
width: 100%;
max-width: 25vw;
background: #111;
`;

const Stage = ({ stage }) =>{
    return(
        <Board width={stage[0].length} height={stage.length}>{stage.map((row) => row.map((cell, index) => <Cell key={index} type={cell[0]}/>))}</Board>
    )
}
export default Stage