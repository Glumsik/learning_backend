const readline = require("readline");
const input = readline.createInterface(process.stdin);

const getRandomInt = (max) => {
  const minNumber = Math.floor(Math.random() * max);
  const maxNumber = minNumber + Math.floor(Math.random() * max);
  const number =
    Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return [minNumber, maxNumber, number];
};

const [minNumber, maxNumber, number] = getRandomInt(100);
let countTry = 0;

console.log(`Я загадал число от ${minNumber} до ${maxNumber}, отгадай его`);

input.on("line", (data) => {
  let inputNumber = Number(data);
  if (data === "close") {
    console.log(
      "Ты потратил: " + countTry + " попытки, но так и не отгадал число"
    );
    process.exit(0);
  } else if (inputNumber === number) {
    console.log("Ты выиграл на: " + countTry + " попытке");
    process.exit(0);
  } else if (inputNumber > number) {
    console.log("Меньше");
  } else if (inputNumber < number) {
    console.log("Больше");
  }
  countTry++;
});
