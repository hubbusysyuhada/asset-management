class ShoppingBag extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M3.86102 8.76991C3.98125 7.20692 5.28458 6 6.85219 6H17.1481C18.7157 6 20.019 7.20692 20.1392 8.76991L20.6659 15.6165C20.8893 18.5205 18.5932 21 15.6806 21H8.31963C5.40708 21 3.11098 18.5205 3.33436 15.6165L3.86102 8.76991ZM6.85219 8C6.32965 8 5.89521 8.40231 5.85513 8.92331L5.32847 15.7699C5.19444 17.5123 6.5721 19 8.31963 19H15.6806C17.4281 19 18.8058 17.5123 18.6718 15.7699L18.1451 8.9233C18.105 8.40231 17.6706 8 17.1481 8H6.85219Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V11C16 11.5523 15.5523 12 15 12C14.4477 12 14 11.5523 14 11V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V11C10 11.5523 9.55228 12 9 12C8.44772 12 8 11.5523 8 11V6Z" />
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
    this.props.forEach(key => this[key as keyof typeof ShoppingBag] = this.getAttribute(key));
  }
}
export default ShoppingBag