import {
  GiRabbit,
  GiSheep,
  GiPig,
  GiCow,
  GiHorseHead,
  GiFox,
  GiWolfHead,
} from "react-icons/gi";

const flock = [
  "rabbit",
  "sheep",
  "pig",
  "cow",
  "horse",
  "big dog",
  "small dog",
  "wolf",
  "fox",
];

export const [RABBIT, SHEEP, PIG, COW, HORSE, BIG_DOG, SMALL_DOG, WOLF, FOX] =
  flock;

export const INIT_STATE = {
  flock: [
    { id: RABBIT, stock: 0, img: "src/img/rabbit.jpg" },
    { id: SHEEP, stock: 0, img: "src/img/sheep.jpg" },
    { id: PIG, stock: 0, img: "src/img/pig.jpg" },
    { id: COW, stock: 0, img: "src/img/cow.jpg" },
    { id: HORSE, stock: 0, img: "src/img/horse.jpg" },
  ],
  gatekeepers: [
    { id: SMALL_DOG, stock: false, img: "src/img/small_dog.jpg" },
    { id: BIG_DOG, stock: false, img: "src/img/big_dog.jpg" },
  ],
};

export const DICES = {
  fields: [
    { id: RABBIT, icon: GiRabbit, timesOnDice: 6, method: "win" },
    { id: SHEEP, icon: GiSheep, timesOnDice: 3, method: "win" },
    { id: PIG, icon: GiPig, timesOnDice: 1, method: "win" },
    { id: COW, icon: GiCow, timesOnDice: 1, method: "win" },
    { id: HORSE, icon: GiHorseHead, timesOnDice: 1, method: "win" },
    { id: WOLF, icon: GiWolfHead, timesOnDice: 1, method: { lose: BIG_DOG } },
    { id: FOX, icon: GiFox, timesOnDice: 1, method: { lose: SMALL_DOG } },
  ],
  dices: {
    common: [RABBIT, SHEEP, PIG],
    various: [
      [COW, WOLF],
      [HORSE, FOX],
    ],
  },
};

export const SHOP = [
  { buy: RABBIT, buyFor: false },
  { buy: SHEEP, buyFor: { exchange: RABBIT, cost: 6 } },
  { buy: PIG, buyFor: { exchange: SHEEP, cost: 2 } },
  { buy: COW, buyFor: { exchange: PIG, cost: 3 } },
  { buy: HORSE, buyFor: { exchange: COW, cost: 2 } },
  { buy: SMALL_DOG, buyFor: { exchange: SHEEP, cost: 1 } },
  { buy: BIG_DOG, buyFor: { exchange: COW, cost: 1 } },
];
