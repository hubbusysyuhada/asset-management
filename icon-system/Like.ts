class Like extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M18.8242 6.27754C17.3209 4.57415 14.9416 4.57415 13.4383 6.27754C12.6747 7.14285 11.3253 7.14285 10.5617 6.27754C9.05841 4.57415 6.67907 4.57415 5.17579 6.27754C3.60807 8.05395 3.60807 10.9797 5.17579 12.7561L10.869 19.2072C11.4695 19.8876 12.5305 19.8876 13.131 19.2072L18.8242 12.7561C20.3919 10.9797 20.3919 8.05395 18.8242 6.27754ZM12 4.88577C14.3049 2.34882 18.0446 2.37161 20.3238 4.95415C22.5588 7.48665 22.5588 11.547 20.3238 14.0795L14.6305 20.5306C13.2339 22.1132 10.7661 22.1132 9.36948 20.5306L3.67625 14.0795C1.44125 11.547 1.44125 7.48665 3.67625 4.95415C5.9554 2.37161 9.69507 2.34882 12 4.88577Z" />
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
    this.props.forEach(key => this[key as keyof typeof Like] = this.getAttribute(key));
  }
}
export default Like