import { DICES } from "../assets/Game_core";
import "../style/dices.css";

function Dices({ throwResult, setThrowResult }) {
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
    const result = [];
    const dices = createDices();

    for (let i = 0; i < dices.length; i++) {
      const random = Math.floor(Math.random() * dices[i].length);
      result.push(dices[i][random]);
    }

    setThrowResult(result);
  };

  return (
    <>
      <section className="dices_container">
        {throwResult.map((dice) =>
          DICES.fields.map(
            ({ id, icon: Icon }) => id == dice && <Icon key={id} />
          )
        )}
      </section>
      <button className="dices_btn" onClick={rollTheDices}>
        Roll the dices
      </button>
    </>
  );
}

export default Dices;
