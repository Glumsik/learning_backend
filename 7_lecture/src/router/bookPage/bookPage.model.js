class BookPageHandler {
  constructor() {}

  mainPage(_, res) {
    res.render("main/index", { title: "Главная" });
  }

  booksPage(_, res) {
    res.render("allBooks/index", { title: "Все книги" });
  }
}

export default BookPageHandler;
