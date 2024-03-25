class Link extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M10.4211 9C10.4211 8.44772 9.97334 8 9.42105 8H6.21053C3.88512 8 2 9.79086 2 12C2 14.2091 3.88512 16 6.21053 16H9.42105C9.97334 16 10.4211 15.5523 10.4211 15V15C10.4211 14.4477 9.97334 14 9.42105 14H6.21053C5.04782 14 4.10526 13.1046 4.10526 12C4.10526 10.8954 5.04782 10 6.21053 10H9.42105C9.97334 10 10.4211 9.55228 10.4211 9V9Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M13.5789 15C13.5789 14.4477 14.0267 14 14.5789 14H17.7895C18.9522 14 19.8947 13.1046 19.8947 12C19.8947 10.8954 18.9522 10 17.7895 10H14.5789C14.0267 10 13.5789 9.55228 13.5789 9V9C13.5789 8.44772 14.0267 8 14.5789 8H17.7895C20.1149 8 22 9.79086 22 12C22 14.2091 20.1149 16 17.7895 16H14.5789C14.0267 16 13.5789 15.5523 13.5789 15V15Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 11.4477 8.44772 11 9 11L15 11C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13L9 13C8.44772 13 8 12.5523 8 12Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Link] = this.getAttribute(key));
  }
}
export default Link