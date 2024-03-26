class List1 extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M4 7C4.55228 7 5 6.55228 5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7Z" />
<path style="${this.colorStyle}"  d="M8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H8Z" />
<path style="${this.colorStyle}"  d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H8Z" />
<path style="${this.colorStyle}"  d="M7 18C7 17.4477 7.44772 17 8 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H8C7.44772 19 7 18.5523 7 18Z" />
<path style="${this.colorStyle}"  d="M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12Z" />
<path style="${this.colorStyle}"  d="M4 19C4.55228 19 5 18.5523 5 18C5 17.4477 4.55228 17 4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19Z" />
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
    this.props.forEach(key => this[key as keyof typeof List1] = this.getAttribute(key));
  }
}
export default List1