import axios from "axios";
import "./index.scss";

(() => {
  const tbody = document.querySelector("tbody");
  console.log("asdasd");
  
  axios.get("/book/all").then((response) => {
    console.log(response);
  });
})();
