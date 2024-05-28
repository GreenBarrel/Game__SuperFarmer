import { useRef, useMemo, useState } from "react";
import Player from "./Player";

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
      <main style={{ display: "flex", flexDirection: "row" }}>
        {Array.from({ length: players }, (_, k) => (
          <div key={k}>
            <Player
              throwResult={throwResult}
              playerId={k + 1}
              turn={playerTurn}
              setWinningPlayer={setWinningPlayer}
            />
          </div>
        ))}
      </main>
    </>
  );
}

export default PlayersContainer;
