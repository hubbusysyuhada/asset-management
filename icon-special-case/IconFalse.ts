class IconFalse extends HTMLElement {
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
<circle cx="12" cy="12" r="10" fill="#DC3545"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70676 7.39921C7.17652 6.89333 7.96743 6.86403 8.47332 7.33379L17.2233 15.4588C17.7292 15.9285 17.7585 16.7195 17.2887 17.2253C16.819 17.7312 16.0281 17.7605 15.5222 17.2908L6.77219 9.16577C6.2663 8.69602 6.23701 7.9051 6.70676 7.39921Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70887 17.2252C7.17863 17.7311 7.96954 17.7604 8.47543 17.2907L17.2254 9.16566C17.7313 8.69591 17.7606 7.905 17.2909 7.39911C16.8211 6.89322 16.0302 6.86393 15.5243 7.33368L6.7743 15.4587C6.26841 15.9284 6.23912 16.7193 6.70887 17.2252Z" fill="white"/>
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
    this.props.forEach(key => this[key as keyof typeof IconFalse] = this.getAttribute(key));
  }
}
export default IconFalse