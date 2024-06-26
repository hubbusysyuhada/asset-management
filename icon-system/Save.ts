class Save extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V9.84261C20 9.16419 19.6561 8.53202 19.0865 8.16347L13.1479 4.32086C12.8243 4.11142 12.4469 4 12.0614 4H6ZM2 6C2 3.79086 3.79086 2 6 2H12.0614C12.8325 2 13.5871 2.22285 14.2344 2.64172L20.173 6.48433C21.3122 7.22143 22 8.48576 22 9.84261V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M16 17H8L8 20H16V17ZM8 15C6.89543 15 6 15.8954 6 17V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V17C18 15.8954 17.1046 15 16 15H8Z" />
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
    this.props.forEach(key => this[key as keyof typeof Save] = this.getAttribute(key));
  }
}
export default Save