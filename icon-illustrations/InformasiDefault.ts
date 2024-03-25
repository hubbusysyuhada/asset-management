class InformasiDefault extends HTMLElement {
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
<path d="M22.0005 12.0002C22.0005 6.47724 17.5232 1.99998 12.0003 1.99998C6.47727 1.99998 2 6.47724 2 12.0002C2 17.5232 6.47727 22.0005 12.0003 22.0005C17.5232 22.0005 22.0005 17.5232 22.0005 12.0002Z" stroke="#989899" stroke-width="1.7142" stroke-miterlimit="10"/>
<path d="M14.2863 17.3524H13.7063V11.5824C13.7063 11.2624 13.4463 11.0024 13.1263 11.0024H9.6663C9.3463 11.0024 9.0863 11.2624 9.0863 11.5824C9.0863 11.9024 9.3463 12.1624 9.6663 12.1624H10.2463V17.3524H9.6663C9.3463 17.3524 9.0863 17.6124 9.0863 17.9324C9.0863 18.2524 9.3463 18.5124 9.6663 18.5124H14.2863C14.6063 18.5124 14.8663 18.2524 14.8663 17.9324C14.8563 17.6124 14.5963 17.3524 14.2863 17.3524Z" fill="#D1D1D2"/>
<path d="M11.9764 9.58244C10.8564 9.58244 9.9364 8.67244 9.9364 7.54244C9.9364 6.42244 10.8464 5.50244 11.9764 5.50244C13.0964 5.50244 14.0164 6.41244 14.0164 7.54244C14.0064 8.67244 13.0964 9.58244 11.9764 9.58244Z" fill="#D1D1D2"/>
<path d="M14.2863 17.3524H13.7063V11.5824C13.7063 11.2624 13.4463 11.0024 13.1263 11.0024H11.9763V18.5024H14.2863C14.6063 18.5024 14.8663 18.2424 14.8663 17.9224C14.8563 17.6124 14.5963 17.3524 14.2863 17.3524Z" fill="#989899"/>
<path d="M14.0063 7.54244C14.0063 6.42244 13.0963 5.50244 11.9663 5.50244V9.57244C13.0963 9.58244 14.0063 8.67244 14.0063 7.54244Z" fill="#989899"/>
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
    this.props.forEach(key => this[key as keyof typeof InformasiDefault] = this.getAttribute(key));
  }
}
export default InformasiDefault