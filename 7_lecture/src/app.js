import express from "express";
import path from "path";
import bookPageRouter from "./router/bookPage/bookPage.controller.js";
import bookResponceRouter from "./router/bookResponce/bookResponce.controller.js";
const __dirname = path.resolve();
console.log(__dirname);
const app = express();

app.set("views", path.join(__dirname, "src/views")).set("view engine", "pug");
app.use(express.static("public"));

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(bookPageRouter())
  .use(bookResponceRouter());

app.listen(3000, () => {
  console.log("server start");
});
