class fooComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML += `<div class="footer-container">
        <div class="footer_left">
          <div class="footer-left"><h1>Aplikasi Makan.Go</h1></div>
          <div class="footer-left"><p>Adalah aplikasi yang dibuat untuk kamu yang bingung mau makan dimana</p>
          </div>
          <br>
          <h1>Copyright © 2022 - Makan.Go</h1>
        </div>
      </div>`;
  }
}
customElements.define('foo-ter', fooComponent);
