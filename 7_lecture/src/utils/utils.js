import fs from "fs-extra";

const readFile = (filePath) => {
  return new Promise((resolve) => {
    fs.readFile(filePath, (_, data) => {
      const parsedData = JSON.parse(data);
      return resolve(parsedData);
    });
  });
};

const writeFile = (filePath, data) => {
  return new Promise((resolve) => {
    fs.writeFile(filePath, JSON.stringify(data), () => resolve("file write"));
  });
};

export { readFile, writeFile };
