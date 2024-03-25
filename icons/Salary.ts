class Salary extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M20.6021 8.2C20.3037 7.9 20.1047 7.7 19.8063 7.6L19.2094 7.1L19.6073 4C19.7068 3.5 19.3089 3 18.8115 2.9L15.5288 2.4C15.3298 2.2 15.0314 2 14.733 2H4.78534C4.18848 2 3.79058 2.4 3.79058 3V7.1L3.09424 7.6C2.89529 7.7 2.59686 7.9 2.49738 8.1L2.39791 8.2C2.19895 8.5 2 8.9 2 9.3V17.2C2 19.9 4.08901 22 6.77487 22H16.2251C18.8115 22 21 19.9 21 17.2V9.3C20.9005 8.9 20.801 8.5 20.6021 8.2ZM16.822 9.7L15.7277 10.5V4.5L17.4188 4.8L16.822 9.7ZM13.7382 4V12L12.644 12.9C12.7435 12.6 12.7435 12.4 12.7435 12.1C12.7435 10.4 11.4503 9.1 9.75916 9.1C8.66492 9.1 7.76963 9.7 7.27225 10.5L5.7801 9.3V4H13.7382ZM10.356 12.8L8.86387 11.7C8.96335 11.3 9.36126 11 9.75916 11C10.356 11 10.7539 11.4 10.7539 12C10.7539 12.3 10.555 12.6 10.356 12.8ZM19.0105 17.2C19.0105 18.8 17.7173 20.1 16.1257 20.1H6.77487C5.18325 20.1 3.89005 18.8 3.89005 17.2V10.3L9.95812 14.9C10.4555 15.2 10.9529 15.4 11.5497 15.4C12.1466 15.4 12.644 15.2 13.1414 14.9L19.1099 10.4V17.2H19.0105Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M9.75972 8C10.5555 8 11.2519 7.3 11.2519 6.5C11.2519 5.7 10.5555 5 9.75972 5C8.96391 5 8.26758 5.7 8.26758 6.5C8.26758 7.3 8.96391 8 9.75972 8Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Salary] = this.getAttribute(key));
  }
}
export default Salary