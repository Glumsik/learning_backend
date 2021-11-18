import { readFile, writeFile } from "../../utils/utils";

class BookHandler {
  constructor() {}

  test(_, res) {
    res.render("main/index", { title: "Главная" });
  }
}

export default BookHandler;
