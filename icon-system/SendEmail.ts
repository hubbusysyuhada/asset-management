class SendEmail extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M13 15.0002C12.4 15.0002 12 15.5002 12 16.0002C12 16.6002 12.5 17.0002 13 17.0002H18.3C18.2 17.1002 18.1 17.2002 18 17.3002C17.8 17.6002 17.5 17.9002 17.4 18.1002C17.3 18.2002 17.3 18.3002 17.2 18.3002V18.4002C16.9 18.8002 17 19.5002 17.4 19.8002C17.8 20.1002 18.5 20.0002 18.8 19.6002V19.5002C18.8 19.4002 18.9 19.4002 19 19.3002C19.1 19.1002 19.3 18.9002 19.6 18.6002C20.1 18.0002 20.7 17.3002 21.2 16.7002L22 16.0002L21.3 15.3002C20.8 14.8002 20.2 14.0002 19.7 13.4002C19.5 13.1002 19.3 12.8002 19.1 12.7002C19 12.6002 19 12.5002 18.9 12.4002V12.3002C18.6 11.9002 17.9 11.8002 17.5 12.1002C17.1 12.4002 17 13.1002 17.3 13.5002V13.6002C17.3 13.7002 17.4 13.7002 17.5 13.8002C17.6 14.0002 17.9 14.3002 18.1 14.6002C18.2 14.7002 18.3 14.8002 18.4 14.9002H13V15.0002Z" />
<path style="${this.colorStyle}"  d="M7 19C5.3 19 4 17.7 4 16V8C4 8 4.1 8 4.1 7.9L10.3 12.1C10.8 12.4 11.4 12.6 12 12.6C12.6 12.6 13.2 12.4 13.7 12.1L19.9 7.9C19.9 8 20 8 20 8V10.1C20 10.7 20.4 11.1 21 11.1C21.6 11.1 22 10.7 22 10.1V8C22 5.2 19.8 3 17 3H7C4.2 3 2 5.2 2 8V16C2 18.8 4.2 21 7 21H14C14.6 21 15 20.6 15 20C15 19.4 14.6 19 14 19H7ZM7 5H17C17.9 5 18.7 5.4 19.2 6L12.5 10.4C12.2 10.6 11.7 10.6 11.4 10.4L4.8 6C5.3 5.4 6.1 5 7 5Z" />
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
    this.props.forEach(key => this[key as keyof typeof SendEmail] = this.getAttribute(key));
  }
}
export default SendEmail