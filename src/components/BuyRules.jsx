import { INIT_STATE, SHOP } from "../assets/Game_core";

function BuyRules() {
  const inventory = INIT_STATE.flock.concat(INIT_STATE.gatekeepers);

  return (
    <section className="buy_rules">
      {SHOP.map(
        ({ buy, buyFor }, index) =>
          index != 0 && (
            <div key={index}>
              {buyFor &&
                inventory.map(
                  ({ id, img }) =>
                    (id == buyFor.exchange || id == buy) && (
                      <>
                        {id == buyFor.exchange && (
                          <>
                            <span>{buyFor.cost}</span>
                            <img src={img} height={30} />
                            <span>=</span>
                          </>
                        )}
                        {id == buy && <img src={img} height={30} />}
                      </>
                    )
                )}
            </div>
          )
      )}
    </section>
  );
}

export default BuyRules;
