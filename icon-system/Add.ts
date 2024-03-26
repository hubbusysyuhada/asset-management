class Add extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M10.9991 17.999C10.9991 18.5513 11.4468 18.999 11.9991 18.999C12.5514 18.999 12.9991 18.5513 12.9991 17.999V12.998H17.999C18.5513 12.998 18.999 12.5502 18.999 11.998C18.999 11.4457 18.5513 10.998 17.999 10.998H12.9991V6C12.9991 5.44771 12.5514 5 11.9991 5C11.4468 5 10.9991 5.44771 10.9991 6V10.998H6C5.44772 10.998 5 11.4457 5 11.998C5 12.5502 5.44772 12.998 6 12.998H10.9991V17.999Z" />
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
    this.props.forEach(key => this[key as keyof typeof Add] = this.getAttribute(key));
  }
}
export default Add