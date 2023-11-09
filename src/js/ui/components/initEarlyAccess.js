import earlyAccessData from "../../mockData/earlyAccessData.js";
import { earlyAccessTemplate } from "../templates/earlyAccessTemplate.js";

const initEarlyAccess = () => {
  const futureHereNode = document.querySelector(".early_access");

  futureHereNode.insertAdjacentHTML(
    "beforeend",
    earlyAccessTemplate(earlyAccessData)
  );
};

export default initEarlyAccess;