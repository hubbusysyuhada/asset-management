class ChevronDown extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M5.34923 8.23881C5.76855 7.87939 6.39985 7.92795 6.75927 8.34727L12 14.4615L17.2408 8.34727C17.6002 7.92795 18.2315 7.87939 18.6508 8.23881C19.0701 8.59823 19.1187 9.22953 18.7593 9.64886L12.9871 16.3831C12.4682 16.9884 11.5318 16.9884 11.013 16.3831L5.24076 9.64886C4.88134 9.22953 4.9299 8.59823 5.34923 8.23881Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof ChevronDown] = this.getAttribute(key));
  }
}
export default ChevronDown