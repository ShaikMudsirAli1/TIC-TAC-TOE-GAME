// import React, { useState } from "react";
// import Square from "./Square";

// // WE ARE MAKING 3/3 GRID.
// const Board = () => {
//   // INITIAL STATE OF 3/3 GRID IS NULL.
//   // SO BOARD IS EMPTY.
//   const [state, setState] = useState(Array(9).fill(null));
//   // console.log("state", state);

//   // If x turn then the isXTurn is true else false.
//   const [isXTurn, setIsXTurn] = useState(true);

//   // CHECKWINNER FUNCTION.
//   const checkWinner = () => {
//     const winnerLogic = [
//       [0, 1, 2],
//       [3, 4, 6],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let logic of winnerLogic) {
//       const [a, b, c] = logic;
//       if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
//         return state[a];
//     }
//     return false;
//   };

//   const isWinner = checkWinner();

//   // TRACK THE SQUARE-STATE.
//   const handleClick = (index) => {
//     // console.log("which square is clicked:", index);
//     // BUG RESOLVED
//     if (state[index] !== null) {
//       return;
//     }
//     const copyState = [...state];
//     copyState[index] = isXTurn ? "Mudsir" : "Ali";
//     setState(copyState);
//     setIsXTurn(!isXTurn);
//   };

//   return (
//     <div className="board-container">
//       {/* IN BOARD WE HAVE THREE ROWS SO WE ARE
//           CREATING THREE DIVS AND IN EVERY ROW
//           WE HAVE THREE SQUARES */}

//       {/* ROW-1 */}
//       {/* MAPPING STATE TO BLOCK */}
//       {isWinner ? (
//         <>
//           {" "}
//           <h1
//             style={{
//               color: "black",
//               justifyContent: "center",
//               marginLeft: "8rem",
//               marginTop: "5rem",
//               fontSize: "1.6rem",
//             }}
//           >
//             {isWinner} WON THE GAME better Luck next time
//           </h1>
//           <button
//             style={{
//               color: "black",
//               justifyContent: "center",
//               marginLeft: "8rem",
//               marginTop: "5rem",
//               fontSize: "2rem",
//               borderRadius: "20rem",
//               border: "6px solid",
//               cursor: "pointer",

//               backgroundColor:
//                 "lightgray" /* Sets the background color to light gray */,
//               padding: "2rem" /* Adds padding inside the element */,
//               boxShadow:
//                 "2px 2px 4px rgba(0, 0, 0, 0.4)" /* Adds a subtle shadow to the element */,
//               textTransform: "uppercase" /* Makes the text uppercase */,
//               fontWeight: "bold" /* Sets the font weight to bold */,
//               textDecoration: "none" /* Removes any underline from the text */,
//               transition: "background-color 0.3s ease",
//             }}
//             onClick={() => setState(0)}
//           >
//             PLAY AGAIN
//           </button>{" "}
//         </>
//       ) : (
//         <>
//           <h1 style={{ color: "red", marginLeft: "8rem" }}>
//             {" "}
//             Player {isXTurn ? "Mudsir" : "Ali"} please move
//           </h1>
//           <div className="board-row">
//             {/* RENDERING THE SQUARE COMPONENT IN THREE TIMES IN EACH ROW */}
//             <Square onClick={() => handleClick(0)} value={state[0]} />
//             <Square onClick={() => handleClick(1)} value={state[1]} />
//             <Square onClick={() => handleClick(2)} value={state[2]} />
//           </div>

//           {/* ROW-2 */}

//           <div className="board-row">
//             <Square onClick={() => handleClick(3)} value={state[3]} />
//             <Square onClick={() => handleClick(4)} value={state[4]} />
//             <Square onClick={() => handleClick(5)} value={state[5]} />
//           </div>

//           {/* ROW-3*/}

//           <div className="board-row">
//             <Square onClick={() => handleClick(6)} value={state[6]} />
//             <Square onClick={() => handleClick(7)} value={state[7]} />
//             <Square onClick={() => handleClick(8)} value={state[8]} />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Board;
import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  // INITIAL STATE OF 3/3 GRID IS NULL.
  // SO BOARD IS EMPTY.
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 6],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return state[a];
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "Mudsir" : "Ali";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="board-container">
      <h4
        style={{
          color: "black",
          fontFamily: "bold",
          fontPalette: "dark",
          fontSize: "1rem",
        }}
      >
        TIC-TAC-TOE-GAME
      </h4>
      {isWinner ? (
        <>
          <h1 style={{ color: "black", textAlign: "center" }}>
            {isWinner} WON THE GAME! Better Luck Next Time
          </h1>
          <button
            style={{
              margin: "1rem auto",
              padding: "10px 20px",
              backgroundColor: "lightgray",
              border: "2px solid black",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginLeft: "8rem",
              textTransform: "uppercase",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => setState(Array(9).fill(null))}
          >
            PLAY AGAIN
          </button>
        </>
      ) : (
        <>
          <h1 style={{ color: "red", marginLeft: "8rem" }}>
            Player {isXTurn ? "Mudsir" : "Ali"}, please move.
          </h1>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
