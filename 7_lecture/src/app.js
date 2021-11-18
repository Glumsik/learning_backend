import express from "express";
import path from "path";
import bookRouter from "./router/book/book.controller.js";

const app = express();

app.set("views", path.join(__dirname, "/views")).set("view engine", "pug");
app.use(express.static("public"));

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(bookRouter());

app.listen(3000, () => {
  console.log("server start");
});
