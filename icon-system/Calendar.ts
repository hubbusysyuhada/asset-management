class Calendar extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11Z" />
<path style="${this.colorStyle}"  d="M7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16Z" />
<path style="${this.colorStyle}"  d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11Z" />
<path style="${this.colorStyle}"  d="M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z" />
<path style="${this.colorStyle}"  d="M15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11Z" />
<path style="${this.colorStyle}"  d="M15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4C19.7614 4 22 6.23858 22 9V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V9C2 6.23858 4.23858 4 7 4V3C7 2.44772 7.44772 2 8 2ZM7 6C5.34315 6 4 7.34315 4 9V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V9C20 7.34315 18.6569 6 17 6C17 6.55229 16.5523 7 16 7C15.4477 7 15 6.55229 15 6H9C9 6.55229 8.55228 7 8 7C7.44772 7 7 6.55229 7 6Z" />
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
    this.props.forEach(key => this[key as keyof typeof Calendar] = this.getAttribute(key));
  }
}
export default Calendar