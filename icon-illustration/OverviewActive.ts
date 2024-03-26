class OverviewActive extends HTMLElement {
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
<path d="M76.9232 108.431L61.0877 64.0879L45.2522 108.431C50.202 110.199 55.5332 111.166 61.0877 111.166C66.6422 111.166 71.9734 110.199 76.9232 108.431Z" fill="#7D5BCA"/>
<path d="M61.0878 17C35.083 17 14 38.083 14 64.0878C14 84.5381 27.035 101.927 45.2523 108.44L61.0878 64.0878L100.332 38.083C91.9029 25.3737 77.4723 17 61.0878 17Z" fill="#3D00C3"/>
<path d="M114.001 65.5859C114.001 55.9655 111.107 47.0336 106.167 39.5811L66.9222 65.5859L82.7577 109.929C100.966 103.425 114.001 86.0362 114.001 65.5859Z" fill="#FFC401"/>
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
    this.props.forEach(key => this[key as keyof typeof OverviewActive] = this.getAttribute(key));
  }
}
export default OverviewActive