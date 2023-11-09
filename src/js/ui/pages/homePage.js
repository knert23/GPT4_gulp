import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initEarlyAccess from "../components/initEarlyAccess.js";
import initNews from "../components/initNews.js";
import initRegistrationBar from "../components/initRegistrationBar.js";
import initEnd from "../components/initEnd.js";

const initHomePage = (element) => {
  const template = `
  <div class ="page" style="
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
">
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class = "section early_access"></section>
    <section class = "section registration_bar"></section>
    <section class = "section news"></section>
    <section class = "section end"></section>
  </div>
  `;

  element.insertAdjacentHTML("beforeend", template);
};

const rootNode = document.querySelector("#root");

const homePage = () => {
  // инициализация элементов Главной страницы
  initHomePage(rootNode);

  // // инициализация шапки страницы с мок датой
  initHeader();

  // // инициализация хиро раздела
  initHero();

  // // инициализация хиро раздела
  initBrands();

  // // инициализация хиро раздела
  initWhatIsGpt();

  // // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere();

  // //инициализация раздела "Запросить ранний доступ" c мок датой
  initEarlyAccess();

  initRegistrationBar();

  initNews();

  //Я не знаю как правильно написать код, что бы он генерировал HTML с моими данными, нужна помощь
  initEnd();


  // инициализация бургера для адаптивного меню
  initBurger();
};

export default homePage;