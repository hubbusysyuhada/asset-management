class Lamp extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 12.0354 16.9865 13.8341 15.4366 14.9189C15.7888 15.3497 16 15.9002 16 16.5C16 17.7099 15.1405 18.7191 13.9988 18.9502C13.9996 18.9667 14 18.9833 14 19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19C10 18.9833 10.0004 18.9667 10.0012 18.9502C8.85949 18.7191 8 17.7099 8 16.5C8 15.9002 8.21123 15.3497 8.56337 14.9189C7.0135 13.8341 6 12.0354 6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10ZM16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10ZM11.9146 16H12H12.0854H13.5C13.7761 16 14 16.2239 14 16.5C14 16.7761 13.7761 17 13.5 17H12.0854H11.9146H10.5C10.2239 17 10 16.7761 10 16.5C10 16.2239 10.2239 16 10.5 16H11.9146Z" />
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
    this.props.forEach(key => this[key as keyof typeof Lamp] = this.getAttribute(key));
  }
}
export default Lamp