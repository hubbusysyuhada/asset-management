class Accelerate extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M99.724 65.9073C98.395 65.9073 97.0576 65.4894 95.9209 64.6118L64 40.1634L32.0791 64.6118C29.3292 66.7181 25.3924 66.1999 23.2944 63.45C21.1881 60.7 21.7063 56.7632 24.4562 54.6653L60.1886 27.2914C62.437 25.5695 65.563 25.5695 67.8114 27.2914L103.544 54.6653C106.294 56.7716 106.812 60.7084 104.706 63.45C103.469 65.0548 101.605 65.9073 99.724 65.9073Z" fill="#3D00C3"/>
<path d="M99.724 101.449C98.395 101.449 97.0576 101.031 95.9209 100.153L64 75.7132L32.0791 100.162C29.3292 102.268 25.3924 101.741 23.2944 98.9998C21.1881 96.2498 21.7063 92.313 24.4562 90.2151L60.1886 62.8412C62.437 61.1193 65.563 61.1193 67.8114 62.8412L103.544 90.2151C106.294 92.3214 106.812 96.2582 104.706 98.9998C103.469 100.605 101.605 101.449 99.724 101.449Z" fill="#7D5BCA"/>
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
    this.props.forEach(key => this[key as keyof typeof Accelerate] = this.getAttribute(key));
  }
}
export default Accelerate