import { DICES } from "../assets/Game_core";
import { GiRollingDiceCup } from "react-icons/gi";
import "../style/dices.css";

function Dices({
  throwResult,
  setThrowResult,
  winningPlayer,
  nextRound,
  setNextRound,
}) {
  function createDices() {
    const commonFields = DICES.dices.common;
    const variousFields = DICES.dices.various;
    const dicesArr = new Array();

    function addFieldsToDice(arr, fields, idx) {
      const result = DICES.fields.find(({ id }) => id === fields[idx]);
      arr.push(...Array(result.timesOnDice).fill(result.id));
    }

    for (let i = 0; i < variousFields.length; i++) {
      const arr = new Array();
      for (let j = 0; j < commonFields.length; j++) {
        addFieldsToDice(arr, commonFields, j);
      }
      for (let k = 0; k < variousFields[i].length; k++) {
        addFieldsToDice(arr, variousFields[i], k);
      }
      dicesArr.push(arr);
    }
    return dicesArr;
  }

  const rollTheDices = () => {
    if (!winningPlayer) {
      const result = [];
      const dices = createDices();

      for (let i = 0; i < dices.length; i++) {
        const random = Math.floor(Math.random() * dices[i].length);
        result.push(dices[i][random]);
      }

      setThrowResult(result);
      setNextRound(true);
    }
  };

  return (
    <>
      <section className="dices_container">
        {!nextRound ? (
          <GiRollingDiceCup className="dice_cup" />
        ) : (
          throwResult.map((dice) =>
            DICES.fields.map(
              ({ id, icon: Icon }) => id == dice && <Icon key={id} />
            )
          )
        )}
      </section>
      {!nextRound && (
        <button className="dices_btn" onClick={rollTheDices}>
          Roll the dices
        </button>
      )}
    </>
  );
}

export default Dices;
