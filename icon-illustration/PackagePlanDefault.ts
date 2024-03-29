class PackagePlanDefault extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6189 44.1088V95.3322L63.6476 114V61.2355L42.4998 53V35.5L21.6189 44.1088Z" fill="#989899"/>
<path d="M63.6481 61.2356V114L105.677 95.3322V44.1089L100.757 41.9321V46.216L63.6481 61.2356Z" fill="#E8E8E8"/>
<path d="M58.7283 14V66.0418L63.6129 61.2355L100.757 55.9417V32.633L58.7283 14Z" fill="#E8E8E8"/>
<path d="M96.1339 50.2042L63.3521 36.3513V30.0562L96.1339 43.9177V50.2042Z" fill="#D1D1D2"/>
<path d="M42 15V52.7884L67.8946 62.2355L84.0287 56.7501V33.633L42 15Z" fill="#E8E8E8"/>
<path d="M105.74 44.2002L63.6111 61.2363L68.1321 72.4164L110.261 55.3803L105.74 44.2002Z" fill="#D1D1D2"/>
<path d="M105.738 44.1959L100.757 46.216V41.9321L105.738 44.1959Z" fill="#989899"/>
<path d="M17 55.3755L59.1292 72.4116L63.6501 61.2315L21.521 44.1954L17 55.3755Z" fill="#D1D1D2"/>
<path d="M79.4049 51.2042L46.623 37.3513V31.0562L79.4049 44.9177V51.2042Z" fill="#D1D1D2"/>
<path d="M59 96.5556L42 89V98.4444L59 106V96.5556Z" fill="#D1D1D2"/>
<path d="M60 62L42 54V64L60 72V62Z" fill="#D1D1D2"/>
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
    this.props.forEach(key => this[key as keyof typeof PackagePlanDefault] = this.getAttribute(key));
  }
}
export default PackagePlanDefault