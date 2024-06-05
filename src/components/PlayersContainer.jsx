import { useRef, useMemo, useState } from "react";
import Player from "./Player";
import "../style/players.css";

function PlayersContainer({ throwResult, players, setWinningPlayer }) {
  const [playerTurn, setPlayerTurn] = useState(0);

  let startGame = useRef(false);

  useMemo(() => {
    if (startGame.current) {
      playerTurn < players
        ? setPlayerTurn((prev) => prev + 1)
        : setPlayerTurn(1);
    } else {
      startGame.current = true;
    }
  }, [throwResult]);

  return (
    <>
      <main className="players_container">
        {Array.from({ length: players }, (_, k) => (
          <Player
            key={k}
            throwResult={throwResult}
            playerId={k + 1}
            turn={playerTurn}
            setWinningPlayer={setWinningPlayer}
          />
        ))}
      </main>
    </>
  );
}

export default PlayersContainer;
