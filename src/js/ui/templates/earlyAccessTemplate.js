    export const leftEarlyAccessSectionTemplate = ({ src, alt }) => {
        return `
            <div class = "early_access_section__left">
                <img src = "${src}" alt = "${alt}" >
            </div>
        `;
    };

    export const rightEarlyAccessSectionTemplate = ({ header, descriprion, mini_header, href, cta }) => {
      return `
        <div class = "early_access_section__right">
            <p class = "right__mini_header">
                ${mini_header}
            </p>
            <h2 class ="right__header">
                ${header}
            </h2>
            <p class = "right__description">
                ${descriprion}
            </p>
            <a href="${href}" class="right__cta">${cta}</a>
        </div>
      `;
    };

    export const earlyAccessTemplate = ({leftEarlyAccessData, rightEarlyAccessData}) =>{

        const leftEarlyAccessSectionTmpl = leftEarlyAccessSectionTemplate(leftEarlyAccessData);

        const rightEarlyAccessSectionTmpl = rightEarlyAccessSectionTemplate(rightEarlyAccessData);

        const resultTemplate =
            leftEarlyAccessSectionTmpl +
            rightEarlyAccessSectionTmpl;
  
        return resultTemplate;
     };
    