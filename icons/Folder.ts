class Folder extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M9 5C9.36 5 10.28 5.82 10.73 6.21C11.69 7.06 12.68 7.93 14 7.93H17C18.65 7.93 20 9.28 20 10.93V15.86C20 17.51 18.65 18.86 17 18.86H7C5.35 18.86 4 17.51 4 15.86V7C4 5.9 4.9 5 6 5H9ZM9 3H6C3.79 3 2 4.79 2 7V15.86C2 18.62 4.24 20.86 7 20.86H17C19.76 20.86 22 18.62 22 15.86V10.93C22 8.17 19.76 5.93 17 5.93H14C12.73 5.93 11 3 9 3Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Folder] = this.getAttribute(key));
  }
}
export default Folder