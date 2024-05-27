import { useEffect, useState } from "react";
import Flock from "./Flock";
import { INIT_STATE } from "../assets/Game_core";
import { wonTheGame, updateFlock } from "../assets/Player_events";

function Player({ throwResult, turn, playerId, setWinningPlayer }) {
  const [myFlock, setMyFlock] = useState(INIT_STATE);

  const flock = myFlock.flock;
  const gatekeepers = myFlock.gatekeepers;

  function isActivePlayer() {
    return turn === playerId;
  }

  useEffect(() => {
    isActivePlayer() && updateFlock(myFlock, setMyFlock, throwResult);
  }, [throwResult]);

  useEffect(() => {
    wonTheGame(myFlock) === true && setWinningPlayer(playerId);
  }, [myFlock]);

  return (
    <div>
      <h3 style={isActivePlayer() ? { color: "black" } : { color: "silver" }}>
        Player {playerId}
      </h3>

      <Flock
        myFlock={myFlock}
        setMyFlock={setMyFlock}
        isActivePlayer={isActivePlayer()}
        source={flock}
      />
      <br />
      <Flock
        myFlock={myFlock}
        setMyFlock={setMyFlock}
        isActivePlayer={isActivePlayer()}
        source={gatekeepers}
      />
    </div>
  );
}

export default Player;
