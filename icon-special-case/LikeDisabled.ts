class LikeDisabled extends HTMLElement {
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.85 20H7.85H6.88H6C4.34 20 3 18.66 3 17V10C3 8.9 3.9 8 5 8H7.85L9.02 5.58C9.48 4.61 10.45 4 11.52 4C13.14 4 14.42 5.39 14.29 7C14.29 7.02 14.29 7.03 14.29 7.05L14.1 9H16.11H18.05C20.12 9 21.56 11.04 20.88 12.99L19.13 17.99C18.71 19.19 17.57 20 16.3 20H8.88H8.85ZM5 10H6.85V18H6C5.45 18 5 17.55 5 17V10Z" fill="#B7B6B7"/>
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
    this.props.forEach(key => this[key as keyof typeof LikeDisabled] = this.getAttribute(key));
  }
}
export default LikeDisabled