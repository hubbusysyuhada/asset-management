class ChatAudio extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M2 7.24779C2 4.40699 4.1828 2 7 2H17C19.8172 2 22 4.40699 22 7.24779V14.6814C22 17.5222 19.8172 19.9292 17 19.9292H15.0162L12.743 21.7397C12.3073 22.0868 11.6927 22.0868 11.257 21.7397L8.98377 19.9292H7C4.1828 19.9292 2 17.5222 2 14.6814V7.24779ZM7 4C5.39892 4 4 5.39661 4 7.24779V14.6814C4 16.5326 5.39892 17.9292 7 17.9292H9.6829L12 19.7747L14.3171 17.9292H17C18.6011 17.9292 20 16.5326 20 14.6814V7.24779C20 5.39661 18.6011 4 17 4H7ZM11.497 20.1753C11.4974 20.175 11.4977 20.1747 11.4981 20.1744L11.497 20.1753ZM12.5019 20.1744C12.5023 20.1747 12.5026 20.175 12.503 20.1753L12.5019 20.1744Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V8Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M8 8C7.44772 8 7 8.44772 7 9V14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14V9C9 8.44772 8.55228 8 8 8Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M16 8C15.4477 8 15 8.44772 15 9V14C15 14.5523 15.4477 15 16 15C16.5523 15 17 14.5523 17 14V9C17 8.44772 16.5523 8 16 8Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof ChatAudio] = this.getAttribute(key));
  }
}
export default ChatAudio