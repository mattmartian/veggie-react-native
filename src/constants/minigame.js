import tomato from "../assets/images/Tomato.png";
import kale from "../assets/images/Kale2.png";
import pumpkin from "../assets/images/Pumpkin.png";
import apple from "../assets/images/Apple1.png";
import eggplant from "../assets/images/Eggplant.png";
import carrot from "../assets/images/Carrot.png";
import celery from "../assets/images/Celery.png";
import turnips from "../assets/images/Turnips.png";
import cabbage from "../assets/images/Cabbage.png";
import avacado from "../assets/images/Avocado.png";
import bellPeppers from "../assets/images/BellPeppers.png";
import lettuce from "../assets/images/Lettuce.png";
import spinach from "../assets/images/Spinach.png";
import beets from "../assets/images/Beet.png";
import broccoli from "../assets/images/Brocolli.png";
import cauliflower from "../assets/images/Cauliflower.png";
import brusselSprouts from "../assets/images/BrusselSprouts.png";
import peach from "../assets/images/Peach.png";
import pears from "../assets/images/Pear1.png";
import chard from "../assets/images/Chard.png";

const CHOICES = {
  FRUIT: "Fruit",
  VEGETABLE: "Vegetable"
};

const MINI_GAME = "MINI_GAME";

const MINI_GAME_DATA = [
  {
    id: "1",
    question: "Tomato",
    imageSrc: tomato,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.FRUIT
  },
  {
    id: "2",
    question: "Kale",
    imageSrc: kale,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },
  {
    id: "3",
    question: "Pumpkin",
    imageSrc: pumpkin,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.FRUIT
  },
  {
    id: "4",
    question: "Eggplant",
    imageSrc: eggplant,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.FRUIT
  },
  {
    id: "5",
    question: "Apple",
    imageSrc: apple,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.FRUIT
  },
  {
    id: "6",
    question: "Carrot",
    imageSrc: carrot,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },
  {
    id: "7",
    question: "Celery",
    imageSrc: celery,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },
  {
    id: "8",
    question: "Turnips",
    imageSrc: turnips,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },
  {
    id: "9",
    question: "Cabbage",
    imageSrc: cabbage,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },

  {
    id: "10",
    question: "Avacado",
    imageSrc: avacado,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.FRUIT
  },
  {
    id: "11",
    question: "Bell Peppers",
    imageSrc: bellPeppers,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.FRUIT
  },
  {
    id: "12",
    question: "Lettuce",
    imageSrc: lettuce,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },
  {
    id: "13",
    question: "Spinach",
    imageSrc: spinach,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },
  {
    id: "14",
    question: "Beets",
    imageSrc: beets,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },
  {
    id: "15",
    question: "Broccoli",
    imageSrc: broccoli,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },
  {
    id: "16",
    question: "Cauliflower",
    imageSrc: cauliflower,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },
  {
    id: "17",
    question: "Brussel Sprouts",
    imageSrc: brusselSprouts,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  },
  {
    id: "18",
    question: "Peach",
    imageSrc: peach,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.FRUIT
  },
  {
    id: "19",
    question: "Pears",
    imageSrc: pears,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.FRUIT
  },
  {
    id: "20",
    question: "Swiss Chard",
    imageSrc: chard,
    answers: [CHOICES.FRUIT, CHOICES.VEGETABLE],
    correctAnswer: CHOICES.VEGETABLE
  }
];

export { MINI_GAME, MINI_GAME_DATA };
