class Volume extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M16 7.20253C16 6.77861 15.5056 6.54703 15.1799 6.81842L12.0574 9.42052C11.6081 9.79493 11.0418 9.99997 10.4569 9.99997H8.5C8.22386 9.99997 8 10.2238 8 10.5V13.5C8 13.7761 8.22386 14 8.5 14H10.4569C11.0418 14 11.6081 14.205 12.0574 14.5794L15.1799 17.1815C15.5056 17.4529 16 17.2213 16 16.7974V7.20253ZM13.8995 5.28198C15.5279 3.92505 18 5.08294 18 7.20253V16.7974C18 18.917 15.5279 20.0749 13.8995 18.718L10.777 16.1159C10.6872 16.041 10.5739 16 10.4569 16H8.5C7.11929 16 6 14.8807 6 13.5V10.5C6 9.11926 7.11929 7.99997 8.5 7.99997H10.4569C10.5739 7.99997 10.6872 7.95896 10.777 7.88408L13.8995 5.28198Z" />
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
    this.props.forEach(key => this[key as keyof typeof Volume] = this.getAttribute(key));
  }
}
export default Volume