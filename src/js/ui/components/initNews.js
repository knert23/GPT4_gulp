import { newsData } from "../../mockData/newsData.js";
import { newsTemplate } from "../templates/newsTemplate.js";

const initNews = () => {
  const newsNode = document.querySelector(".news");

  newsNode.insertAdjacentHTML("beforeend", newsTemplate(newsData));
};

export default initNews;