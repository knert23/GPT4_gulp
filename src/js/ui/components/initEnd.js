import endData from "../../mockData/endData.js";
import { endTemplate } from "../templates/endTemplate.js";

console.log(endData);
const initEnd = () => {
  const endNode = document.querySelector(".end");

  endNode.insertAdjacentHTML("beforeend", endTemplate(endData));
};

export default initEnd;