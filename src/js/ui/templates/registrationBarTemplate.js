/* <section class= "section registration_bar">
      <div class = "registration_bar_section">
        <div class = "registration_bar_section__left">
        <p class="right__mini_header">
          Запросите ранний доступ
        </p>
        <h3 class="right__header">
          Зарегистрируйтесь и начните исследовать
          безграничные возможности.
        </h3>
      </div>
      <div class = "registration_bar_section__right">
        <div class="cta_buttons">
          <a href ="#">
            <button class="cta_buttons__start btn2">Начать</button> 
          </a>
        </div>
      </div>
    </section> */

export const leftMiniHeaderTemplate = ({description}) => {
    return `<p class="right__mini_header">${description}</p>`;
};

export const leftHeaderTemplate = ({description}) => {
    return `<h3 class="right__header">${description}</h3>`;
};

export const rightButtonTemplate = ( {href, title}) => {
    return `<a href ="${href}">
                <button class="cta_buttons__start btn2">${title}</button> 
            </a>`;
};

export const registrationBarTemplate = ( {headerData, miniHeaderData, buttonsData} ) => {
    const leftMiniHeaderTmpl = leftMiniHeaderTemplate(miniHeaderData);
    const leftHeaderTmpl = leftHeaderTemplate(headerData);
    const rightButtonTmpl = rightButtonTemplate(buttonsData);

    return `
    <div class = "registration_bar_section">
        <div class = "registration_bar_section__left">
            ${leftMiniHeaderTmpl}
            ${leftHeaderTmpl}
        </div>
        <div class = "registration_bar_section__right">
            <div class="cta_buttons">
                ${rightButtonTmpl}
            </div>
        </div>
    </div>
    `
}