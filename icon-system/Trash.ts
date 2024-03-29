class Trash extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M4.16819 10.7301C4.03416 8.98771 5.41183 7.5 7.15936 7.5H16.8398C18.5874 7.5 19.965 8.98771 19.831 10.7301L19.1387 19.7301C19.0185 21.2931 17.7152 22.5 16.1475 22.5H7.85167C6.28406 22.5 4.98073 21.2931 4.8605 19.7301L4.16819 10.7301ZM7.15936 9.5C6.57685 9.5 6.11763 9.9959 6.1623 10.5767L6.85461 19.5767C6.89469 20.0977 7.32913 20.5 7.85167 20.5H16.1475C16.6701 20.5 17.1045 20.0977 17.1446 19.5767L17.8369 10.5767C17.8816 9.9959 17.4224 9.5 16.8398 9.5H7.15936Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M3.5 5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H19.5C20.0523 4.5 20.5 4.94772 20.5 5.5C20.5 6.05228 20.0523 6.5 19.5 6.5H4.5C3.94772 6.5 3.5 6.05228 3.5 5.5Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M9 3.5C9 2.39543 9.89543 1.5 11 1.5H13C14.1046 1.5 15 2.39543 15 3.5V6.5H9V3.5ZM13 3.5H11V4.5H13V3.5Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M14 11.5C14.5523 11.5 15 11.9477 15 12.5V17.5C15 18.0523 14.5523 18.5 14 18.5C13.4477 18.5 13 18.0523 13 17.5V12.5C13 11.9477 13.4477 11.5 14 11.5Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M10 11.5C10.5523 11.5 11 11.9477 11 12.5V17.5C11 18.0523 10.5523 18.5 10 18.5C9.44772 18.5 9 18.0523 9 17.5V12.5C9 11.9477 9.44772 11.5 10 11.5Z" />
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
    this.props.forEach(key => this[key as keyof typeof Trash] = this.getAttribute(key));
  }
}
export default Trash