class ManageCandidate extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M10 10C12.2 10 14 8.2 14 6C14 3.8 12.2 2 10 2C7.8 2 6 3.8 6 6C6 8.2 7.8 10 10 10ZM10 4C11.1 4 12 4.9 12 6C12 7.1 11.1 8 10 8C8.9 8 8 7.1 8 6C8 4.9 8.9 4 10 4Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M10.5 11H9.5C5.4 11 2 14.4 2 18.5V19C2 20.1 2.9 21 4 21H12.0067C12 21 12.0067 19 12.0067 19H4V18.5C4 15.5 6.5 13 9.5 13H10.5C12.2 13 13.6 13.8 14.7 14.9L16.3 13.6C14.9 12 12.8 11 10.5 11Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M14.01 17.0074C13.45 17.0074 13 17.4574 13 18.0174C13 18.5774 13.45 19.0274 14.01 19.0274L18.35 19.0274C18.26 19.1374 18.17 19.2474 18.09 19.3474C17.84 19.6574 17.63 19.9374 17.49 20.1274C17.42 20.2274 17.36 20.3074 17.32 20.3574L17.27 20.4174L17.26 20.4374L17.26 20.4474C16.93 20.8974 17.03 21.5274 17.48 21.8574C17.93 22.1874 18.56 22.0874 18.89 21.6374L18.9 21.6274L18.94 21.5674C18.98 21.5174 19.03 21.4474 19.1 21.3474C19.24 21.1574 19.44 20.8974 19.67 20.6074C20.14 20.0074 20.74 19.2874 21.29 18.7474L22 18.0174L21.29 17.3074C20.74 16.7574 20.14 16.0374 19.67 15.4374C19.44 15.1474 19.24 14.8874 19.1 14.6974C19.03 14.6074 18.98 14.5274 18.94 14.4774L18.9 14.4174L18.89 14.4074C18.56 13.9574 17.93 13.8574 17.48 14.1874C17.03 14.5174 16.93 15.1474 17.26 15.5974L17.27 15.6174L17.32 15.6774C17.36 15.7274 17.42 15.8074 17.49 15.9074C17.64 16.1074 17.85 16.3774 18.09 16.6874C18.17 16.7874 18.26 16.8974 18.35 17.0074L14.01 17.0074Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof ManageCandidate] = this.getAttribute(key));
  }
}
export default ManageCandidate