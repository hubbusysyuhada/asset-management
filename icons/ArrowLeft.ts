class ArrowLeft extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 11.4477 19.5523 11 19 11H7.41421L9.70711 8.70711C10.0976 8.31658 10.0976 7.68342 9.70711 7.29289C9.31658 6.90237 8.68342 6.90237 8.29289 7.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L8.29289 16.7071C8.68342 17.0976 9.31658 17.0976 9.70711 16.7071C10.0976 16.3166 10.0976 15.6834 9.70711 15.2929L7.41421 13H19C19.5523 13 20 12.5523 20 12Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof ArrowLeft] = this.getAttribute(key));
  }
}
export default ArrowLeft