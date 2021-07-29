#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;
const argvKeys = Object.keys(argv);

const fullOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const yearOptions = {
  year: "numeric",
};

const monthOptions = {
  month: "long",
};

const dayOptions = {
  day: "numeric",
};

const date = new Date();

const getDate = {
  year: () => {
    return date.toLocaleString("ru", yearOptions);
  },
  y: () => {
    return date.toLocaleString("ru", yearOptions);
  },
  month: (arr, number) => {
    return subMonth(arr, number);
  },
  m: (arr, number) => {
    return subMonth(arr, number);
  },
  date: (arr, number) => {
    return addDay(arr, number);
  },
  d: (arr, number) => {
    return addDay(arr, number);
  },
  full: () => {
    return date.toLocaleString("ru", fullOptions);
  },
};

// console.log(argv);

argvKeys.length > 2
  ? (() => {
      argvKeys.map((item) => {
        getDate[item] && console.log(getDate[item](argv["_"], argv[item]));
      });
    })()
  : (() => {
      console.log(getDate["full"]());
    })();

function subMonth(arr, number) {
  if (!!arr.length && arr.includes("sub")) {
    date.setMonth(date.getMonth() - number);
    return date.toLocaleString("ru", fullOptions);
  } else {
    return date.toLocaleString("ru", monthOptions);
  }
}
function addDay(arr, number) {
  if (!!arr.length && arr.includes("add")) {
    date.setDate(date.getDate() + number);
    return date.toLocaleString("ru", fullOptions);
  } else {
    return date.toLocaleString("ru", dayOptions);
  }
}
