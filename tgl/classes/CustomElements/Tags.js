class Tags extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('Tag element added to page.');
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    const img = document.createElement('img');
    wrapper.setAttribute('class', 'tag');
    wrapper.setAttribute('name', 'Tag box');
    img.setAttribute('name', 'Tag icon');

    let tagType;
    if (this.hasAttribute('tag-type')) {
      tagType = this.getAttribute('tag-type');
    } else {
      tagType = 'script';
    }
    let size;
    if (this.hasAttribute('size')) {
      size = this.getAttribute('size');
    } else {
      size = '1';
    }
    wrapper.setAttribute('class', 'tag ' + tagType);

    // Insert icon
    let imgUrl;
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = '';
    }

    img.src = imgUrl;

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    const defWidth = 60;
    const defHeight = 30;
    const calculatedWidth = defWidth * size;
    const calculatedHeight = defHeight * size;
    const roundedScale = 0.4;

    style.textContent =
      `
      .tag {
        display:block;
        justify-content: center;
        width: ` +
      calculatedWidth +
      `px;
        height: ` +
      calculatedHeight +
      `px;
        border-radius: 40px 15px;
      }
        .script {
  background-color: var(--tag-1);
}
.prog-lang {
  background-color: var(--tag-2);
}
.docs {
  background-color: var(--tag-3);
}
.tools {
  background-color: var(--tag-4);
}

      img {
        height:100%;
        margin: 0 15px;
      }
    `;
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(img);
  }
}
customElements.define('tgl-tag', Tags);

class TagBars extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log('Tag bar element added to page.');
    // Create a shadow root
    // const shadow = this.attachShadow({ mode: 'open' });
    // shadow.appendChild(stylingHelp.content.cloneNode(true));
  }
}
customElements.define('tgl-tag-bar', TagBars);
