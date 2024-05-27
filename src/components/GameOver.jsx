function GameOver({ setStart, winningPlayer }) {
  return (
    <>
      <span
        style={{
          position: "absolute",
          zIndex: "1",
          color: "red",
          width: "95vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "48px",
          backdropFilter: "blur(5px)",
          borderStyle: "solid",
        }}
      >
        <div>{`Player ${winningPlayer} win the game!`}</div>
        <button onClick={() => setStart(false)}>Start new game</button>
      </span>
    </>
  );
}

export default GameOver;
