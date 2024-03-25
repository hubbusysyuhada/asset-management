class CategoryDefault extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="19" y="19" width="42.2746" height="42.2746" rx="5" fill="#989899"/>
<rect x="19" y="66.7256" width="42.2746" height="42.2746" rx="5" fill="#D1D1D2"/>
<rect x="66.7246" y="19" width="42.2746" height="42.2746" rx="5" fill="#D1D1D2"/>
<rect x="66.7246" y="66.7256" width="42.2746" height="42.2746" rx="21.1373" fill="#E8E8E8"/>
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
    this.props.forEach(key => this[key as keyof typeof CategoryDefault] = this.getAttribute(key));
  }
}
export default CategoryDefault