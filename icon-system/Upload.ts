class Upload extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M13.0344 14.0057C13.0361 14.558 12.5898 15.0071 12.0375 15.0089C11.4853 15.0106 11.0361 14.5643 11.0344 14.012L13.0344 14.0057Z" />
<path style="${this.colorStyle}"  d="M9.71867 6.72319L11.0075 5.42627L11.0344 14.012L13.0344 14.0057L13.0075 5.42L14.3044 6.70881C14.6961 7.09811 15.3293 7.09614 15.7186 6.70439C16.1079 6.31265 16.1059 5.67948 15.7142 5.29019L11.9955 1.59473L8.30003 5.31342L9.71867 6.72319Z" />
<path style="${this.colorStyle}"  d="M8.30003 5.31342C7.91073 5.70517 7.9127 6.33835 8.30445 6.72765C8.69619 7.11695 9.32938 7.11494 9.71867 6.72319L8.30003 5.31342Z" />
<path style="${this.colorStyle}"  d="M4 11.9995C4 10.895 4.89543 9.99955 6 9.99955C6.55228 9.99955 7 9.55184 7 8.99955C7 8.44727 6.55228 7.99955 6 7.99955C3.79086 7.99955 2 9.79041 2 11.9995V17.9995C2 20.2087 3.79086 21.9995 6 21.9995H17C19.7614 21.9995 22 19.761 22 16.9995V11.9995C22 9.79041 20.2091 7.99955 18 7.99955C17.4477 7.99955 17 8.44727 17 8.99955C17 9.55184 17.4477 9.99955 18 9.99955C19.1046 9.99955 20 10.895 20 11.9995V16.9995C20 18.6564 18.6569 19.9995 17 19.9995H6C4.89543 19.9995 4 19.1041 4 17.9995V11.9995Z" />
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
    this.props.forEach(key => this[key as keyof typeof Upload] = this.getAttribute(key));
  }
}
export default Upload