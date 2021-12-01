import express from "express";
import BookPageHandler from "./bookPage.model.js";

const bookPageRouter = () => {
  const bookPage = express.Router();

  const bookPageHandler = new BookPageHandler();

  bookPage.route("/main").get(bookPageHandler.mainPage);
  bookPage.route("/allBooks").get(bookPageHandler.booksPage);
  bookPage.route("/viewBook/:id").get(bookPageHandler.viewBook);
  bookPage.route("/updateBook/:id").get(bookPageHandler.updateBook);
  bookPage.route("/createBook").get(bookPageHandler.createBook);

  return bookPage;
};

export default bookPageRouter;
