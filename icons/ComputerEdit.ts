class ComputerEdit extends HTMLElement {
  id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
  props = ['height', 'width', 'color']
  contentStyle = '';
  colorStyle = '';
  height = ''
  width = ''
  color = ''
  constructor() {
    super()
    this._initElement()
    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M105.876 50.4141C103.103 50.4141 100.834 52.6828 100.834 55.4557V71.337C100.834 79.2524 94.3806 85.7057 86.4652 85.7057H34.5361C26.6206 85.7057 20.1673 79.2524 20.1673 71.337V44.6161C20.1673 36.7007 26.6206 30.2474 34.5361 30.2474H55.459C58.2319 30.2474 60.5006 27.9786 60.5006 25.2057C60.5006 22.4328 58.2319 20.1641 55.459 20.1641H34.5361C21.0748 20.1641 10.084 31.1549 10.084 44.6161V71.2866C10.084 84.7982 21.0748 95.7891 34.5361 95.7891H55.459V100.831H35.2923C32.5194 100.831 30.2507 103.099 30.2507 105.872C30.2507 108.645 32.5194 110.914 35.2923 110.914H85.709C88.4819 110.914 90.7506 108.645 90.7506 105.872C90.7506 103.099 88.4819 100.831 85.709 100.831H65.5423V95.7891H86.4652C99.9769 95.7891 110.917 84.7982 110.917 71.337V55.4557C110.917 52.6828 108.649 50.4141 105.876 50.4141Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M99.1701 12.9558C95.3384 9.12411 89.0868 9.12411 85.2047 12.9558L63.828 34.3324L60.5509 54.1966C59.9459 57.877 63.1222 61.0533 66.8026 60.4483L86.6164 57.1208L107.993 35.7441C111.825 31.9124 111.825 25.6608 107.993 21.7787L99.1701 12.9558ZM71.3401 49.6591L73.1047 39.0716L92.2126 19.9637L101.036 28.7866L81.8772 47.9449L71.3401 49.6591Z" fill="#3D00C3"/>
<ellipse style="${this.colorStyle}" cx="30.2507" cy="40.3346" rx="5.04167" ry="5.04167" fill="#3D00C3"/>
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
    if (!this.width && !this.height) {
      this.width = '24'
      this.height = '24'
    }
    let contentStyle = 'object-fit: content;'
    if (this.width) contentStyle += `width: ${this.width}px;`
    if (this.height) contentStyle += `height: ${this.height}px;`
    this.contentStyle = contentStyle
    if (this.color) this.colorStyle = `fill: ${this.color}`
  }

  _setState() {
    // @ts-ignore
    this.props.forEach(key => this[key as keyof typeof ComputerEdit] = this.getAttribute(key));
  }
}
export default ComputerEdit