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
  year: (arr, number) => getYear(arr, number),
  y: (arr, number) => getYear(arr, number),
  month: (arr, number) => getMonth(arr, number),
  m: (arr, number) => getMonth(arr, number),
  date: (arr, number) => getDay(arr, number),
  d: (arr, number) => getDay(arr, number),
  full: () => date.toLocaleString("ru", fullOptions),
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

function getYear(arr, number) {
  if (!!arr.length) {
    if (arr.includes("sub")) {
      date.setYear(date.getFullYear() - number);
    }
    if (arr.includes("add")) {
      date.setYear(date.getFullYear() + number);
    }
    return date.toLocaleString("ru", fullOptions);
  } else {
    return date.toLocaleString("ru", yearOptions);
  }
}

function getMonth(arr, number) {
  if (!!arr.length) {
    if (arr.includes("sub")) {
      date.setMonth(date.getMonth() - number);
    }
    if (arr.includes("add")) {
      date.setMonth(date.getMonth() + number);
    }
    return date.toLocaleString("ru", fullOptions);
  } else {
    return date.toLocaleString("ru", monthOptions);
  }
}

function getDay(arr, number) {
  if (!!arr.length) {
    if (arr.includes("sub")) {
      date.setDate(date.getDate() - number);
    }
    if (arr.includes("add")) {
      date.setDate(date.getDate() + number);
    }
    return date.toLocaleString("ru", fullOptions);
  } else {
    return date.toLocaleString("ru", dayOptions);
  }
}
