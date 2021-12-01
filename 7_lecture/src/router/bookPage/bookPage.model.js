import { readFile, writeFile } from "../../utils/utils";
const booksPath = "./src/books.json";

class BookPageHandler {
  constructor() {}

  mainPage(_, res) {
    res.render("main/index", { title: "Главная" });
  }

  booksPage = async (_, res) => {
    const allBooks = await readFile(booksPath);
    res.render("allBooks/index", { title: "Все книги", allBooks: allBooks });
  };

  viewBook = async (req, res) => {
    const allBooks = await readFile(booksPath);
    const params = req.params.id;
    console.log(params);
    res.render("viewBook/index", {
      title: "Просмотр книги",
      book: Object.values(allBooks[params]),
    });
  };

  updateBook(_, res) {
    res.render("updateBook/index", { title: "Обновить книгу" });
  }

  createBook(_, res) {
    res.render("createBook/index", { title: "Создать книгу" });
  }
}

export default BookPageHandler;
