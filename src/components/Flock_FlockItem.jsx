import { useEffect, useMemo, useRef, useState } from "react";

function FlockItem({ k, img, stock, isLoosing }) {
  const [anim, setAnim] = useState(false);

  const prevValue = useRef(stock);

  useEffect(() => {
    prevValue.current = stock;
  }, [stock]);

  useMemo(() => {
    if (prevValue.current > stock && isLoosing) {
      setAnim(true);
      setTimeout(() => {
        setAnim(false);
      }, 1500);
    }
  }, [stock]);

  return (
    <>
      <img
        src={img}
        className={"flock__item" + (stock > k ? " " + "--active" : "")}
        style={anim && prevValue.current > k ? {} : { animation: "none" }}
      />
    </>
  );
}

export default FlockItem;
