import { useEffect, useState } from "react";
import Player from "./Player";
import "../style/players.css";

function PlayersContainer({
  throwResult,
  players,
  setWinningPlayer,
  nextRound,
}) {
  const [playerTurn, setPlayerTurn] = useState(0);

  useEffect(() => {
    if (!nextRound) {
      playerTurn < players
        ? setPlayerTurn((prev) => prev + 1)
        : setPlayerTurn(1);
    }
  }, [nextRound]);

  return (
    <>
      <main className="players_container">
        {Array.from({ length: players }, (_, k) => (
          <Player
            key={k}
            throwResult={throwResult}
            playerId={k + 1}
            playerTurn={playerTurn}
            setWinningPlayer={setWinningPlayer}
            nextRound={nextRound}
          />
        ))}
      </main>
    </>
  );
}

export default PlayersContainer;
