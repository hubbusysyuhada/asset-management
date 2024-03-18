class AssesmentActive extends HTMLElement {
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M81.7181 113.017H21.1337C17.1854 113.017 13.9671 109.835 14.0003 105.89V22.1598C14.0003 18.2153 17.2186 15 21.1669 15H81.7181C85.6664 15 88.8848 18.2153 88.8848 22.1598V105.857C88.8848 109.802 85.6664 113.017 81.7181 113.017ZM72.8434 48.6807H24.9405C23.9099 48.6807 23.0456 47.4609 23.0456 46.0066C23.0456 44.5523 23.8767 43.3325 24.9405 43.3325H72.8434C73.874 43.3325 74.7383 44.5523 74.7383 46.0066C74.7383 47.4609 73.9072 48.6807 72.8434 48.6807ZM24.9405 66.4136H72.8434C73.9072 66.4136 74.7383 65.1938 74.7383 63.7395C74.7383 62.2852 73.874 61.0654 72.8434 61.0654H24.9405C23.8767 61.0654 23.0456 62.2852 23.0456 63.7395C23.0456 65.1938 23.9099 66.4136 24.9405 66.4136ZM72.8434 86.4976H24.9405C23.9099 86.4976 23.0456 85.2778 23.0456 83.8235C23.0456 82.3692 23.8767 81.1494 24.9405 81.1494H72.8434C73.874 81.1494 74.7383 82.3692 74.7383 83.8235C74.7383 85.2778 73.9072 86.4976 72.8434 86.4976Z" fill="#7D5BCA"/>
<path d="M112.182 33.0732L78.2963 78.1498L64.561 85.4435C63.8748 85.7924 63.0954 85.2141 63.2597 84.4624L66.4431 69.234L100.329 24.1575C101.284 22.8607 103.108 22.6267 104.406 23.5821L111.602 28.973C112.903 29.9541 113.138 31.7764 112.182 33.0732Z" fill="#3D00C3"/>
<path d="M77.8016 78.4213L64.1401 85.6795C63.6271 85.9541 63.0216 85.5099 63.1544 84.9189L66.3253 69.7964C66.3726 69.5555 66.671 69.439 66.8739 69.5956L77.883 77.8369C78.057 77.9711 78.0453 78.2857 77.8016 78.4213Z" fill="#FFC401"/>
<path d="M112.189 33.0745L105.635 41.795L93.7558 32.8826L100.335 24.1587C101.295 22.8876 103.115 22.6279 104.413 23.5833L111.609 28.9742C112.884 29.9586 113.144 31.7777 112.189 33.0745Z" fill="#FFC401"/>
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
    this.props.forEach(key => this[key as keyof typeof AssesmentActive] = this.getAttribute(key));
  }
}
export default AssesmentActive