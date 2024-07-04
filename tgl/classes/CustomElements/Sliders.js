class Sliders extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('Slider element added to page.');
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('input');

    wrapper.setAttribute('name', 'Slider box');
    wrapper.setAttribute('type', 'range');

    let minValue, maxValue, currentValue;
    if (this.hasAttribute('min')) {
      minValue = this.getAttribute('min');
    } else {
      minValue = '0';
    }
    wrapper.setAttribute('min', minValue);
    if (this.hasAttribute('max')) {
      maxValue = this.getAttribute('max');
    } else {
      maxValue = '100';
    }
    wrapper.setAttribute('max', maxValue);
    if (this.hasAttribute('value')) {
      currentValue = this.getAttribute('value');
    } else {
      currentValue = '50';
    }
    wrapper.setAttribute('value', currentValue);
    let barShape;
    if (this.hasAttribute('shape')) {
      barShape = this.getAttribute('shape');
    } else {
      // rounded, square
      barShape = 'rounded';
    }
    let size;
    if (this.hasAttribute('size')) {
      size = this.getAttribute('size');
    } else {
      size = '1';
    }
    let theme;
    if (this.hasAttribute('theme')) {
      theme = this.getAttribute('theme');
    } else {
      theme = 'blue';
    }

    wrapper.setAttribute('class', 'slider ' + barShape);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    const defWidth = 100;
    const defHeight = 10;
    const calculatedWidth = defWidth * size;
    const calculatedHeight = defHeight * size;
    const roundedScale = 0.4;

    style.textContent =
      `
      .slider {
        cursor: pointer;
  -webkit-appearance: none;
        /*position: inline-block;*/
        width: ` +
      calculatedWidth +
      `px;
        height: ` +
      calculatedHeight +
      `px;
        border:1px solid black;
      }
      .filler{
        background:` +
      theme +
      `;
        left:0;
        width: ` +
      currentValue +
      `;
      }
      
      .slider.rounded{
        border-radius: calc(` +
      calculatedWidth +
      `px * ` +
      roundedScale +
      `);
      
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
        width: ` +
      calculatedHeight +
      `px;
        height: ` +
      calculatedHeight +
      `px;
  background: #red;
}


.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}

      handle.rounded{
        width: cal(` +
      calculatedHeight +
      ` / 2
      );
        border-radius:50%;
      }
      .square{
        border-radius:0px;
      }
    `;

    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
  }
}
customElements.define('tgl-slider', Sliders);
