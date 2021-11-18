import express from "express";
import BookHandler from "./book.model.js";

const bookRouter = () => {
  const book = express.Router();

  const bookHandler = new BookHandler();

  book.route("/book/all").get(bookHandler.test);

  return book;
};

export default bookRouter;
