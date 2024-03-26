class Share2 extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M21 5.5C21 7.433 19.433 9 17.5 9C16.598 9 15.7757 8.6588 15.1551 8.09843L9.88613 11.6111C9.96044 11.8949 10 12.1929 10 12.5C10 12.8071 9.96044 13.1051 9.88613 13.3889L14.6039 16.5341C15.2336 15.6081 16.2958 15 17.5 15C19.433 15 21 16.567 21 18.5C21 20.433 19.433 22 17.5 22C15.5788 22 14.0191 20.452 14.0002 18.5353L8.84486 15.0984C8.22429 15.6588 7.40199 16 6.5 16C4.567 16 3 14.433 3 12.5C3 10.567 4.567 9 6.5 9C7.40199 9 8.22429 9.3412 8.84486 9.90157L14.1139 6.3889C14.0396 6.10505 14 5.80715 14 5.5C14 3.567 15.567 2 17.5 2C19.433 2 21 3.567 21 5.5ZM17.5 7C18.3284 7 19 6.32843 19 5.5C19 4.67157 18.3284 4 17.5 4C16.6716 4 16 4.67157 16 5.5C16 6.32843 16.6716 7 17.5 7ZM6.5 14C7.32843 14 8 13.3284 8 12.5C8 11.6716 7.32843 11 6.5 11C5.67157 11 5 11.6716 5 12.5C5 13.3284 5.67157 14 6.5 14ZM19 18.5C19 19.3284 18.3284 20 17.5 20C16.6716 20 16 19.3284 16 18.5C16 17.6716 16.6716 17 17.5 17C18.3284 17 19 17.6716 19 18.5Z" />
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
    this.props.forEach(key => this[key as keyof typeof Share2] = this.getAttribute(key));
  }
}
export default Share2