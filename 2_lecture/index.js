const readline = require("readline");

const input = readline.createInterface(process.stdin);

// console.log(
//   "выберите сложность (введите цифру)\n1. легкий уровень\n2. средний уровень\n3. сложный уровень"
// );

input.on("line", (data) => {
  if (data === "close") process.exit();
  console.log(data);
});
