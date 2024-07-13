import { useEffect, useRef } from "react";

function GatekeeperItem({ img, stock }) {
  const prevValue = useRef(stock);

  useEffect(() => {
    prevValue.current = stock;
  }, [stock]);

  return (
    <img
      src={img}
      className={"gatekeeper__item" + (stock ? " " + "--active" : "")}
      style={prevValue.current == stock ? { animation: "none" } : {}}
    />
  );
}

export default GatekeeperItem;
