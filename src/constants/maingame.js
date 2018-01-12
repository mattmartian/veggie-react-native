import apple from "../assets/images/Apple1.png";
import eye from "../assets/images/eye.png";
import orange from "../assets/images/orange.png";
import broccoli from "../assets/images/Brocolli.png";
import spinach from "../assets/images/Spinach.png";
import parsnip from "../assets/images/Parsnip.png";
import veggies from "../assets/images/Veggies.png";
import peas from "../assets/images/Peas.png";
import eggplantBlank from "../assets/images/EggplantBlank.png";
import grapeBlank from "../assets/images/Grape2Blank.png";
import brusselStem from "../assets/images/stembrusselsprouts.png";
import chardBlank from "../assets/images/ChardBlank.png";
import cauliflowerBlank from "../assets/images/CauliflowerBlank.png";
import cucumber from "../assets/images/Cucumber.png";
import bananaBlank from "../assets/images/BananaBlank.png";
import pumpkinBlank from "../assets/images/PumpkinBlank.png";
import kaleBlank from "../assets/images/Kale2blank.png";
import peppers from "../assets/images/Peppers.png";
import pear from "../assets/images/Pear1.png";
import corn from "../assets/images/Corn.png";

const MAIN_GAME = "MAIN_GAME"
const MAIN_GAME_DATA = [
  {
    id: "1",
    question: "Where do apples grow?",
    imageSrc: apple,
    answers: ["On Vines", "In a Bush", "On Trees", "Underground"],
    correctAnswer: "On Trees",
    fact:
      "Did you know that there are over 7,500 different types of apples grown in the world? \n and they are high in a wide variety of vitamins. Make sure to eat the skin too"
  },
  {
    id: "2",
    question: "What vegetable is great for eyesight?",
    imageSrc: eye,
    answers: ["Carrots", "French Fries", "Pumpkins", "Blueberries"],
    correctAnswer: "Carrots",
    fact:
      "Carrots are packed with vitamin A and beta carotene to help you see well \n - even in the dark!"
  },
  {
    id: "3",
    question: "Which of these berries has more vitamin c than an orange?",
    imageSrc: orange,
    answers: ["Acai Berries", "Raspberries", "Blackberries", "Strawberries"],
    correctAnswer: "Strawberries",
    fact:
      "This berry is often referred to as the heart berry because of its shape, \n and is an important food and medicine in many indigenous cultures in North America"
  },
  {
    id: "4",
    question: "The tender part of the broccoli that we eat is the ______?",
    imageSrc: broccoli,
    answers: ["Root", "Flower", "Leaf", "Fruit"],
    correctAnswer: "Flower",
    fact:
      "Broccoli is related to cabbages and cauliflower and we eat the flower part of the plant"
  },
  {
    id: "5",
    question: "Spinach and lettuce are an example of _______?",
    imageSrc: spinach,
    answers: ["Leafy Vegetables", "Root Vegetables", "Fruits", "Red Vegetables"],
    correctAnswer: "Leafy Vegetables",
    fact:
      "Leafy greens are very high in vitamins and minerals so it is important to chose these vegetables as a part of your diet"
  },
  {
    id: "6",
    question:
      "Root vegetables such as parsnips, carrots and turnips grow _______?",
    imageSrc: parsnip,
    answers: [
      "They Grow in Water",
      "Above The Soil",
      "Under the Soil",
      "On Trees"
    ],
    correctAnswer: "Under the Soil",
    fact: "Other root vegetables include potatoes, sweet potatoes and radishes"
  },
  {
    id: "7",
    question: "Can you grow vegetables if you do not have a garden?",
    imageSrc: veggies,
    answers: ["Yes!", "No!"],
    correctAnswer: "Yes!",
    fact: "Many vegetabes can grow in pots, on a balcony or in your yard"
  },
  {
    id: "8",
    question: "Which Vegetable grows in a pod?",
    imageSrc: peas,
    answers: ["Bananas", "Corn", "Peas", "Spinach"],
    correctAnswer: "Peas",
    fact: "One serving of peas contains as much vitamin C as two large apples"
  },
  {
    id: "9",
    question: "This fruit is dark purple in color",
    imageSrc: eggplantBlank,
    answers: ["Eggplant", "Apple", "Pear", "Banana"],
    correctAnswer: "Eggplant",
    fact: "Eggplants consist of 95% water and 50% of the volume is air"
  },
  {
    id: "10",
    question: "This fruit likes to hang around in bunches",
    imageSrc: grapeBlank,
    answers: ["Apples", "Oranges", "Grapes", "Grapefruit"],
    correctAnswer: "Grapes",
    fact: "Raisins are dried sweet grapes"
  },
  {
    id: "11",
    question: "How do brussel sprouts grow?",
    imageSrc: brusselStem,
    answers: [
      "On a stalk or stem",
      "Under the soil",
      "On a vine",
      "On a treestalk"
    ],
    correctAnswer: "On a stalk or stem",
    fact:
      "Brussels sprouts are like little cabbages and are related to cabbages, broccoli, and cauliflower"
  },
  {
    id: "12",
    question: "This is a leafy vegetable",
    imageSrc: chardBlank,
    answers: ["Carrots", "Swiss Chard", "Oranges", "Broccoli"],
    correctAnswer: "Swiss Chard",
    fact:
      "Swiss chard comes in some other fun colours like green, red, yellow, pink and even purple"
  },
  {
    id: "13",
    question:
      "This vegetable is related to broccoli and is white. When you break it apart, it looks like little white trees",
    imageSrc: cauliflowerBlank,
    answers: ["Cauliflower", "Celery", "Carrots", "Broccoli"],
    correctAnswer: "Cauliflower",
    fact:
      "Cauliflower is usually white but you may also find it in green, purple, orange or yellow"
  },
  {
    id: "14",
    question: "What percentage of cucumber is water?",
    imageSrc: cucumber,
    answers: ["90%", "50%", "100%", "0%"],
    correctAnswer: "90%",
    fact:
      "You can always add slices of cucumber to your water to give it a cool cucumber taste"
  },
  {
    id: "15",
    question: "This fruit grows in bunches known as hands",
    imageSrc: bananaBlank,
    answers: ["Grapes", "Broccoli", "Bananas", "Oranges"],
    correctAnswer: "Bananas",
    fact:
      "A monkey doesn't use the stem part of the banana to peel it. Instead, it pinches the bottom, splits the peel and peels it back to eat the banana."
  },
  {
    id: "16",
    question: "This orange vegetable is very popular around Hallowe'en",
    imageSrc: pumpkinBlank,
    answers: ["Oranges", "Pumpkins", "Bell Peppers", "Spinach"],
    correctAnswer: "Pumpkins",
    fact:
      "Orange vegetables like pumpkins and squash are packed with vitamins that help to keep colds away."
  },
  {
    id: "17",
    question: "This vegetable is sweeter after a frost",
    imageSrc: kaleBlank,
    answers: ["Kale", "Sweet Potato", "Broccoli", "Spinach"],
    correctAnswer: "Kale",
    fact:
      "Kale is a hearty leafy green that is very versatile and can be used in soups, salads and you can even make healthy chips!"
  },
  {
    id: "18",
    question:
      "True or false: Many green, bell peppers turn different colours and get sweeter if they are left on the plant.",
    imageSrc: peppers,
    answers: ["True", "False"],
    correctAnswer: "True",
    fact:
      "Green bell peppers can turn red, yellow, orange and even brown or purple."
  },
  {
    id: "19",
    question: "Where do pears grow?",
    imageSrc: pear,
    answers: ["On Trees", "Underground", "On a vine", "On top of soil"],
    correctAnswer: "On Trees",
    fact:
      "Pears are one of the few fruits that ripen best after it has been picked off the tree"
  },
  {
    id: "20",
    question:
      "This vegetable is actually a grain. You can pop it to make a snack",
    imageSrc: corn,
    answers: ["Cauliflower", "Corn", "Spinach", "Broccoli"],
    correctAnswer: "Corn",
    fact:
      "On average an ear of corn has about 600 kernels arranged in 16 rows and corn will always have an even number of rows on each cob."
  }
];

export {
    MAIN_GAME_DATA,
    MAIN_GAME
};
