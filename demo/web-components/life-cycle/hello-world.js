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

  adoptedCallbackCallback() {
    console.log('adoptedCallback');
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    console.log('attributeChanged', attr, oldValue, newValue);

    if (attr === 'message'
        && newValue !== oldValue) {
      this.container.textContent = newValue;
    }
  }
}

window.customElements.define('hello-world', HelloWorld);
