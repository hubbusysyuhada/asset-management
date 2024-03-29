class SetupRejectionLetterActive extends HTMLElement {
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
<path d="M54.581 51.0492L14 36.4365V73.5844C14 75.9612 15.9366 77.8098 18.2254 77.8098H90.8486C93.2254 77.8098 95.0739 75.8731 95.0739 73.5844V36.4365L54.581 51.0492Z" fill="#7D5BCA"/>
<path d="M90.8486 22H18.2254C15.9366 22 14 23.9366 14 26.2254V36.4366L54.581 51.0493L95.162 36.3486V26.2254C95.0739 23.9366 93.1373 22 90.8486 22Z" fill="#3D00C3"/>
<path d="M86.7113 105.098C101.782 105.098 114 92.8809 114 77.8097C114 62.7386 101.782 50.521 86.7113 50.521C71.6402 50.521 59.4226 62.7386 59.4226 77.8097C59.4226 92.8809 71.6402 105.098 86.7113 105.098Z" fill="#FFC401"/>
<path d="M98.6233 89.9987H74.7816C73.8956 89.9987 73.1707 89.2737 73.1707 88.3877V87.5017C73.1707 79.9304 79.3727 73.6478 86.9441 73.7283C94.2738 73.8894 100.234 79.8498 100.234 87.2601V88.3877C100.234 89.2737 99.5093 89.9987 98.6233 89.9987Z" fill="#3D00C3"/>
<path d="M93.3956 67.2865C92.7513 63.7425 90.0127 61.0845 86.7103 61.0845C83.4079 61.0845 80.6693 63.7425 80.025 67.2865C79.0584 67.4476 78.2529 68.4142 78.2529 69.6224C78.2529 70.9111 79.2195 72.0388 80.3471 72.0388C80.4277 72.0388 80.4277 72.0388 80.5082 72.0388C81.5553 74.7773 83.9717 76.7104 86.7103 76.7104C89.5294 76.7104 91.8653 74.7773 92.9124 72.0388C92.9929 72.0388 92.9929 72.0388 93.0734 72.0388C94.2011 72.0388 95.1676 70.9917 95.1676 69.6224C95.0871 68.4947 94.3622 67.4476 93.3956 67.2865Z" fill="#7D5BCA"/>
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
    this.props.forEach(key => this[key as keyof typeof SetupRejectionLetterActive] = this.getAttribute(key));
  }
}
export default SetupRejectionLetterActive