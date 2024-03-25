class Guidebook extends HTMLElement {
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
<rect width="128" height="128" rx="10" fill="#F9F5FE"/>
<g clip-path="url(#clip0_376_2911)">
<path d="M49.1421 32L51.3361 58.1155L49.1421 84.4838H48.9207C44.9151 84.4838 41.6744 87.8774 41.6744 92.0719V36.9533C41.6744 34.2132 43.7879 32 46.4046 32H49.1421Z" fill="#2F00A7"/>
<path d="M88.9362 88.8048V98.079H48.0149C46.3241 98.079 44.9554 96.6457 44.9554 94.8752V91.9875C44.9554 90.217 46.3241 88.7837 48.0149 88.7837L88.9362 88.8048Z" fill="#F9F5FE"/>
<path d="M89.0167 32H49.1421V84.4838H48.9207C44.9151 84.4838 41.6744 87.8774 41.6744 92.0719V94.812C41.6744 99.0065 44.9151 102.4 48.9207 102.4H89.0167C89.5401 102.4 89.9628 101.957 89.9628 101.409V98.8589C89.9628 98.3109 89.5401 97.8683 89.0167 97.8683H48.9207C47.3104 97.8683 46.0222 96.4982 46.0222 94.833V92.0929C46.0222 90.4067 47.3305 89.0577 48.9207 89.0577H89.0167C89.5401 89.0577 89.9628 88.6151 89.9628 88.0671V84.4838V32.9907C89.9628 32.4426 89.5401 32 89.0167 32Z" fill="#3D00C3"/>
<path d="M48.9207 84.4839C44.9151 84.4839 41.6744 87.8774 41.6744 92.0719V94.812C41.6744 99.0065 44.9151 102.4 48.9207 102.4H89.0167C89.5401 102.4 89.9628 101.957 89.9628 101.409V98.859C89.9628 98.311 89.5401 97.8683 89.0167 97.8683H48.9207C47.3104 97.8683 46.0222 96.4983 46.0222 94.8331V92.093C46.0222 90.4068 47.3305 89.0578 48.9207 89.0578H89.0167C89.5401 89.0578 89.9628 88.6151 89.9628 88.0671V84.4839H48.9207Z" fill="#7D5BCA"/>
<path d="M80.8445 51.3071H58.2805C57.7772 51.3071 57.3545 50.8855 57.3545 50.3375V40.8314C57.3545 40.3045 57.7571 39.8618 58.2805 39.8618H80.8445C81.3478 39.8618 81.7705 40.2834 81.7705 40.8314V50.3375C81.7503 50.8855 81.3478 51.3071 80.8445 51.3071Z" fill="#FFC401"/>
</g>
<defs>
<clipPath id="clip0_376_2911">
<rect width="48.2884" height="70.4" fill="white" transform="translate(41.6744 32)"/>
</clipPath>
</defs>
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
    this.props.forEach(key => this[key as keyof typeof Guidebook] = this.getAttribute(key));
  }
}
export default Guidebook