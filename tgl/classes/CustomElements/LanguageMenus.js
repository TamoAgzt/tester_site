class LanguageMenus extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // console.log('Language menu element added to page.');
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('name', 'Language box');
    wrapper.setAttribute('class', 'language-options');
    let languages = this.getAttribute('languages');
    let languagesArray = languages.split(' ');

    languagesArray.forEach((languageCode) => {
      let input = document.createElement('input');
      let label = document.createElement('label');

      input.setAttribute('name', `languageCode`);
      input.setAttribute('id', `${languageCode.toUpperCase()}`);
      input.setAttribute('value', `${languageCode.toUpperCase()}`);
      input.setAttribute('type', 'radio');
      label.setAttribute('for', `${languageCode}`);
      label.textContent = languageCode.toUpperCase();

      input.setAttribute('class', 'language-button');
      label.setAttribute('class', 'language-label');

      wrapper.appendChild(label);
      wrapper.appendChild(input);
    });

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    // console.log(style.isConnected);

    style.textContent = `
      .language-options {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 10px;
      }

      .language-options input {
        display: none;
      }

      .language-options label {
        border-radius: 4px;
        margin: 5px 0;
        height: 30px;
        line-height: 30px;
        background-color: #c7c7c780;
        border-style: none;
        text-align: center;
      }

      .language-options label:hover {
        background-color: #f1f1f1;
        cursor: pointer;
      }
    `;
    shadow.appendChild(style);
    // console.log(style.isConnected);
    shadow.appendChild(wrapper);

    wrapper.addEventListener('change', (event) => {
      if (event.target.name === 'languageCode') {
        const selectedLanguage = event.target.value;
        document.dispatchEvent(
          new CustomEvent('languageChange', {
            detail: { language: selectedLanguage }
          })
        );
      }
    });
  }
}
customElements.define('tgl-language-menu', LanguageMenus);
