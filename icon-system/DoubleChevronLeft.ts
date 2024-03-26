class DoubleChevronLeft extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M19.1792 5.76915C19.5386 6.18847 19.49 6.81977 19.0707 7.1792L12.9565 12.4199L19.0707 17.6607C19.49 18.0201 19.5386 18.6514 19.1792 19.0707C18.8197 19.4901 18.1884 19.5386 17.7691 19.1792L11.0349 13.407C10.4296 12.8881 10.4296 11.9517 11.0349 11.4329L17.7691 5.66068C18.1884 5.30126 18.8197 5.34982 19.1792 5.76915Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M13.1792 5.76915C13.5386 6.18847 13.49 6.81977 13.0707 7.1792L6.95649 12.4199L13.0707 17.6607C13.49 18.0201 13.5386 18.6514 13.1792 19.0707C12.8197 19.4901 12.1884 19.5386 11.7691 19.1792L5.03485 13.407C4.42956 12.8881 4.42956 11.9517 5.03485 11.4329L11.7691 5.66068C12.1884 5.30126 12.8197 5.34982 13.1792 5.76915Z" />
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
    this.props.forEach(key => this[key as keyof typeof DoubleChevronLeft] = this.getAttribute(key));
  }
}
export default DoubleChevronLeft