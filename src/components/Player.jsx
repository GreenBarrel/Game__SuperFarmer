import { useEffect, useState } from "react";
import Flock from "./Flock";
import { INIT_STATE } from "../assets/Game_core";
import { wonTheGame, updateFlock } from "../assets/Player_events";
import "../style/players.css";

function Player({ throwResult, turn, playerId, setWinningPlayer, nextRound }) {
  const [myFlock, setMyFlock] = useState(() => INIT_STATE);
  const [isLoosing, setIsLoosing] = useState(false);

  const flock = myFlock.flock;
  const gatekeepers = myFlock.gatekeepers;

  function isActivePlayer() {
    turn == 0 ? (turn = 1) : turn;
    return turn === playerId;
  }

  useEffect(() => {
    isActivePlayer() && updateFlock(myFlock, setMyFlock, throwResult);
    (throwResult.includes("wolf") || throwResult.includes("fox")) &&
      setIsLoosing(true);
  }, [throwResult]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoosing(false);
    }, 3000);
  }, [nextRound]);

  useEffect(() => {
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
        source={flock}
        nextRound={nextRound}
      />
      <Flock
        myFlock={myFlock}
        setMyFlock={setMyFlock}
        isActivePlayer={isActivePlayer()}
        source={gatekeepers}
        nextRound={nextRound}
      />
    </section>
  );
}

export default Player;
