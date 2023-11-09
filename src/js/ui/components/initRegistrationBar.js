import registrationBarData from "../../mockData/registrationBarData.js";
import { registrationBarTemplate } from "../templates/registrationBarTemplate.js";

const initRegistrationBar = () => {
  const registarionBarNode = document.querySelector(".registration_bar");

  registarionBarNode.insertAdjacentHTML(
    "beforeend",
    registrationBarTemplate(registrationBarData)
  );
};

export default initRegistrationBar;