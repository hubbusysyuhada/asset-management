class Download extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M11 3.01142C10.9983 2.45888 11.4446 2.00955 11.9969 2.00782C12.5492 2.00608 12.9983 2.4526 13 3.00515L11 3.01142Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M14.3158 10.2974L13.0269 11.5949L13 3.00515L11 3.01142L11.0269 11.6012L9.73003 10.3118C9.33828 9.92231 8.7051 9.92427 8.3158 10.3162C7.9265 10.7081 7.92849 11.3416 8.32024 11.7311L8.32275 11.7336L8.32374 11.7346L12.039 15.4283L15.7206 11.7217L15.7262 11.7161L15.727 11.7153L15.7278 11.7145L15.7337 11.7086L15.7344 11.7078L14.3158 10.2974Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M15.7344 11.7078C16.1237 11.3159 16.1217 10.6824 15.73 10.2929C15.3382 9.90346 14.705 9.90547 14.3158 10.2974L15.7344 11.7078Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M4 12.0031C4 10.898 4.89543 10.0022 6 10.0022C6.55228 10.0022 7 9.55424 7 9.00169C7 8.44915 6.55228 8.00122 6 8.00122C3.79086 8.00122 2 9.79293 2 12.0031V18.0059C2 20.2161 3.79086 22.0078 6 22.0078H17C19.7614 22.0078 22 19.7682 22 17.0055V12.0031C22 9.79293 20.2091 8.00122 18 8.00122C17.4477 8.00122 17 8.44915 17 9.00169C17 9.55424 17.4477 10.0022 18 10.0022C19.1046 10.0022 20 10.898 20 12.0031V17.0055C20 18.6631 18.6569 20.0069 17 20.0069H6C4.89543 20.0069 4 19.111 4 18.0059V12.0031Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Download] = this.getAttribute(key));
  }
}
export default Download