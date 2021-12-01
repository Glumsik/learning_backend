import express from "express";
import BookResponceHandler from "./bookResponce.model.js";

const bookResponceRouter = () => {
  const book = express.Router();

  const bookResponceHandler = new BookResponceHandler();

  // book.route("/").get(bookResponceHandler.updateBook);

  return book;
};

export default bookResponceRouter;
