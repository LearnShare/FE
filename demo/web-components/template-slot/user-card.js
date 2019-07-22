class UserCard extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({
      mode: 'closed',
    });

    const template = document.getElementById('the-template');
    const content = document.importNode(template.content, true);

    root.appendChild(content);
  }
}

window.customElements.define('user-card', UserCard);
