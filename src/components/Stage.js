import React from "react"
import Cell from "./Cell"
const Stage = ({ stage }) =>{
    return(
        <div>{stage.map((row) => row.map((cell, index) => <Cell key={index}/>))}</div>
    )
}
export default Stage