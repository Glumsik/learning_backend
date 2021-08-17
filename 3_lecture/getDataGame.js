const fs = require("fs");

const fileName = process.argv[2];
const readerStream = fs.createReadStream(`./${fileName}.txt`);
let data = "";

const statistic = (arr) => {
  const all = arr.length;
  const win = arr.filter((el) => el === "true").length;
  const loose = all - win;
  const stat = Math.round((win / all) * 100, 2);
  console.log("\x1b[36m", "Всего игр сыграно: ", all);
  console.log("\x1b[35m", "WIN: ", win, "\x1b[35m", "Loose: ", loose);
  console.log("\x1b[32m", "Процент побед: ", stat, "%");
};

readerStream.on("data", (chunk) => {
  data += chunk;
});

readerStream.on("end", () => {
  statistic(data.split("\n").slice(0, -1));
});
