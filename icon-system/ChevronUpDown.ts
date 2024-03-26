class ChevronUpDown extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2968 2 12.5783 2.13182 12.7682 2.35982L17.7682 8.35982C18.1218 8.78409 18.0645 9.41466 17.6402 9.76822C17.2159 10.1218 16.5854 10.0645 16.2318 9.64018L12 4.56205L7.76825 9.64018C7.41468 10.0645 6.78412 10.1218 6.35984 9.76822C5.93556 9.41466 5.87824 8.78409 6.2318 8.35982L11.2318 2.35982C11.4218 2.13182 11.7032 2 12 2Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M12 22C12.2968 22 12.5783 21.8682 12.7682 21.6402L17.7682 15.6402C18.1218 15.2159 18.0645 14.5853 17.6402 14.2318C17.2159 13.8782 16.5854 13.9355 16.2318 14.3598L12 19.438L7.76825 14.3598C7.41468 13.9355 6.78412 13.8782 6.35984 14.2318C5.93556 14.5853 5.87824 15.2159 6.2318 15.6402L11.2318 21.6402C11.4218 21.8682 11.7032 22 12 22Z" />
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
    this.props.forEach(key => this[key as keyof typeof ChevronUpDown] = this.getAttribute(key));
  }
}
export default ChevronUpDown