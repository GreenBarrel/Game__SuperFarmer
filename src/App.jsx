import { useState } from "react";
import GameContainer from "./components/GameContainer";

function App() {
  const minPlayers = 2;
  const maxPlayers = 4;

  const [players, setPlayers] = useState(minPlayers);
  const [start, setStart] = useState(false);

  function playersValidation() {
    let res = false;

    players >= minPlayers && players <= maxPlayers
      ? (res = true)
      : alert(
          `Select the number of players from ${minPlayers} to ${maxPlayers}`
        );

    return res;
  }

  return (
    <>
      {!start && (
        <fieldset className="start_container">
          <legend>Players</legend>
          <span className="num_of_players">
            <button
              className={
                "decreaseNum" +
                (players > minPlayers ? null : " " + "--unactive")
              }
              onClick={() => {
                inputEl.stepDown(), setPlayers(inputEl.value);
              }}
            >
              -
            </button>
            <input
              id="inputEl"
              type="number"
              min={minPlayers}
              max={maxPlayers}
              placeholder="Players"
              defaultValue={players}
            />
            <button
              className={
                "increaseNum" +
                (players < maxPlayers ? null : " " + "--unactive")
              }
              onClick={() => {
                inputEl.stepUp(), setPlayers(inputEl.value);
              }}
            >
              +
            </button>
          </span>
          <button
            className="start_game_btn"
            onClick={() => {
              playersValidation() && setStart(true);
            }}
          >
            Let's PLAY
          </button>
        </fieldset>
      )}

      {start && <GameContainer players={players} setStart={setStart} />}
    </>
  );
}

export default App;
