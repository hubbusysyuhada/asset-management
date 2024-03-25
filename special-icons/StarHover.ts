class StarHover extends HTMLElement {
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
<path d="M8.95703 8.36523L11.957 2.86523L14.957 8.36523L20.957 9.36523L16.957 13.8652L17.457 19.8652L11.957 17.8652L6.45703 19.8652L6.95703 13.8652L2.95703 9.36523L8.95703 8.36523Z" fill="#FFF3C2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1078 3.24107C10.7865 1.5863 13.1299 1.58631 13.8086 3.24107L15.5327 7.44479L20.0635 7.7855C21.847 7.91961 22.5711 10.1484 21.2071 11.3052L17.7419 14.2439L18.8179 18.6582C19.2415 20.3959 17.3456 21.7733 15.8239 20.8335L11.9582 18.446L8.09247 20.8335C6.57075 21.7733 4.67486 20.3959 5.09844 18.6582L6.17449 14.2439L2.70929 11.3052C1.34525 10.1484 2.06941 7.91962 3.85291 7.7855L8.38366 7.44479L10.1078 3.24107ZM11.9582 4L10.2341 8.20372C9.94679 8.90419 9.2886 9.38239 8.53364 9.43916L4.00288 9.77987L7.46808 12.7186C8.04549 13.2083 8.29689 13.982 8.11759 14.7176L7.04154 19.1319L10.9073 16.7444C11.5514 16.3466 12.365 16.3466 13.0091 16.7444L16.8748 19.1319L15.7988 14.7176C15.6195 13.982 15.8709 13.2083 16.4483 12.7186L19.9135 9.77987L15.3827 9.43916C14.6278 9.38239 13.9696 8.90419 13.6823 8.20372L11.9582 4Z" fill="#FFD740"/>
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
    this.props.forEach(key => this[key as keyof typeof StarHover] = this.getAttribute(key));
  }
}
export default StarHover