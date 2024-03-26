class BackLeft extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M9.70711 20.7071C9.31658 21.0976 8.68342 21.0976 8.29289 20.7071L4.29289 16.7071C3.90237 16.3166 3.90237 15.6834 4.29289 15.2929L8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929C10.0976 11.6834 10.0976 12.3166 9.70711 12.7071L6.41421 16L9.70711 19.2929C10.0976 19.6834 10.0976 20.3166 9.70711 20.7071Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M20 13C20 15.2091 18.2091 17 16 17H5C4.44771 17 4 16.5523 4 16C4 15.4477 4.44771 15 5 15H16C17.1046 15 18 14.1046 18 13V4C18 3.44771 18.4477 3 19 3C19.5523 3 20 3.44771 20 4V13Z" />
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
    this.props.forEach(key => this[key as keyof typeof BackLeft] = this.getAttribute(key));
  }
}
export default BackLeft