class Archive2 extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7 3C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V6C20 4.34315 18.6569 3 17 3H7ZM18 6C18 5.44772 17.5523 5 17 5H7C6.44772 5 6 5.44772 6 6V14H8.93637C9.44956 14 9.94687 14.1772 10.3435 14.492C11.3082 15.2576 12.6845 15.2634 13.6352 14.5089C14.0504 14.1794 14.5649 14 15.0951 14H18V6ZM6 16V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V16H15.0951C15.0164 16 14.9401 16.0266 14.8785 16.0755C13.1857 17.419 10.7789 17.3909 9.10017 16.0585C9.05181 16.0202 8.99126 16 8.93637 16H6ZM8 11C8 10.4477 8.44772 10 9 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H9C8.44772 12 8 11.5523 8 11ZM9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7H9Z" />
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
    this.props.forEach(key => this[key as keyof typeof Archive2] = this.getAttribute(key));
  }
}
export default Archive2