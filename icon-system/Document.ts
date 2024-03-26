class Document extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M16 22H8.54545C6.03636 22 4 19.9636 4 17.4545V6.54545C4 4.03636 6.03636 2 8.54545 2H14.3364C15.0636 2 15.7455 2.28182 16.2636 2.8L19.7455 6.28182C20.2636 6.8 20.5455 7.48182 20.5455 8.20909V17.4545C20.5455 19.9636 18.5091 22 16 22ZM8.54545 3.81818C7.04545 3.81818 5.81818 5.04545 5.81818 6.54545V17.4545C5.81818 18.9545 7.04545 20.1818 8.54545 20.1818H16C17.5 20.1818 18.7273 18.9545 18.7273 17.4545V8.20909C18.7273 7.96364 18.6364 7.73636 18.4636 7.56364L14.9818 4.08182C14.8091 3.90909 14.5818 3.81818 14.3364 3.81818H8.54545Z" />
<path style="${this.colorStyle}"  d="M14.4082 2.9082V6.77184C14.4082 7.77184 15.2264 8.59002 16.2264 8.59002H19.8627L14.4082 2.9082Z" />
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
    this.props.forEach(key => this[key as keyof typeof Document] = this.getAttribute(key));
  }
}
export default Document