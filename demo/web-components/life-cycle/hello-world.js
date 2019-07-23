class HelloWorld extends HTMLElement {
  static get observedAttributes() {
    return [
      'message',
    ];
  }

  constructor() {
    super();

    const root = this.attachShadow({
      mode: 'closed',
    });

    this.container = document.createElement('span');
    this.container.textContent = 'Hello World';

    root.appendChild(this.container);
  }

  connectedCallback() {
    console.log('connected');
  }

  disconnectedCallback() {
    console.log('disconnected');
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log('attributeChanged', attrName, oldValue, newValue);

    if (attrName === 'message'
        && newValue !== oldValue) {
      this.container.textContent = newValue;
    }
  }
}

window.customElements.define('hello-world', HelloWorld);
