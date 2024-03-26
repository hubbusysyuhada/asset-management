class Duration extends HTMLElement {
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
<path d="M68.6095 112.055C88.5422 112.055 104.701 93.8378 104.701 71.3651C104.701 48.8925 88.5422 30.6748 68.6095 30.6748C48.6767 30.6748 32.5181 48.8925 32.5181 71.3651C32.5181 93.8378 48.6767 112.055 68.6095 112.055Z" fill="#DBC8F9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M64.0001 32.6196C42.6015 32.6196 25.2544 49.9667 25.2544 71.3654C25.2544 92.7641 42.6015 110.111 64.0001 110.111C85.3988 110.111 102.746 92.7641 102.746 71.3654C102.746 49.9667 85.3988 32.6196 64.0001 32.6196ZM21.3652 71.3654C21.3652 47.8188 40.4535 28.7305 64.0001 28.7305C87.5467 28.7305 106.635 47.8188 106.635 71.3654C106.635 94.912 87.5467 114 64.0001 114C40.4535 114 21.3652 94.912 21.3652 71.3654Z" fill="#3D00C3"/>
<path d="M74.0534 15.9443H60.1011V23.2754H74.0534V15.9443Z" fill="#FFC401"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M52.0112 15.9446C52.0112 14.8706 52.8818 14 53.9558 14H74.0433C75.1173 14 75.9879 14.8706 75.9879 15.9446V23.2756C75.9879 24.3496 75.1173 25.2202 74.0433 25.2202H53.9558C52.8818 25.2202 52.0112 24.3496 52.0112 23.2756V15.9446ZM55.9004 17.8892V21.3311H72.0987V17.8892H55.9004Z" fill="#3D00C3"/>
<path d="M69.9304 30.6667V23.2773L58.0685 23.2773V30.6667H69.9304Z" fill="#3D00C3"/>
<path d="M93.5303 44.2241L97.3412 40.4132C98.1222 39.6322 98.1222 38.3659 97.3412 37.5848L91.782 32.0256C91.001 31.2446 89.7346 31.2446 88.9536 32.0256L85.1428 35.8365L93.5303 44.2241Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M62.6346 72.7488L43.5903 53.9402C42.8262 53.1855 42.8186 51.9543 43.5732 51.1902C44.3279 50.4261 45.5591 50.4184 46.3232 51.1731L64.0638 68.6941L76.3448 57.6555C77.1435 56.9375 78.373 57.003 79.091 57.8018C79.8089 58.6005 79.7434 59.83 78.9447 60.5479L65.301 72.8114C64.5356 73.4994 63.3668 73.4719 62.6346 72.7488Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof Duration] = this.getAttribute(key));
  }
}
export default Duration