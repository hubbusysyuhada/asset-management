class Filter extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V8.36992L15 15.3699V17.3501C15 18.1405 14.5345 18.8567 13.8123 19.1777L11.3123 20.2889C9.9897 20.8767 8.5 19.9086 8.5 18.4612V15.3459L3 8.34586V5ZM19 5H5V7H19V5ZM17.8258 9H6.05746L10.0726 14.1102C10.3495 14.4626 10.5 14.8977 10.5 15.3459V18.4612L13 17.3501V15.3699C13 14.8925 13.1708 14.4308 13.4815 14.0683L17.8258 9Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Filter] = this.getAttribute(key));
  }
}
export default Filter