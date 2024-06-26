import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { SHOP } from "../assets/Game_core";

function BuyItem(props) {
  const START_POSITION = 3;
  const BUY_BTN_JUMP_SIZE = 81;

  function buyBtnPosition() {
    let len = 0;
    const maxLen = 5 - props.index;

    if (typeof props.stock == "number" && canBuy())
      props.stock < maxLen ? (len = props.stock) : (len = maxLen - 1);

    return START_POSITION + len * BUY_BTN_JUMP_SIZE;
  }

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

  return (
    canBuy() && (
      <button
        className="flock__buy_item_btn"
        style={{ left: `${buyBtnPosition()}px` }}
        onClick={buy}
      >
        <MdOutlinePublishedWithChanges />
      </button>
    )
  );
}

export default BuyItem;
