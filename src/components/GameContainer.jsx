import { useState } from "react";
import PlayersContainer from "./PlayersContainer";
import Dices from "./Dices";
import BuyRules from "./BuyRules";
import GameOver from "./GameOver";
import "../style/game_container.css";

function GameContainer({ players, setStart }) {
  const [throwResult, setThrowResult] = useState([]);
  const [winningPlayer, setWinningPlayer] = useState(null);

  return (
    <div className="game_container">
      <div className="game_container__rules">RULES</div>

      {winningPlayer && (
        <GameOver winningPlayer={winningPlayer} setStart={setStart} />
      )}
      <PlayersContainer
        throwResult={throwResult}
        players={players}
        setWinningPlayer={setWinningPlayer}
      />
      <Dices throwResult={throwResult} setThrowResult={setThrowResult} />
      {/* <BuyRules /> */}
    </div>
  );
}

export default GameContainer;
