import { useState } from "react";
import Dices from "./Dices";
import PlayersContainer from "./PlayersContainer";
import GameOver from "./GameOver";

function GameContainer({ players, setStart }) {
  const [throwResult, setThrowResult] = useState([]);
  const [winningPlayer, setWinningPlayer] = useState(null);

  return (
    <>
      {winningPlayer && (
        <GameOver winningPlayer={winningPlayer} setStart={setStart} />
      )}
      <PlayersContainer
        throwResult={throwResult}
        players={players}
        setWinningPlayer={setWinningPlayer}
      />
      <hr />
      <Dices throwResult={throwResult} setThrowResult={setThrowResult} />{" "}
    </>
  );
}

export default GameContainer;
