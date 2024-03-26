class Chat extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7 5C5.34308 5 4 6.34308 4 7.9997V13.2642C4 14.9208 5.34308 16.2639 7 16.2639H8V18.0426L10.2528 16.2639H17C18.6569 16.2639 20 14.9208 20 13.2642V7.99971C20 6.34308 18.6569 5 17 5H7ZM2 7.9997C2 5.23837 4.23865 3 7 3H17C19.7614 3 22 5.23838 22 7.99971V13.2642C22 16.0255 19.7614 18.2639 17 18.2639H10.9472L7.78164 20.7632C7.0604 21.3326 6 20.819 6 19.8998L6 18.1639C3.7178 17.7007 2 15.6831 2 13.2642V7.9997Z" />
<path style="${this.colorStyle}"  d="M9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" />
<path style="${this.colorStyle}"  d="M13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11Z" />
<path style="${this.colorStyle}"  d="M17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11Z" />
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
    this.props.forEach(key => this[key as keyof typeof Chat] = this.getAttribute(key));
  }
}
export default Chat