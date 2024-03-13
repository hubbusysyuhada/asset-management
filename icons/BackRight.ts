class BackRight extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 20.7071C14.6834 21.0976 15.3166 21.0976 15.7071 20.7071L19.7071 16.7071C20.0976 16.3166 20.0976 15.6834 19.7071 15.2929L15.7071 11.2929C15.3166 10.9024 14.6834 10.9024 14.2929 11.2929C13.9024 11.6834 13.9024 12.3166 14.2929 12.7071L17.5858 16L14.2929 19.2929C13.9024 19.6834 13.9024 20.3166 14.2929 20.7071Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M4 13C4 15.2091 5.79086 17 8 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H8C6.89543 15 6 14.1046 6 13V4C6 3.44771 5.55228 3 5 3C4.44772 3 4 3.44771 4 4V13Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof BackRight] = this.getAttribute(key));
  }
}
export default BackRight