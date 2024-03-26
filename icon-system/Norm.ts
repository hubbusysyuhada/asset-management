class Norm extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M19.58 6.27L16.18 2.82C15.66 2.29 14.96 2 14.21 2H8.55C6.04 2 4 4.06 4 6.6V17.4C4 19.94 6.04 22 8.55 22H15.83C18.34 22 20.38 19.94 20.38 17.4V8.25C20.39 7.5 20.1 6.8 19.58 6.27ZM15.84 20H8.55C7.15 20 6 18.83 6 17.4V6.6C6 5.17 7.15 4 8.55 4H14.21C14.23 4 14.26 4.01 14.28 4.01V6.82C14.28 7.81 15.08 8.62 16.06 8.62H18.39V17.4C18.39 18.83 17.25 20 15.84 20Z" />
<path style="${this.colorStyle}"  d="M10.7602 18C10.5002 18 10.2302 17.9 10.0302 17.7L7.96016 15.63C7.56016 15.23 7.56016 14.57 7.96016 14.17C8.36016 13.77 9.02016 13.77 9.42016 14.17L10.7602 15.51L15.2002 11.07C15.6002 10.67 16.2602 10.67 16.6602 11.07C17.0602 11.47 17.0602 12.13 16.6602 12.53L11.4902 17.7C11.2902 17.9 11.0202 18 10.7602 18Z" />
<path style="${this.colorStyle}"  d="M11.3102 12.0601H8.74023C8.19023 12.0601 7.74023 11.6101 7.74023 11.0601C7.74023 10.5101 8.19023 10.0601 8.74023 10.0601H11.3102C11.8602 10.0601 12.3102 10.5101 12.3102 11.0601C12.3102 11.6101 11.8602 12.0601 11.3102 12.0601Z" />
<path style="${this.colorStyle}"  d="M11.3102 8H8.74023C8.19023 8 7.74023 7.55 7.74023 7C7.74023 6.45 8.19023 6 8.74023 6H11.3102C11.8602 6 12.3102 6.45 12.3102 7C12.3102 7.55 11.8602 8 11.3102 8Z" />
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
    this.props.forEach(key => this[key as keyof typeof Norm] = this.getAttribute(key));
  }
}
export default Norm