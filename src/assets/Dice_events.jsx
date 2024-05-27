import { RABBIT, HORSE, WOLF, FOX } from "./Game_core";

export function addToFlock(win, setMyFlock) {
  const dictionaryOfWins = win.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  Object.entries(dictionaryOfWins).forEach(([key, value]) => {
    setMyFlock((prevState) => ({
      ...prevState,
      flock: [
        ...prevState.flock.map((item) =>
          item.id === key
            ? {
                ...item,
                stock: item.stock + Math.floor((item.stock + value) / 2),
              }
            : item
        ),
      ],
    }));
  });
}

export function dogTerminate(dog, setMyFlock) {
  setMyFlock((prevState) => ({
    ...prevState,
    gatekeepers: [
      ...prevState.gatekeepers.map((item) =>
        item.id === dog ? { ...item, stock: false } : item
      ),
    ],
  }));
}

export function flockPlundering(predator, setMyFlock) {
  switch (predator) {
    case WOLF:
      setMyFlock((prevState) => ({
        ...prevState,
        flock: [
          ...prevState.flock.map((item) =>
            item.id !== HORSE ? { ...item, stock: 0 } : item
          ),
        ],
      }));
      break;
    case FOX:
      setMyFlock((prevState) => ({
        ...prevState,
        flock: [
          ...prevState.flock.map((item) =>
            item.id === RABBIT ? { ...item, stock: 0 } : item
          ),
        ],
      }));
      break;
  }
}
