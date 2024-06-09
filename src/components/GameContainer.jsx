import { useState } from "react";
import gameRules from "../files/SUPERFARMER_DELUX.pdf";
import PlayersContainer from "./PlayersContainer";
import Dices from "./Dices";
import GameOver from "./GameOver";
import "../style/game_container.css";

function GameContainer({ players, setStart }) {
  const [throwResult, setThrowResult] = useState([]);
  const [winningPlayer, setWinningPlayer] = useState(null);

  return (
    <div className="game_container">
      <a className="game_container__rules" href={gameRules} target="_blank">
        RULES (PL)
      </a>

      <PlayersContainer
        throwResult={throwResult}
        players={players}
        setWinningPlayer={setWinningPlayer}
      />
      <Dices
        throwResult={throwResult}
        setThrowResult={setThrowResult}
        winningPlayer={winningPlayer}
      />

      {winningPlayer && (
        <GameOver winningPlayer={winningPlayer} setStart={setStart} />
      )}
    </div>
  );
}

export default GameContainer;
