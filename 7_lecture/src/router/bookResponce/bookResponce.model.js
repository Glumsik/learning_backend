import { readFile, writeFile } from "../../utils/utils";
const booksPath = "./src/books.json";

class BookResponceHandler {
  constructor() {}

  async allBook(_, res) {
    const allBooks = await readFile(booksPath);
    console.log(allBooks);
    // res.send(allBooks || "не смог получить книги");
  }
}

export default BookResponceHandler;
