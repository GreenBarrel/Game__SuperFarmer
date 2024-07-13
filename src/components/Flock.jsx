import BuyItem from "./Shop";
import FlockExtraItem from "./Flock_FlockExtraItem";
import FlockItem from "./Flock_FlockItem";
import GatekeeperItem from "./Flock_GatekeeperItem";
import "../style/flock.css";
import { FOX, WOLF } from "../assets/Game_core";
import { useEffect, useMemo, useState } from "react";

export function itemLength(index) {
  return 5 - index;
}

function Flock({
  myFlock,
  setMyFlock,
  isActivePlayer,
  nextRound,
  throwResult,
}) {
  const [isLoosing, setIsLoosing] = useState(false);

  const flock = myFlock.flock;
  const gatekeepers = myFlock.gatekeepers;

  const result = throwResult.includes(WOLF) || throwResult.includes(FOX);

  useEffect(() => {
    setIsLoosing(result);
  }, [throwResult]);

  useMemo(() => {
    setIsLoosing(false);
  }, [nextRound]);

  return (
    <>
      <div className="flock">
        {flock.map(({ id, stock, img }, index) => (
          <div key={index} className="flock__items">
            {Array.from({ length: itemLength(index) }, (_, k) => (
              <FlockItem
                key={k}
                k={k}
                img={img}
                stock={stock}
                isLoosing={isLoosing}
              />
            ))}

            <FlockExtraItem stock={stock} index={index} />

            {isActivePlayer && !nextRound && (
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

      <div className="gatekeepers">
        {gatekeepers.map(({ id, stock, img }, index) => (
          <div key={index} className="flock__items">
            <GatekeeperItem img={img} stock={stock} />

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
    </>
  );
}

export default Flock;
