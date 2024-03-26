class DoubleChevronRight extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M5.24076 18.6508C4.88134 18.2314 4.9299 17.6001 5.34923 17.2407L11.4634 12L5.34923 6.75924C4.9299 6.39982 4.88134 5.76852 5.24076 5.34919C5.60018 4.92986 6.23148 4.8813 6.65081 5.24073L13.3851 11.0129C13.9904 11.5318 13.9904 12.4682 13.3851 12.987L6.65081 18.7592C6.23148 19.1187 5.60018 19.0701 5.24076 18.6508Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M11.2408 18.6508C10.8813 18.2314 10.9299 17.6001 11.3492 17.2407L17.4634 12L11.3492 6.75924C10.9299 6.39982 10.8813 5.76852 11.2408 5.34919C11.6002 4.92986 12.2315 4.8813 12.6508 5.24073L19.3851 11.0129C19.9904 11.5318 19.9904 12.4682 19.3851 12.987L12.6508 18.7592C12.2315 19.1187 11.6002 19.0701 11.2408 18.6508Z" />
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
    this.props.forEach(key => this[key as keyof typeof DoubleChevronRight] = this.getAttribute(key));
  }
}
export default DoubleChevronRight