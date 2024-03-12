class Detail extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="${this.colorStyle}" d="M6 13.3359H5.06667C4.11333 13.3359 3.33333 12.5559 3.33333 11.6026V4.4026C3.33333 3.44927 4.11333 2.66927 5.06667 2.66927H8.88667C9.02667 2.66927 9.16667 2.72927 9.26667 2.8226L9.30667 2.8626V4.28927C9.30667 4.8826 9.78667 5.36927 10.3867 5.36927H11.7C11.7133 5.40927 11.7267 5.45594 11.7267 5.5026C11.7267 5.86927 12.0267 6.16927 12.3933 6.16927C12.76 6.16927 13.06 5.86927 13.06 5.5026C13.06 5.00927 12.86 4.52927 12.5133 4.1826L10.2133 1.8826C9.86 1.53594 9.38 1.33594 8.88667 1.33594H5.06667C3.37333 1.33594 2 2.70927 2 4.4026V11.6026C2 13.2959 3.37333 14.6693 5.06667 14.6693H6C6.36667 14.6693 6.66667 14.3693 6.66667 14.0026C6.66667 13.6359 6.36667 13.3359 6 13.3359Z"
        fill="#3D00C3"/><path style="${this.colorStyle}" 
        d="M13.7276 13.5255L12.501 12.2989C13.0476 11.6322 13.3743 10.7789 13.3743 9.85219C13.3743 7.72552 11.641 5.99219 9.5143 5.99219C7.38763 5.99219 5.6543 7.72552 5.6543 9.85219C5.6543 11.9789 7.38763 13.7122 9.5143 13.7122C10.2343 13.7122 10.9076 13.5122 11.481 13.1655L12.781 14.4655C12.9143 14.5989 13.081 14.6589 13.2543 14.6589C13.4276 14.6589 13.5943 14.5922 13.7276 14.4655C13.9876 14.2122 13.9876 13.7855 13.7276 13.5255ZM6.9943 9.85885C6.9943 8.46552 8.12763 7.33219 9.52096 7.33219C10.9143 7.33219 12.0476 8.46552 12.0476 9.85885C12.0476 11.2522 10.9143 12.3855 9.52096 12.3855C8.12763 12.3855 6.9943 11.2522 6.9943 9.85885Z"
        fill="#3D00C3"/></svg>
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
    this.props.forEach(key => this[key as keyof typeof Detail] = this.getAttribute(key));
  }
}
export default Detail