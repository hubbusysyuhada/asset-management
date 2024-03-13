class Copy extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7.59961 9.7495C7.59961 8.35513 8.75006 7.2284 10.1596 7.2284H15.8196C15.8429 7.2284 15.8663 7.22949 15.8896 7.23167V9.96616C15.8896 10.9313 16.6896 11.7191 17.6696 11.7191H19.9996V17.5098C19.9996 18.8979 18.8555 20.0309 17.4396 20.0309H10.1596C8.75006 20.0309 7.59961 18.9041 7.59961 17.5098V9.7495ZM10.1596 5.25879C7.64915 5.25879 5.59961 7.26374 5.59961 9.7495V17.5098C5.59961 19.9955 7.64915 22.0005 10.1596 22.0005H17.4396C19.9637 22.0005 21.9996 19.9821 21.9996 17.5098V11.3449C21.9996 10.6143 21.6999 9.92821 21.1972 9.41814L21.192 9.41286L17.7814 6.05413L17.7761 6.04902C17.2581 5.55395 16.5615 5.25879 15.8196 5.25879H10.1596Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M6.56 3.96961C5.14228 3.96961 4 5.09454 4 6.49071V13.6601C4 15.0563 5.14228 16.1812 6.56 16.1812V18.1508C4.03772 18.1508 2 16.144 2 13.6601V6.49071C2 4.00675 4.03772 2 6.56 2H14.45C16.9641 2 19 4.00856 19 6.49071V8.83455H17V6.49071C17 5.09273 15.8559 3.96961 14.45 3.96961H6.56Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Copy] = this.getAttribute(key));
  }
}
export default Copy