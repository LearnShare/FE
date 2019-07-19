class FancyButton extends HTMLButtonElement {
  constructor() {
    super();

    this.addEventListener('click', () => {
      this.style.color = `rgb(${ this.random() }, ${ this.random() }, ${ this.random() })`;
    });
  }

  random = () => {
    return Math.random() * 255;
  }
}

window.customElements.define('fancy-button', FancyButton, {
  extends: 'button',
});
