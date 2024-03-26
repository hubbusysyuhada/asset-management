class User extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M12.4118 4C11.2097 4 10.2353 4.97444 10.2353 6.17647C10.2353 7.3785 11.2097 8.35294 12.4118 8.35294C13.6138 8.35294 14.5882 7.3785 14.5882 6.17647C14.5882 4.97444 13.6138 4 12.4118 4ZM8.23529 6.17647C8.23529 3.86987 10.1052 2 12.4118 2C14.7184 2 16.5882 3.86987 16.5882 6.17647C16.5882 8.48307 14.7184 10.3529 12.4118 10.3529C10.1052 10.3529 8.23529 8.48307 8.23529 6.17647ZM4 19.4118C4 15.0585 7.52905 11.5294 11.8824 11.5294H12.9412C17.2945 11.5294 20.8235 15.0585 20.8235 19.4118V19.9412C20.8235 21.0782 19.9018 22 18.7647 22H6.05882C4.92177 22 4 21.0782 4 19.9412V19.4118ZM11.8824 13.5294C8.63362 13.5294 6 16.163 6 19.4118V19.9412C6 19.9737 6.02634 20 6.05882 20H18.7647C18.7972 20 18.8235 19.9737 18.8235 19.9412V19.4118C18.8235 16.163 16.1899 13.5294 12.9412 13.5294H11.8824Z" />
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
    this.props.forEach(key => this[key as keyof typeof User] = this.getAttribute(key));
  }
}
export default User