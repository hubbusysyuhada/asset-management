class ChevronRight extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M8.24076 18.6508C7.88134 18.2314 7.9299 17.6001 8.34923 17.2407L14.4634 12L8.34923 6.75924C7.9299 6.39982 7.88134 5.76852 8.24076 5.34919C8.60018 4.92986 9.23148 4.8813 9.65081 5.24073L16.3851 11.0129C16.9904 11.5318 16.9904 12.4682 16.3851 12.987L9.65081 18.7592C9.23148 19.1187 8.60018 19.0701 8.24076 18.6508Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof ChevronRight] = this.getAttribute(key));
  }
}
export default ChevronRight