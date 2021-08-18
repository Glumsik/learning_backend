require("dotenv").config();
const http = require("http");
const readline = require("readline");
const input = readline.createInterface(process.stdin);

const ACCESS = process.env.ACCESS;

let city = "Moscow";
let data = "";

const getApi = (city) =>
  `http://api.weatherstack.com/current?access_key=${ACCESS}&query=${city}`;

const getData = (api) => {
  http
    .get(api, (res) => {
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        const parsedData = JSON.parse(data);

        if (parsedData.success === false)
          return console.log(`Город не найден ${city} !`);
        else {
          const temp = parsedData.current.temperature;
          const time = parsedData.current.observation_time;
          const region = parsedData.location.country;
          console.log(
            `Температура в ${region}, ${city}: ${temp} градусов, измерена в ${time}`
          );
        }
      });
    })
    .on("error", (error) => console.error(error));
};

input.on("line", (text) => {
  if (text) city = text;

  getData(getApi(city));
  input.close();
});
