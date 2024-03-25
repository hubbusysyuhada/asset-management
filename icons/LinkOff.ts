class LinkOff extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M4.71 3.2925C4.32 2.9025 3.69 2.9025 3.3 3.2925C2.91 3.6825 2.91 4.3125 3.3 4.7025L6.59 8.0025H6.21C3.89 8.0025 2 9.7925 2 12.0025C2 14.2125 3.89 16.0025 6.21 16.0025H9.42C9.97 16.0025 10.42 15.5525 10.42 15.0025C10.42 14.4525 9.97 14.0025 9.42 14.0025H6.21C5.05 14.0025 4.1 13.1025 4.1 12.0025C4.1 10.9025 5.04 10.0025 6.21 10.0025H8.59L9.59 11.0025H9C8.45 11.0025 8 11.4525 8 12.0025C8 12.5525 8.45 13.0025 9 13.0025H11.59L13.58 14.9925C13.58 14.9925 13.58 14.9925 13.58 15.0025C13.58 15.5525 14.03 16.0025 14.58 16.0025H14.59L19.3 20.7125C19.49 20.9025 19.74 21.0025 20 21.0025C20.26 21.0025 20.51 20.9025 20.71 20.7125C21.1 20.3225 21.1 19.6925 20.71 19.3025L4.71 3.2925Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M14.5801 10.0024H17.7901C18.9501 10.0024 19.9001 10.9024 19.9001 12.0024C19.9001 13.1024 18.9601 14.0024 17.7901 14.0024H17.4101L19.1701 15.7624C20.8201 15.2124 22.0001 13.7524 22.0001 12.0024C22.0001 9.79244 20.1101 8.00244 17.7901 8.00244H14.5801C14.0301 8.00244 13.5801 8.45244 13.5801 9.00244C13.5801 9.55244 14.0301 10.0024 14.5801 10.0024Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M14.4102 11.0024L15.8702 12.4624C15.9502 12.3224 16.0002 12.1724 16.0002 12.0024C16.0002 11.4524 15.5502 11.0024 15.0002 11.0024H14.4102Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof LinkOff] = this.getAttribute(key));
  }
}
export default LinkOff