class Bookmark extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M4 5.98797C4 3.78547 5.79086 2 8 2H16C18.2091 2 20 3.78547 20 5.98797V20.0025C20 21.6244 18.1613 22.5678 16.8375 21.6251L12 18.1801L7.16248 21.6251C5.83874 22.5678 4 21.6244 4 20.0025V5.98797ZM8 3.99398C6.89543 3.99398 6 4.88672 6 5.98797V20.0025L10.8375 16.5575C11.5329 16.0623 12.4671 16.0623 13.1625 16.5575L18 20.0025V5.98797C18 4.88672 17.1046 3.99398 16 3.99398H8Z" />
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
    this.props.forEach(key => this[key as keyof typeof Bookmark] = this.getAttribute(key));
  }
}
export default Bookmark