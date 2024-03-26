class LikeHover extends HTMLElement {
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1099 8.81L11.8899 11H14.0899H18.0399C18.7299 11 19.2099 11.68 18.9799 12.33L17.2299 17.33C17.0999 17.73 16.7199 18 16.2899 18H8.87988V10.46L9.15988 9.87L10.8099 6.45C10.9399 6.17 11.2199 6 11.5199 6C11.9799 6 12.3399 6.4 12.2999 6.85L12.1099 8.81Z" fill="#DBC8F9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.11 8.81L11.89 11H14.09H18.04C18.73 11 19.21 11.68 18.98 12.33L17.23 17.33C17.1 17.73 16.72 18 16.29 18H8.88V10.46L9.16 9.87L10.81 6.45C10.94 6.17 11.22 6 11.52 6C11.98 6 12.34 6.4 12.3 6.85L12.11 8.81ZM8.85 20H7.85H6.88H6C4.34 20 3 18.66 3 17V10C3 8.9 3.9 8 5 8H7.85L9.02 5.58C9.48 4.61 10.45 4 11.52 4C13.14 4 14.42 5.39 14.29 7C14.29 7.02 14.29 7.03 14.29 7.05L14.1 9H16.11H18.05C20.12 9 21.56 11.04 20.88 12.99L19.13 17.99C18.71 19.19 17.57 20 16.3 20H8.88H8.85ZM5 10H6.85V18H6C5.45 18 5 17.55 5 17V10Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof LikeHover] = this.getAttribute(key));
  }
}
export default LikeHover