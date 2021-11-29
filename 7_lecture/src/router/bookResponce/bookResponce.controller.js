import express from "express";
import BookResponceHandler from "./bookResponce.model.js";

const bookResponceRouter = () => {
  const book = express.Router();

  const bookResponceHandler = new BookResponceHandler();

  book.route("/book/all").get(bookResponceHandler.allBook);

  return book;
};

export default bookResponceRouter;
