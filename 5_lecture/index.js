import express from "express";
import { readFile, writeFile } from "./utils";

const booksPath = "./books.json";
const app = express();
const router = express.Router();

app.listen(3000);
app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use("/api/books", router);

const defaultBook = {
  title: "",
  description: "",
  authors: "",
  cover: "",
};

app.post("/api/user/login", (_, res) => {
  res.status(201).send({ id: 1, mail: "test@mail.ru" });
});

const getAllBooks = async (_, res) => {
  const allBooks = await readFile(booksPath);
  res.send(allBooks || "не смог получить книги");
};

const getBook = async (req, res) => {
  const { id } = req.params;
  const allBooks = await readFile(booksPath);
  const curentBook = allBooks.filter((book) => book["id"] === id);

  !!curentBook.length
    ? res.status(200).send(curentBook)
    : res.status(404).send("error\n книга не найдена");
};

const createBook = async (req, res) => {
  if (Object.keys(req.body).length == 0) {
    res.status(404).send("пустые данные");
  } else {
    const allBooks = await readFile(booksPath);
    const nextId = allBooks.length + 1;
    const newBook = { id: `${nextId}`, ...defaultBook, ...req.body };
    allBooks.push(newBook);

    await writeFile(booksPath, allBooks);
    res.status(200).send(JSON.stringify(newBook) + " книга записана");
  }
};

const updateBook = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(404).send("пустые данные");
  } else {
    const { id } = req.params;
    const allBooks = await readFile(booksPath);
    const bookId = allBooks.findIndex((book) => book.id === `${id}`);

    if (bookId == -1)
      return res.status(404).send("книга по такому id не найдена");

    allBooks[bookId] = { ...allBooks[bookId], ...req.body };

    await writeFile(booksPath, allBooks);
    res.status(200).send(JSON.stringify(allBooks[bookId]) + " книга изменена");
  }
};

const deleteBooks = async (req, res) => {
  const { id } = req.params;

  const allBooks = await readFile(booksPath);
  const newBooks = allBooks.filter((book) => book.id !== `${id}`);

  if (allBooks.length === newBooks.length)
    return res.status(404).send("книга по такому id не найдена");

  await writeFile(booksPath, newBooks);
  res.status(200).send("книга по такому id удалена");
};

router
  .get("/", getAllBooks)
  .get("/:id", getBook)
  .post("/", createBook)
  .put("/:id", updateBook)
  .delete("/:id", deleteBooks);
