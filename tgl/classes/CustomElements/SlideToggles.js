class SlideToggles extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('Slide toggle element added to page.');
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    const input = document.createElement('input');
    wrapper.setAttribute('name', 'Slider box');
    input.setAttribute('name', 'Slider button');
    input.setAttribute('type', 'checkbox');

    // wrapper.setAttribute('onclick', 'switcheroo');
    // input.setAttribute('onclick', 'switcheroo');

    wrapper.addEventListener('click', function (event) {
      input.checked = !input.checked;
    });
    input.addEventListener('click', function (event) {
      input.checked = !input.checked;
    });

    // function switcheroo() {
    //   input.checked = !input.checked;
    // }

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
      size = '1';
    }

    wrapper.setAttribute('class', 'slide-toggle ' + shape);
    input.setAttribute('class', shape);

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
      .slide-toggle {
        position: inline-block;
        margin: 0;
        padding: 0;
        width: ` +
      calculatedWidth +
      `px;
        height: ` +
      calculatedHeight +
      `px;
        border:1px solid black;
        background: none;
        align-items: center;
        overflow: visible;
        cursor: pointer;
      }
      input{
      cursor:pointer;
        position:relative;
        width: ` +
      calculatedHeight +
      `px;
        height: ` +
      calculatedHeight +
      `px;
        margin-top:0;
        margin-left:0;
      }
      input:checked{
        margin-left:30px;
      }
      .slide-toggle.rounded{
        border-radius:calc(30px * ` +
      size +
      `);;
      }
      input.rounded{
        border-radius:0px;
      }
    `;

    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(input);
  }
}
customElements.define('tgl-slide-toggle', SlideToggles);
