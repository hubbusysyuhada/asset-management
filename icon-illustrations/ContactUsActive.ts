class ContactUsActive extends HTMLElement {
  id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
  props = ['size', 'color']
  contentStyle = '';
  colorStyle = '';
  size = ''
  color = ''
  constructor() {
    super()
    this._initElement()
    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.68 114.36C91.6698 114.36 114.36 91.6698 114.36 63.68C114.36 35.6902 91.6698 13 63.68 13C35.6902 13 13 35.6902 13 63.68C13 91.6698 35.6902 114.36 63.68 114.36Z" fill="#3D00C3"/>
<path d="M92.2999 58.1302C85.7899 74.3502 74.3599 85.7302 58.1499 92.2002C55.1199 93.4102 51.8799 94.3302 48.6599 94.7702C43.7399 95.4302 39.1599 93.7002 35.7999 90.2402C33.1799 87.5402 32.6899 84.6902 32.6799 81.4202C32.6799 80.8402 33.3699 80.0702 33.9399 79.7202C37.9499 77.3102 42.0099 75.0002 46.0399 72.6502C47.3999 71.8502 48.5899 72.2102 49.5699 73.2602C51.1599 74.9702 52.6299 76.8002 54.2099 78.5102C56.1299 80.5902 56.7099 80.5902 59.1999 79.2702C68.0399 74.6002 74.7799 67.8502 79.4399 59.0002C80.6799 56.6402 80.6599 55.9302 78.7399 54.1502C77.0199 52.5702 75.2099 51.0902 73.4799 49.5102C72.1699 48.3202 72.0999 47.0002 73.0299 45.4502C75.1899 41.8602 77.3399 38.2502 79.3099 34.5602C80.3299 32.6402 81.6699 32.2702 83.6899 32.5102C90.3799 33.3102 93.8699 38.1602 94.6099 43.6702C95.0299 46.8002 93.3899 55.4102 92.2999 58.1302Z" fill="#FFC401"/>
</svg>
`
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    this._setState();
  }

  connectedCallback() {
    this._setState();
  }
  
  disconnectedCallback() {
    this._setState();
  }

  _initElement() {
    this._setState()
    const size = this.size || 24
    let contentStyle = `object-fit: content; width: ${size}; height: ${size}`
    this.contentStyle = contentStyle
    if (this.color) this.colorStyle = `fill: ${this.color}`
  }

  _setState() {
    // @ts-ignore
    this.props.forEach(key => this[key as keyof typeof ContactUsActive] = this.getAttribute(key));
  }
}
export default ContactUsActive