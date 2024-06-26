class Video1 extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 6.79086 3.79086 5 6 5H13C15.2091 5 17 6.79086 17 9V9.07171L20.202 7.23108C21.0019 6.77121 22 7.34868 22 8.27144V15.7488C22 16.6203 21.1003 17.2012 20.306 16.8424L16.9855 15.3425C16.8118 17.3913 15.0938 19 13 19H6C3.79086 19 2 17.2091 2 15V9ZM17 13.1544L20 14.5096V9.65407L17 11.3786V13.1544ZM15 9C15 7.89543 14.1046 7 13 7H6C4.89543 7 4 7.89543 4 9V15C4 16.1046 4.89543 17 6 17H13C14.1046 17 15 16.1046 15 15V9Z" />
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
    this.props.forEach(key => this[key as keyof typeof Video1] = this.getAttribute(key));
  }
}
export default Video1