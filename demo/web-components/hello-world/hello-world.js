class HelloWorld extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({
      mode: 'closed',
    });

    const container = document.createElement('span');
    container.textContent = 'HelloWorld';

    root.appendChild(container);
  }
}

window.customElements.define('hello-world', HelloWorld);
