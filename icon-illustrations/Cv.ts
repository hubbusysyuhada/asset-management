class Cv extends HTMLElement {
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
<path d="M72.5466 22H38.4033C33.7774 22 30 25.7774 30 30.4033V97.5967C30 102.214 33.7774 106 38.4033 106H88.7984C93.4161 106 97.2016 102.223 97.2016 97.5967V46.6469C97.2016 44.3054 96.2716 42.0699 94.6236 40.4138L78.7797 24.5781C77.1236 22.9301 74.88 22 72.5466 22Z" fill="#7D5BCA"/>
<path d="M72.5457 22V42.2494C72.5457 44.6807 74.52 46.655 76.9512 46.655L97.1925 46.6469C97.1925 44.3054 96.2624 42.0699 94.6144 40.4138L78.7788 24.5781C77.1226 22.9301 74.879 22 72.5457 22Z" fill="#3D00C3"/>
<path d="M89.44 61.9679H69.3864C68.4237 61.9679 67.6405 61.1847 67.6405 60.222C67.6405 59.2593 68.4237 58.4761 69.3864 58.4761H89.44C90.4027 58.4761 91.186 59.2593 91.186 60.222C91.186 61.1847 90.4027 61.9679 89.44 61.9679Z" fill="#3D00C3"/>
<path d="M89.4414 74.2716H37.7491C36.7864 74.2716 36.0032 73.4884 36.0032 72.5257C36.0032 71.563 36.7864 70.7798 37.7491 70.7798H89.4414C90.4041 70.7798 91.1873 71.563 91.1873 72.5257C91.1873 73.4966 90.4041 74.2716 89.4414 74.2716Z" fill="#3D00C3"/>
<path d="M89.4414 86.5748H37.7491C36.7864 86.5748 36.0032 85.7916 36.0032 84.8289C36.0032 83.8662 36.7864 83.083 37.7491 83.083H89.4414C90.4041 83.083 91.1873 83.8662 91.1873 84.8289C91.1873 85.7998 90.4041 86.5748 89.4414 86.5748Z" fill="#3D00C3"/>
<path d="M89.4414 98.8776H37.7491C36.7864 98.8776 36.0032 98.0944 36.0032 97.1317C36.0032 96.169 36.7864 95.3857 37.7491 95.3857H89.4414C90.4041 95.3857 91.1873 96.169 91.1873 97.1317C91.1873 98.1025 90.4041 98.8776 89.4414 98.8776Z" fill="#3D00C3"/>
<path d="M57.8284 61.9684H40.8342C39.072 61.9684 37.6361 60.5325 37.6361 58.7703V32.4999C37.6361 30.7377 39.072 29.3018 40.8342 29.3018H57.8284C59.5907 29.3018 61.0266 30.7377 61.0266 32.4999V58.7703C61.0266 60.5407 59.5988 61.9684 57.8284 61.9684Z" fill="#FFC401"/>
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
    this.props.forEach(key => this[key as keyof typeof Cv] = this.getAttribute(key));
  }
}
export default Cv