import React from "react"
import styled from "styled-components"
import { Slices } from "../slices"
const Square = styled.div`
width: auto;
background: rgba(${ props => props.background },0.8);
border: ${ props => props.type === 0 ? "0px solid" : "4px solid" };
border-color: rgba(${ props => props.background },0.5);
`;

const Cell = ({type}) =>{
    return(
        <Square type={type} background={Slices[type].color} />
    )
}
export default Cell;