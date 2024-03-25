class InformasiDisabled extends HTMLElement {
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
<path d="M22.0005 12.0002C22.0005 6.47724 17.5232 1.99998 12.0003 1.99998C6.47727 1.99998 2 6.47724 2 12.0002C2 17.5232 6.47727 22.0005 12.0003 22.0005C17.5232 22.0005 22.0005 17.5232 22.0005 12.0002Z" stroke="#B7B6B7" stroke-width="1.7142" stroke-miterlimit="10"/>
<path d="M14.2864 17.3524H13.7064V11.5824C13.7064 11.2624 13.4464 11.0024 13.1264 11.0024H9.66637C9.34637 11.0024 9.08636 11.2624 9.08636 11.5824C9.08636 11.9024 9.34637 12.1624 9.66637 12.1624H10.2464V17.3524H9.66637C9.34637 17.3524 9.08636 17.6124 9.08636 17.9324C9.08636 18.2524 9.34637 18.5124 9.66637 18.5124H14.2864C14.6064 18.5124 14.8664 18.2524 14.8664 17.9324C14.8564 17.6124 14.5964 17.3524 14.2864 17.3524Z" fill="#F2F2F2"/>
<path d="M11.9763 9.58244C10.8563 9.58244 9.93634 8.67244 9.93634 7.54244C9.93634 6.42244 10.8463 5.50244 11.9763 5.50244C13.0963 5.50244 14.0163 6.41244 14.0163 7.54244C14.0063 8.67244 13.0963 9.58244 11.9763 9.58244Z" fill="#F2F2F2"/>
<path d="M14.2863 17.3524H13.7063V11.5824C13.7063 11.2624 13.4463 11.0024 13.1263 11.0024H11.9763V18.5024H14.2863C14.6063 18.5024 14.8663 18.2424 14.8663 17.9224C14.8563 17.6124 14.5963 17.3524 14.2863 17.3524Z" fill="#B7B6B7"/>
<path d="M14.0064 7.54244C14.0064 6.42244 13.0964 5.50244 11.9664 5.50244V9.57244C13.0964 9.58244 14.0064 8.67244 14.0064 7.54244Z" fill="#B7B6B7"/>
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
    this.props.forEach(key => this[key as keyof typeof InformasiDisabled] = this.getAttribute(key));
  }
}
export default InformasiDisabled