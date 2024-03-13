class InfoSquare extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M12 17C11.4477 17 11 16.5523 11 16L11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11L13 16C13 16.5523 12.5523 17 12 17Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M11 8C11 7.44771 11.4477 7 12 7C12.5523 7 13 7.44771 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M17 22C19.7614 22 22 19.7614 22 17L22 7C22 4.23858 19.7614 2 17 2L7 2C4.23858 2 2 4.23858 2 7L2 17C2 19.7614 4.23858 22 7 22L17 22ZM20 17C20 18.6569 18.6569 20 17 20L7 20C5.34315 20 4 18.6569 4 17L4 7C4 5.34314 5.34315 4 7 4L17 4C18.6569 4 20 5.34315 20 7L20 17Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof InfoSquare] = this.getAttribute(key));
  }
}
export default InfoSquare