import BuyItem from "./Shop";

function Flock({ myFlock, setMyFlock, isActivePlayer, source }) {
  function itemLength(index) {
    return 5 - index;
  }

  return (
    <div className={source.length > 2 ? "flock" : "gatekeepers"}>
      {source.map(({ id, stock, img }, index) => (
        <div key={index}>
          {typeof stock == "number" ? (
            Array.from({ length: itemLength(index) }, (_, k) => (
              <img
                key={k}
                src={img}
                width={75}
                style={stock > k ? { opacity: "1" } : { opacity: "0.3" }}
              />
            ))
          ) : (
            <img
              src={img}
              width={50}
              style={stock ? { opacity: "1" } : { opacity: "0.3" }}
            />
          )}

          {stock > itemLength(index) && (
            <span className="flock__extra_item">{`+ ${
              stock - itemLength(index)
            }`}</span>
          )}

          {isActivePlayer && stock !== true && (
            <BuyItem
              id={id}
              stock={stock}
              myFlock={myFlock}
              setMyFlock={setMyFlock}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Flock;
