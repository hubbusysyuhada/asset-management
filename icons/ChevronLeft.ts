class ChevronLeft extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M16.5981 5.34923C16.9575 5.76855 16.909 6.39985 16.4896 6.75927L10.3754 12L16.4896 17.2408C16.909 17.6002 16.9575 18.2315 16.5981 18.6508C16.2387 19.0701 15.6074 19.1187 15.1881 18.7593L8.4538 12.9871C7.8485 12.4682 7.8485 11.5318 8.4538 11.013L15.1881 5.24076C15.6074 4.88134 16.2387 4.9299 16.5981 5.34923Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof ChevronLeft] = this.getAttribute(key));
  }
}
export default ChevronLeft