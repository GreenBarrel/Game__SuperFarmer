import BuyItem from "./Shop";

function Flock({ myFlock, setMyFlock, isActivePlayer, source, nextRound }) {
  function itemLength(index) {
    return 5 - index;
  }

  return (
    <div className={source.length > 2 ? "flock" : "gatekeepers"}>
      {source.map(({ id, stock, img }, index) => (
        <div key={index} className="flock__items">
          {typeof stock == "number" ? (
            Array.from({ length: itemLength(index) }, (_, k) => (
              <img
                key={k}
                src={img}
                className={"flock__item" + (stock > k ? " " + "--active" : "")}
              />
            ))
          ) : (
            <img
              src={img}
              className={"gatekeeper__item" + (stock ? " " + "--active" : "")}
            />
          )}

          {stock > itemLength(index) && (
            <span className="flock__extra_items">{`+${
              stock - itemLength(index)
            }`}</span>
          )}

          {isActivePlayer && stock !== true && !nextRound && (
            <BuyItem
              id={id}
              stock={stock}
              myFlock={myFlock}
              setMyFlock={setMyFlock}
              index={index}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Flock;
