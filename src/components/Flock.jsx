import BuyItem from "./Shop";

function Flock({ myFlock, setMyFlock, isActivePlayer, source }) {
  return (
    <section>
      {source.map(({ id, stock, img }, index) => (
        <div key={index}>
          <img src={img} width={50} />
          {id}:{typeof stock == "number" ? stock : stock ? "Yes" : ""}
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
    </section>
  );
}

export default Flock;
