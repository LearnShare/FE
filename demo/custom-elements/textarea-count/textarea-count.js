class TextareaCount extends HTMLElement {
  static get observedAttributes() {
    return [
      'max',
    ];
  }

  constructor() {
    super();

    this.max = 0;
    this.total = 0;

    const root = this.attachShadow({
      mode: 'closed',
    });

    const style = document.createElement('style');
    style.textContent = `
      .container {
        position: relative;
      }

      textarea {
        display: block;
        box-sizing: border-box;
        padding: 10px;
        padding-bottom: 20px;
        width: 100%;
        font-size: 14px;
        line-height: 20px;
        color: #333;
      }

      span {
        position: absolute;
        right: 6px;
        bottom: 6px;
        font-size: 14px;
        line-height: 20px;
        color: #AAA;
      }

      span.out {
        color: red;
      }
    `;

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const textarea = document.createElement('textarea');
    container.appendChild(textarea);
    this.textarea = textarea;

    const span = document.createElement('span');
    container.appendChild(span);
    this.span = span;

    root.appendChild(style);
    root.appendChild(container);

    this.addListeners();
  }

  // check is text out of range
  checkRange = () =>  {
    let outOfRange = false;

    if (this.max
        && this.total > this.max) {
      outOfRange = true;
    }

    this.span.textContent = this.max
        ? `${ this.total }/${ this.max }`
        : '';

    this.span.setAttribute('class', outOfRange
        ? 'out'
        : '');
  }

  // watch attrs
  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'max'
        && oldValue !== newValue) {
      if (newValue
          && parseInt(newValue)) {
        this.max = parseInt(newValue);

        this.checkRange();
      }
    }
  }

  // listener: textarea content on change
  textOnChange = (event) => {
    const value = event.target.value;

    this.total = value.length
        || 0;

    this.checkRange();
  }

  // add listeners
  addListeners() {
    this.textarea.addEventListener('input', this.textOnChange);
  }

  // clear listeners
  clearListeners() {
    this.textarea.removeEventListener('input', this.textOnChange);
  }

}

window.customElements.define('textarea-count', TextareaCount);
