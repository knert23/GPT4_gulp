    export const headerTemplate = ({title}) => {
        return `<h1 class="news_header">${title}</h1>`
    };

    export const leftContainerNewsTemplate = ({src, title, date, href}) => {
        return `
            <img src="${src}">
            <div class ="container_text__left">
                <div class="upper_text__left">
                    <p class="date">${date}</p>
                    <h3 class="news_title">${title}</h3>
                </div>
                <a href="${href}" class="cta">Читать полную статью</a>
            </div>
        `
    };

    export const rightContainerNewsTemplate = ({src, title, date, href}) => {
        return `
        <div class="container__right">
            <img src="${src}">
            <div class ="container_text__right">
                <div class="upper_text__right">
                    <p class="date">${date}</p>
                    <h3 class="news_title">${title}</h3>
                </div>
                <a href="${href}" class="cta">Читать полную статью</a>
            </div>
        </div>
        `
    };

    export const newsTemplate = ({leftNewsInfoData, rightNewsInfoData, headerData}) => {
        const headerTmpl = headerTemplate(headerData);
        const leftContainerNewsTmpl = leftContainerNewsTemplate(leftNewsInfoData);
        const rightContainerNewsTmpl = rightNewsInfoData.map((item) => rightContainerNewsTemplate(item));

        const resultTemplate = `
        <div class="news__section">
            ${headerTmpl}
            <div class="news_block">
                <div class="news_block__left">
                    <div class="container__left">
                        ${leftContainerNewsTmpl}
                    </div>
                </div>
                <div class="news_block__right">
                    ${rightContainerNewsTmpl}
                </div>
            </div>
        </div>
        `
        return resultTemplate;
    };