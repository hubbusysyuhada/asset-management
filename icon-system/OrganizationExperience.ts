class OrganizationExperience extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M21 14H19V12C19 11.4 18.6 11 18 11H13V10H15C15.6 10 16 9.6 16 9V3C16 2.4 15.6 2 15 2H9C8.4 2 8 2.4 8 3V9C8 9.6 8.4 10 9 10H11V11H6C5.4 11 5 11.4 5 12V14H3C2.4 14 2 14.4 2 15V21C2 21.6 2.4 22 3 22H9C9.6 22 10 21.6 10 21V15C10 14.4 9.6 14 9 14H7V13H17V14H15C14.4 14 14 14.4 14 15V21C14 21.6 14.4 22 15 22H21C21.6 22 22 21.6 22 21V15C22 14.4 21.6 14 21 14ZM10 4H14V8H10V4ZM8 20H4V16H6H8V20ZM20 20H16V16H18H20V20Z" />
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
    this.props.forEach(key => this[key as keyof typeof OrganizationExperience] = this.getAttribute(key));
  }
}
export default OrganizationExperience