class Buttons extends HTMLElement {
  // static observedAttributes = ['color', 'size'];

  constructor() {
    super();
  }
  connectedCallback() {
    // console.log('Button element added to page.');
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    button.setAttribute('name', 'Button box');

    // Attributes check
    // fill, shape, size, disabled, download, type (changes the theme), icon-pos
    let fill;
    if (this.hasAttribute('fill')) {
      fill = this.getAttribute('fill');
    } else {
      //fill, outline, none
      fill = 'fill';
    }
    let shape;
    if (this.hasAttribute('shape')) {
      shape = this.getAttribute('shape');
    } else {
      // rounded, square, circle
      shape = 'rounded';
    }
    let size;
    if (this.hasAttribute('size')) {
      size = this.getAttribute('size');
    } else {
      // 1 2 3 4
      size = '1';
    }
    let status;
    if (this.hasAttribute('status')) {
      status = this.getAttribute('status');
    } else {
      // false true
      status = false;
    }
    let type;
    if (this.hasAttribute('btype')) {
      type = this.getAttribute('btype');
    } else {
      type = 'normal';
    }
    let imgPos;
    if (this.hasAttribute('icon-pos')) {
      imgPos = this.getAttribute('icon-pos');
    } else {
      // start none exclusive end
      imgPos = 'start';
    }
    let content;
    if (this.hasAttribute('content')) {
      content = this.getAttribute('content');
    } else {
      content = 'BUTTON';
    }

    button.setAttribute(
      'class',
      fill + ' ' + shape + ' ' + status + ' ' + type + ' ' + imgPos
    );

    button.innerText = content;

    // let imgUrl;
    // if (this.hasAttribute('img')) {
    //   imgUrl = this.getAttribute('img');
    // } else {
    //   imgUrl = '';
    // }

    // const img = document.createElement('img');
    // img.src = imgUrl;

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    // console.log(style.isConnected);

    const defWidth = 80;
    const defHeight = 30;
    const calculatedWidth = defWidth * size;
    const calculatedHeight = defHeight * size;
    const roundedScale = 0.4;
    style.textContent =
      `
      button {
        position: relative;
        display: inline-block;
        margin: 0;
        padding: 0;
        width: ` +
      calculatedWidth +
      `px;
        height: ` +
      calculatedHeight +
      `px;
        border:2px solid;
        background: none;
        align-items: center;
        overflow: visible;
        cursor: pointer;
      }
      .rounded{
        border-radius: calc(` +
      calculatedWidth +
      `px * ` +
      roundedScale +
      `);
      }
      .accept {
  background: var(--accept-main);
  border-color: var(--accept-accent);
}
.cancel {
  background: var(--cancel-main);
  border-color: var(--cancel-accent);
}
.back {
  background: var(--back-main);
  border-color: var(--back-accent);
}
.normal {
  background: var(--normal-main);
  border-color: var(--normal-accent);
}
.success {
  background: var(--success-main);
  border-color: var(--success-accent);
}
.warning {
  background: var(--warning-main);
  border-color: var(--warning-accent);
}
.danger {
  background: var(--danger-main);
  border-color: var(--danger-accent);
}

      .circle{
        border-radius:50%;
        width: ` +
      calculatedWidth +
      `px;
        height: ` +
      calculatedHeight +
      `px;
      }
      :hover{
        opacity: .6;
      }
    `;
    shadow.appendChild(style);
    // console.log(style.isConnected);
    shadow.appendChild(button);
  }
}
customElements.define('tgl-button', Buttons);

///////// ADD TEXT WRAPPING PLS
