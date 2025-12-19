import { useState } from "react";



export default function LudoBoard() {

    let[moves , setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0})
    let[arr, setArr] =  useState(["no moves"]);



    let updateBlue = () => {
      // moves.blue = moves.blue + 1;
      console.log(`moves.blue = ${moves.blue}`);
      setMoves((preMoves)=>{
         return {...preMoves, blue: preMoves.blue + 1}
      });

     setArr((preArr)=> {
      return [...preArr, "blue moves"]
    })

    }

  return (
    <>
      <div>
        <p>Game Begin!</p>
        <div className="board">
          <p>{arr}</p>
          <p>Blue moves = {moves.blue}</p>
          <button onClick={updateBlue} style={{background: "blue"}}>+1</button>

          <p>Yellow moves = {moves.yellow} </p>
          <button style={{background: "yellow"}}>+1</button>

          <p>Green moves = {moves.green} </p>
          <button style={{background:"green"}}>+1</button>

          <p>Red moves = {moves.red}</p>
          <button style={{background:"red"}}>+1</button>
        </div>
      </div>
    </>
  );
}
