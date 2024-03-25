class Document2 extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M19.7455 6.28182L16.2636 2.8C15.7545 2.28182 15.0636 2 14.3364 2H8.54545C6.03636 2 4 4.03636 4 6.54545V17.4545C4 19.9636 6.03636 22 8.54545 22H16C18.5091 22 20.5455 19.9636 20.5455 17.4545V8.20909C20.5455 7.48182 20.2636 6.79091 19.7455 6.28182ZM16 20.1818H8.54545C7.04545 20.1818 5.81818 18.9545 5.81818 17.4545V6.54545C5.81818 5.04545 7.04545 3.81818 8.54545 3.81818H14.3364C14.3636 3.81818 14.3818 3.82727 14.4091 3.83636V6.77273C14.4091 7.77273 15.2273 8.59091 16.2273 8.59091H18.7273V17.4545C18.7273 18.9545 17.5 20.1818 16 20.1818Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M16.0178 17.4544H8.74503C8.24503 17.4544 7.83594 17.0453 7.83594 16.5453C7.83594 16.0453 8.24503 15.6362 8.74503 15.6362H16.0178C16.5178 15.6362 16.9268 16.0453 16.9268 16.5453C16.9268 17.0453 16.5268 17.4544 16.0178 17.4544Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M16.0178 13.8182H8.74503C8.24503 13.8182 7.83594 13.4091 7.83594 12.9091C7.83594 12.4091 8.24503 12 8.74503 12H16.0178C16.5178 12 16.9268 12.4091 16.9268 12.9091C16.9268 13.4091 16.5268 13.8182 16.0178 13.8182Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M12.3814 10.182H8.74503C8.24503 10.182 7.83594 9.77286 7.83594 9.27286C7.83594 8.77286 8.24503 8.36377 8.74503 8.36377H12.3814C12.8814 8.36377 13.2905 8.77286 13.2905 9.27286C13.2905 9.77286 12.8905 10.182 12.3814 10.182Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Document2] = this.getAttribute(key));
  }
}
export default Document2