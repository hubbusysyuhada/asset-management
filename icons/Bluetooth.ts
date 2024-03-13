class Bluetooth extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M13.476 2.83591C12.817 2.46264 12.0002 2.9387 12.0002 3.69609V9.77383L5.50826 6.35438C5.03257 6.07377 4.41948 6.23192 4.13887 6.70761C3.85826 7.18329 4.01641 7.79639 4.4921 8.077L11.069 11.5466L4.50594 14.8464C4.02582 15.1193 3.85789 15.7298 4.13084 16.2099C4.4038 16.69 5.01429 16.858 5.4944 16.585L12.0002 13.3179L12.0002 19.7157C12.0002 20.4895 12.8413 20.9701 13.5079 20.5772L20.1617 16.6559C20.9492 16.1919 20.9494 15.053 20.1622 14.5886L15.0596 11.5785L20.1341 8.69358C20.9441 8.23309 20.9431 7.06544 20.1324 6.60624L13.5085 2.85433C13.4978 2.84799 13.4869 2.84185 13.476 2.83591ZM14.0002 5.43138L14.0002 9.8802L17.9201 7.65167L14.0002 5.43138ZM14.0002 13.2757V17.9656L17.9774 15.6218L14.0002 13.2757Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Bluetooth] = this.getAttribute(key));
  }
}
export default Bluetooth