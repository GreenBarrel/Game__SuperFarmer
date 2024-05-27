import { useState } from "react";
import GameContainer from "./components/GameContainer";

function App() {
  const [players, setPlayers] = useState(2);
  const [start, setStart] = useState(false);

  return (
    <>
      {!start && (
        <div>
          <h1>SuperFarmer</h1>
          <fieldset>
            <legend>Players</legend>
            <input
              type="number"
              min={2}
              max={4}
              placeholder="Players"
              value={players}
              onInput={(e) => {
                setPlayers(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setStart(true);
              }}
            >
              Let's PLAY
            </button>
          </fieldset>
        </div>
      )}

      {start && <GameContainer players={players} setStart={setStart} />}
    </>
  );
}

export default App;
