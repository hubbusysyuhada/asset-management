class ChevronUp extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M18.6508 16.5991C18.2314 16.9585 17.6001 16.9099 17.2407 16.4906L12 10.3764L6.75924 16.4906C6.39982 16.9099 5.76852 16.9585 5.34919 16.5991C4.92986 16.2397 4.8813 15.6084 5.24073 15.189L11.0129 8.45477C11.5318 7.84948 12.4682 7.84948 12.987 8.45477L18.7592 15.189C19.1187 15.6084 19.0701 16.2397 18.6508 16.5991Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof ChevronUp] = this.getAttribute(key));
  }
}
export default ChevronUp