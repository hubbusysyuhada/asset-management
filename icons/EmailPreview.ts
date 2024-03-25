class EmailPreview extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M7 19C5.3 19 4 17.7 4 16V8C4 8 4.1 8 4.1 7.9L10.3 12.1C10.8 12.4 11.4 12.6 12 12.6C12.6 12.6 13.2 12.4 13.7 12.1L19.9 7.9C19.9 8 20 8 20 8V12C20 12.6 20.4 13 21 13C21.6 13 22 12.6 22 12V8C22 5.2 19.8 3 17 3H7C4.2 3 2 5.2 2 8V16C2 18.8 4.2 21 7 21H12C12.6 21 13 20.6 13 20C13 19.4 12.6 19 12 19H7ZM7 5H17C17.9 5 18.7 5.4 19.2 6L12.5 10.4C12.2 10.6 11.7 10.6 11.4 10.4L4.8 6C5.3 5.4 6.1 5 7 5Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M17 15.5C16.4 15.5 16 15.9 16 16.5C16 17.1 16.4 17.5 17 17.5C17.6 17.5 18 17.1 18 16.5C18 15.9 17.6 15.5 17 15.5Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M21.9004 16.1C20.8004 14 18.9004 13 17.0004 13C15.1004 13 13.2004 14.1 12.1004 16.1C12.0004 16.3 12.0004 16.6 12.1004 16.8C13.2004 18.9 15.1004 20 17.0004 20C18.9004 20 20.8004 18.9 21.9004 16.8C22.0004 16.6 22.0004 16.3 21.9004 16.1ZM17.0004 18.4C15.9004 18.4 14.7004 17.8 13.9004 16.4C14.7004 15.1 15.8004 14.5 17.0004 14.5C18.1004 14.5 19.3004 15.1 20.1004 16.4C19.3004 17.8 18.1004 18.4 17.0004 18.4Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof EmailPreview] = this.getAttribute(key));
  }
}
export default EmailPreview