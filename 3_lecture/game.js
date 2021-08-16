const fs = require("fs");
const readline = require("readline");
const input = readline.createInterface(process.stdin);

const greenLog = "\x1b[32m";
const redLog = "\x1b[31m";
const defaultLog = "\033[0m";

const fileName = process.argv[2];

if (fileName) {
  const writeStream = fs.createWriteStream(`./${process.argv[2]}.txt`);
  let numberRandom;

  const startGame = () => {
    console.log(defaultLog, "Я кинул монетку\n 1-орел\n 0-решка");
    console.log("Попробуй угадать");
    numberRandom = Math.round(Math.random());
  };

  input.on("line", (text) => {
    if (text === "close") return input.close();
    const inputNumber = Number(text);
    const finishRes = inputNumber === numberRandom;

    finishRes ? console.log(greenLog, "Угадал!") : console.log(redLog, "Мимо!");
    writeStream.write(String(finishRes) + "\n", "utf8");
    startGame();
  });

  startGame();

  input.on("close", () => {
    writeStream.end();
    console.log(`Результат записан тут ${fileName}`);
  });
} else {
  console.log("Введи имя файла для логирования!!!");
  input.close();
}
