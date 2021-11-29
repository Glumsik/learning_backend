import express from "express";
import BookPageHandler from "./bookPage.model.js";

const bookPageRouter = () => {
  const bookPage = express.Router();

  const bookPageHandler = new BookPageHandler();

  bookPage.route("/main").get(bookPageHandler.mainPage);
  bookPage.route("/allBooks").get(bookPageHandler.booksPage);

  return bookPage;
};

export default bookPageRouter;
