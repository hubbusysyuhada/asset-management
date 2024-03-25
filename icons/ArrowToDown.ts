class ArrowToDown extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M12 4C11.4477 4 11 4.44772 11 5L11 16.5858L8.70711 14.2929C8.31658 13.9024 7.68342 13.9024 7.29289 14.2929C6.90237 14.6834 6.90237 15.3166 7.29289 15.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L16.7071 15.7071C17.0976 15.3166 17.0976 14.6834 16.7071 14.2929C16.3166 13.9024 15.6834 13.9024 15.2929 14.2929L13 16.5858L13 5C13 4.44772 12.5523 4 12 4Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof ArrowToDown] = this.getAttribute(key));
  }
}
export default ArrowToDown