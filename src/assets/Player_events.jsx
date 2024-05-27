import { DICES } from "./Game_core";
import { addToFlock, dogTerminate, flockPlundering } from "./Dice_events";

export function wonTheGame(myFlock) {
  const flock = myFlock.flock;
  let isWon = flock.every(({ stock }) => stock > 0);

  return isWon;
}

export function updateFlock(myFlock, setMyFlock, throwResult) {
  const diceFields = DICES.fields;
  const gatekeepers = myFlock.gatekeepers;

  let isWinningThrow = true;

  throwResult.map((throwingField) => {
    diceFields.map(({ id, method }) => {
      const defendingDog = method.lose;

      if (id === throwingField && method !== "win") {
        const guardDog = gatekeepers.find((dog) => dog.id === defendingDog);
        const isActive = guardDog.stock;

        isActive
          ? dogTerminate(defendingDog, setMyFlock)
          : flockPlundering(id, setMyFlock);

        isWinningThrow = false;
      }
    });
  });

  isWinningThrow && addToFlock(throwResult, setMyFlock);
}
