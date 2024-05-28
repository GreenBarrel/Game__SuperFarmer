import { useState } from "react";
import Dices from "./Dices";
import PlayersContainer from "./PlayersContainer";
import GameOver from "./GameOver";
import "../style/game_container.css"

function GameContainer({ players, setStart }) {
  const [throwResult, setThrowResult] = useState([]);
  const [winningPlayer, setWinningPlayer] = useState(null);

  return (
    <div className="game_container">
      {winningPlayer && (
        <GameOver winningPlayer={winningPlayer} setStart={setStart} />
      )}
      <PlayersContainer
        throwResult={throwResult}
        players={players}
        setWinningPlayer={setWinningPlayer}
      />
      <Dices throwResult={throwResult} setThrowResult={setThrowResult} />{" "}
    </div>
  );
}

export default GameContainer;
