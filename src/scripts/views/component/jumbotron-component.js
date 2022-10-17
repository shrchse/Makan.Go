class jumboTron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML += `<div class="jt-wrapper">
        <div class="jt-item">
          <h1>Ayang ngajak makan tapi terserah? Kami solusinya</h1>
        </div>
        <div class="jt-item">
          <a href="#card-section" class="jt-item-a"> Explore! </a>
        </div>
      </div>`;
  }
}
customElements.define('jumbo-tron', jumboTron);
