import express from "express";
import bodyParser from "body-parser";
import { readFile, writeFile } from "./utils";

const booksPath = "./books.json";
const app = express();
app.listen(3000);

const defaultBook = {
  title: "",
  description: "",
  authors: "",
  cover: "",
};

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/user/login", (_, res) => {
  res.status(201).send({ id: 1, mail: "test@mail.ru" });
});

app.get("/api/books", async (_, res) => {
  const allBooks = await readFile(booksPath);
  res.send(allBooks || "не смог получить книги");
});

app.get("/api/books/:id", async (req, res) => {
  const { id } = req.params;
  const allBooks = await readFile(booksPath);
  const curentBook = allBooks.filter((book) => book["id"] === id);
  console.log(curentBook);
  !!curentBook.length
    ? res.status(200).send(curentBook)
    : res.status(404).send("error\n книга не найдена");
});

app.post("/api/books", async (req, res) => {
  const allBooks = await readFile(booksPath);
  const nextId = allBooks.length + 1;
  const newBook = { id: `${nextId}`, ...defaultBook, ...req.body };
  allBooks.push(newBook);
  await writeFile(booksPath, allBooks);

  res.status(200).send(JSON.stringify(newBook) + " книга записана");
});
