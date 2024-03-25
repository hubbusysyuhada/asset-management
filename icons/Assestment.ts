class Assestment extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M17.0001 9H13.7201C13.6301 9.15 13.5401 9.29 13.4101 9.41L11.8301 11H17.0001C17.5501 11 18.0001 10.55 18.0001 10C18.0001 9.45 17.5501 9 17.0001 9Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M8.99957 11.9998C8.73957 11.9998 8.48957 11.8998 8.28957 11.7098L6.28957 9.70982C5.89957 9.31982 5.89957 8.68982 6.28957 8.29982C6.67957 7.90982 7.30957 7.90982 7.69957 8.29982L8.99957 9.58982L11.2896 7.29982C11.6796 6.90982 12.3096 6.90982 12.6996 7.29982C13.0896 7.68982 13.0896 8.31982 12.6996 8.70982L9.69957 11.7098C9.50957 11.8998 9.24957 11.9998 8.99957 11.9998Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M17.0001 15H13.7201C13.6301 15.15 13.5401 15.29 13.4101 15.41L11.8301 17H17.0001C17.5501 17 18.0001 16.55 18.0001 16C18.0001 15.45 17.5501 15 17.0001 15Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M8.99957 17.9998C8.73957 17.9998 8.48957 17.8998 8.28957 17.7098L6.28957 15.7098C5.89957 15.3198 5.89957 14.6898 6.28957 14.2998C6.67957 13.9098 7.30957 13.9098 7.69957 14.2998L8.99957 15.5898L11.2896 13.2998C11.6796 12.9098 12.3096 12.9098 12.6996 13.2998C13.0896 13.6898 13.0896 14.3198 12.6996 14.7098L9.69957 17.7098C9.50957 17.8998 9.24957 17.9998 8.99957 17.9998Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M16.5 5.02H7.5V3.23C7.5 2.55 8.05 2 8.73 2H15.27C15.95 2 16.5 2.55 16.5 3.23V5.02Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M17.5 3.06006V5.07006C18.91 5.31006 20 6.52006 20 8.00006V17.0001C20 18.6501 18.65 20.0001 17 20.0001H7C5.35 20.0001 4 18.6501 4 17.0001V8.00006C4 6.52006 5.09 5.31006 6.5 5.07006V3.06006C3.98 3.32006 2 5.42006 2 8.00006V17.0001C2 19.7601 4.24 22.0001 7 22.0001H17C19.76 22.0001 22 19.7601 22 17.0001V8.00006C22 5.42006 20.02 3.32006 17.5 3.06006Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Assestment] = this.getAttribute(key));
  }
}
export default Assestment