class EnvelopeOpen extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M21.59 7.51253L21.6 7.49253L21.52 7.43253C21.32 7.19253 21.07 7.00253 20.78 6.87253L13.64 1.50253C12.66 0.842528 11.37 0.822528 10.3 1.50253L3.2 6.88253C2.92 7.01253 2.68 7.20253 2.48 7.43253L2.4 7.49253L2.42 7.51253C2.16 7.85253 2 8.26253 2 8.71253V17.0025C2 19.7625 4.24 22.0025 7 22.0025H17C19.76 22.0025 22 19.7625 22 17.0025V8.71253C22 8.26253 21.84 7.85253 21.59 7.51253ZM11.43 3.15253C11.76 2.94253 12.19 2.94253 12.48 3.13253L18.96 8.00253L12.57 12.8525C12.24 13.0625 11.81 13.0625 11.52 12.8725L5.04 8.00253L11.43 3.15253ZM17 20.0125H7C5.35 20.0125 4 18.6625 4 17.0125V9.72253L10.36 14.5025C10.86 14.8325 11.43 15.0025 12.01 15.0025C12.59 15.0025 13.17 14.8325 13.71 14.4925L20 9.73253V17.0125C20 18.6625 18.65 20.0125 17 20.0125Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof EnvelopeOpen] = this.getAttribute(key));
  }
}
export default EnvelopeOpen