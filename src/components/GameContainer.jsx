import { useState } from "react";
import gameRules from "../files/SUPERFARMER_DELUX.pdf";
import PlayersContainer from "./PlayersContainer";
import Dices from "./Dices";
import GameOver from "./GameOver";
import "../style/game_container.css";

function GameContainer({ players, setStart }) {
  const [throwResult, setThrowResult] = useState([]);
  const [winningPlayer, setWinningPlayer] = useState(null);
  const [nextRound, setNextRound] = useState(false);

  return (
    <div className="game_container">
      <a className="game_container__rules" href={gameRules} target="_blank">
        RULES [PL]
      </a>

      <PlayersContainer
        throwResult={throwResult}
        players={players}
        setWinningPlayer={setWinningPlayer}
        nextRound={nextRound}
      />

      <Dices
        throwResult={throwResult}
        setThrowResult={setThrowResult}
        winningPlayer={winningPlayer}
        nextRound={nextRound}
        setNextRound={setNextRound}
      />

      {nextRound && (
        <button className="next_player_btn" onClick={() => setNextRound(false)}>
          {"NEXT PLAYER >>>"}
        </button>
      )}

      {winningPlayer && (
        <GameOver winningPlayer={winningPlayer} setStart={setStart} />
      )}
    </div>
  );
}

export default GameContainer;
