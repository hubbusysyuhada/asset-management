class TurnRight extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 3.29289C14.6834 2.90237 15.3166 2.90237 15.7071 3.29289L19.7071 7.29289C20.0976 7.68342 20.0976 8.31658 19.7071 8.70711L15.7071 12.7071C15.3166 13.0976 14.6834 13.0976 14.2929 12.7071C13.9024 12.3166 13.9024 11.6834 14.2929 11.2929L17.5858 8L14.2929 4.70711C13.9024 4.31658 13.9024 3.68342 14.2929 3.29289Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 8.79086 5.79086 7 8 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H8C6.89543 9 6 9.89543 6 11V20C6 20.5523 5.55228 21 5 21C4.44772 21 4 20.5523 4 20V11Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof TurnRight] = this.getAttribute(key));
  }
}
export default TurnRight