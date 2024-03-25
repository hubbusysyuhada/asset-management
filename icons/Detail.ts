class Detail extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M9 20H7.6C6.17 20 5 18.83 5 17.4V6.6C5 5.17 6.17 4 7.6 4H13.33C13.54 4 13.75 4.09 13.9 4.23L13.96 4.29V6.43C13.96 7.32 14.68 8.05 15.58 8.05H17.55C17.57 8.11 17.59 8.18 17.59 8.25C17.59 8.8 18.04 9.25 18.59 9.25C19.14 9.25 19.59 8.8 19.59 8.25C19.59 7.51 19.29 6.79 18.77 6.27L15.32 2.82C14.79 2.3 14.07 2 13.33 2H7.6C5.06 2 3 4.06 3 6.6V17.4C3 19.94 5.06 22 7.6 22H9C9.55 22 10 21.55 10 21C10 20.45 9.55 20 9 20Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M20.5905 20.2902L18.7505 18.4502C19.5705 17.4502 20.0605 16.1702 20.0605 14.7802C20.0605 11.5902 17.4605 8.99023 14.2705 8.99023C11.0805 8.99023 8.48047 11.5902 8.48047 14.7802C8.48047 17.9702 11.0805 20.5702 14.2705 20.5702C15.3505 20.5702 16.3605 20.2702 17.2205 19.7502L19.1705 21.7002C19.3705 21.9002 19.6205 21.9902 19.8805 21.9902C20.1405 21.9902 20.3905 21.8902 20.5905 21.7002C20.9805 21.3202 20.9805 20.6802 20.5905 20.2902ZM10.4905 14.7902C10.4905 12.7002 12.1905 11.0002 14.2805 11.0002C16.3705 11.0002 18.0705 12.7002 18.0705 14.7902C18.0705 16.8802 16.3705 18.5802 14.2805 18.5802C12.1905 18.5802 10.4905 16.8802 10.4905 14.7902Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Detail] = this.getAttribute(key));
  }
}
export default Detail