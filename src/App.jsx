import { useState } from "react";
import GameContainer from "./components/GameContainer";

function App() {
  const minPlayers = 2
  const maxPlayers = 4

  const [players, setPlayers] = useState(minPlayers);
  const [start, setStart] = useState(false);

  function playersValidation() {
    let res = false

    players >= minPlayers && players <= maxPlayers
    ? res = true
    : alert(`Select the number of players from ${minPlayers} to ${maxPlayers}`)

    return res
  }

  return (
    <>
      <h1>SuperFarmer</h1>
      {!start && (
        <div>
          <fieldset>
            <legend>Players</legend>
            <input
              type="number"
              min={minPlayers}
              max={maxPlayers}
              placeholder="Players"
              value={players}
              onInput={(e) => {
                setPlayers(e.target.value);
              }}
            />
            <button
              onClick={() => {
                playersValidation() && setStart(true);
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
