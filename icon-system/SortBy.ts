class SortBy extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M8 4C7.44772 4 7 4.43642 7 4.97477L7 16.2682L4.70711 14.0332C4.31658 13.6525 3.68342 13.6525 3.29289 14.0332C2.90237 14.4138 2.90237 15.031 3.29289 15.4117L7.30199 19.3196C7.69034 19.6982 8.30966 19.6982 8.69802 19.3196L12.7071 15.4117C13.0976 15.031 13.0976 14.4138 12.7071 14.0332C12.3166 13.6525 11.6834 13.6525 11.2929 14.0332L9 16.2682L9 4.97477C9 4.43642 8.55228 4 8 4Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M16 20.4141C16.5523 20.4141 17 19.9776 17 19.4393L17 8.14588L19.2929 10.3809C19.6834 10.7616 20.3166 10.7616 20.7071 10.3809C21.0976 10.0002 21.0976 9.38306 20.7071 9.00239L16.698 5.09446C16.3097 4.71591 15.6903 4.71591 15.302 5.09446L11.2929 9.00239C10.9024 9.38305 10.9024 10.0002 11.2929 10.3809C11.6834 10.7616 12.3166 10.7616 12.7071 10.3809L15 8.14588L15 19.4393C15 19.9776 15.4477 20.4141 16 20.4141Z" />
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
    this.props.forEach(key => this[key as keyof typeof SortBy] = this.getAttribute(key));
  }
}
export default SortBy