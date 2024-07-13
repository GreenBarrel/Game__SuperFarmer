import { useMemo, useState, useEffect, useRef } from "react";
import { itemLength } from "./Flock";

function FlockExtraItem({ stock, index }) {
  const [animation, setAnimation] = useState(() => false);

  const prevValue = useRef(stock);

  useEffect(() => {
    prevValue.current = stock;
  }, [stock]);

  useMemo(() => {
    if (prevValue.current < stock) {
      setAnimation(true);
      setTimeout(() => setAnimation(false), 1500);
    }
  }, [stock]);

  return (
    <>
      {stock > itemLength(index) && (
        <span
          className="flock__extra_items"
          style={
            animation
              ? { animation: "1.5s new-item forwards" }
              : { animation: "none" }
          }
        >{`+${stock - itemLength(index)}`}</span>
      )}
    </>
  );
}

export default FlockExtraItem;
