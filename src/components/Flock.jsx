import BuyItem from "./Shop";

function Flock({ myFlock, setMyFlock, isActivePlayer, source }) {
  function itemLength(index) {
    return 5 - index
  }

  return (
    <section>
      {source.map(({ id, stock, img }, index) => (
        <div key={index}>

        {typeof stock == "number"
          ? Array.from({ length: itemLength(index) }, (_, k) => (
            <img key={k} src={img} width={75} style={stock > k ? {opacity:"1"} : {opacity:"0.3"}} />
          ))
          : <img src={img} width={50} style={stock ? {opacity:"1"} : {opacity:"0.3"}} />}

        {stock > itemLength(index) && <span>{`+ ${stock - (itemLength(index))}`}</span>}

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
