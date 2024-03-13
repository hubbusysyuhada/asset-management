class Resume extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M8.6 4C7.16329 4 6 5.16328 6 6.6V17.4C6 18.8367 7.16329 20 8.6 20H15.98C17.4167 20 18.58 18.8367 18.58 17.4V8.247C18.58 8.04089 18.5004 7.84362 18.3419 7.68511L14.8855 4.22868C14.7453 4.08473 14.5468 4 14.333 4H8.6ZM4 6.6C4 4.05872 6.05872 2 8.6 2H14.333C15.0707 2 15.7879 2.29141 16.3133 2.82806L19.7561 6.27089C20.2816 6.79638 20.58 7.49911 20.58 8.247V17.4C20.58 19.9413 18.5213 22 15.98 22H8.6C6.05872 22 4 19.9413 4 17.4V6.6Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M14.4043 3V6.825C14.4043 7.815 15.2143 8.625 16.2043 8.625H19.8043L14.4043 3Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Resume] = this.getAttribute(key));
  }
}
export default Resume