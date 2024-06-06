import "../style/game_over.css";

function GameOver({ setStart, winningPlayer }) {
  return (
    <>
      <span className="game_container__game_over">
        <div>{`Player ${winningPlayer} win the game!`}</div>
        <button onClick={() => setStart(false)}>Start new game</button>
      </span>
    </>
  );
}

export default GameOver;
