import { useEffect, useMemo, useState } from "react";
import Flock from "./Flock";
import { INIT_STATE } from "../assets/Game_core";
import { wonTheGame, updateFlock } from "../assets/Player_events";
import "../style/players.css";

function Player({
  throwResult,
  playerTurn,
  playerId,
  setWinningPlayer,
  nextRound,
}) {
  const [myFlock, setMyFlock] = useState(() => INIT_STATE);

  function isActivePlayer() {
    playerTurn == 0 ? (playerTurn = 1) : playerTurn;
    return playerTurn === playerId;
  }

  useEffect(() => {
    isActivePlayer() && updateFlock(myFlock, setMyFlock, throwResult);
  }, [throwResult]);

  useMemo(() => {
    wonTheGame(myFlock) === true && setWinningPlayer(playerId);
  }, [myFlock]);

  return (
    <section
      className={
        "players_container__player" + " " + (isActivePlayer() ? "--active" : "")
      }
    >
      <h3>Player {playerId}</h3>

      <Flock
        myFlock={myFlock}
        setMyFlock={setMyFlock}
        isActivePlayer={isActivePlayer()}
        nextRound={nextRound}
        throwResult={throwResult}
      />
    </section>
  );
}

export default Player;
