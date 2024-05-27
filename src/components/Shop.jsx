import { SHOP } from "../assets/Game_core";

function BuyItem(props) {
  function canBuy() {
    const flock = props.myFlock.flock;
    let state = false;

    SHOP.map(({ buy, buyFor }) => {
      const { exchange, cost } = buyFor;

      if (buyFor && buy === props.id) {
        flock.map(({ id, stock }) => {
          if (id === exchange && stock >= cost) state = true;
        });
      }
    });

    return state;
  }

  function buy() {
    SHOP.map(({ buy, buyFor }) => {
      const { exchange, cost } = buyFor;

      if (buyFor && buy === props.id) {
        typeof props.stock == "number" &&
          props.setMyFlock((prevState) => ({
            flock: [
              ...prevState.flock.map((item) =>
                item.id === exchange
                  ? { ...item, stock: item.stock - cost }
                  : item && item.id === buy
                  ? { ...item, stock: item.stock + 1 }
                  : item
              ),
            ],
            gatekeepers: [...prevState.gatekeepers],
          }));

        typeof props.stock == "boolean" &&
          props.setMyFlock((prevState) => ({
            flock: [
              ...prevState.flock.map((item) =>
                item.id === exchange
                  ? { ...item, stock: item.stock - cost }
                  : item
              ),
            ],
            gatekeepers: [
              ...prevState.gatekeepers.map((item) =>
                item.id === buy ? { ...item, stock: true } : item
              ),
            ],
          }));
      }
    });
  }

  return <div>{canBuy() && <button onClick={buy}>BUY</button>}</div>;
}

export default BuyItem;
