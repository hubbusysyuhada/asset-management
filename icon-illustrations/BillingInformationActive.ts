class BillingInformationActive extends HTMLElement {
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
<path d="M103.177 33.2389H24.8791C22.9028 33.2389 21.3333 31.6615 21.3333 29.8024V19.4365C21.3333 17.5211 22.9028 16 24.8791 16H103.119C105.096 16 106.665 17.5211 106.665 19.4365V29.8024C106.723 31.6615 105.096 33.2389 103.177 33.2389Z" fill="#3D00C3"/>
<path d="M93.7044 24.6201H34.3558C32.8445 24.6201 31.6238 25.7507 31.6238 27.1505V105.917C31.6238 106.67 31.9725 107.424 32.6701 107.909L37.4366 111.408C38.3666 112.108 39.7036 112.162 40.6917 111.516L45.9233 108.124C46.8533 107.532 48.1321 107.532 49.0622 108.124L54.1774 111.516C55.1075 112.162 56.3863 112.162 57.3745 111.516L62.4316 108.178C63.3616 107.532 64.6405 107.532 65.6286 108.178L70.6858 111.516C71.6158 112.162 72.8946 112.162 73.8828 111.516L78.9981 108.124C79.9281 107.478 81.2069 107.478 82.137 108.124L87.3685 111.516C88.3567 112.162 89.6936 112.108 90.6236 111.408L95.3901 107.909C96.0295 107.424 96.4364 106.724 96.4364 105.917V27.1505C96.4364 25.7507 95.2158 24.6201 93.7044 24.6201Z" fill="#DBC8F9"/>
<line x1="40.454" y1="41.5152" x2="83.7776" y2="41.5152" stroke="#3D00C3" stroke-width="0.7" stroke-linecap="round"/>
<line x1="40.454" y1="51.7125" x2="83.7776" y2="51.7125" stroke="#3D00C3" stroke-width="0.7" stroke-linecap="round"/>
<line x1="40.454" y1="61.9059" x2="72.7717" y2="61.9059" stroke="#3D00C3" stroke-width="0.7" stroke-linecap="round"/>
<path d="M76.3628 101.333C85.4804 101.333 92.8716 94.1696 92.8716 85.333C92.8716 76.4965 85.4804 69.333 76.3628 69.333C67.2452 69.333 59.8539 76.4965 59.8539 85.333C59.8539 94.1696 67.2452 101.333 76.3628 101.333Z" fill="#FFC401"/>
<path d="M76.309 80.2285C75.2417 80.2285 74.3878 81.1251 74.3878 82.0906V93.5389C74.3878 94.5733 75.3128 95.4009 76.309 95.4009C77.3053 95.4009 78.2303 94.5044 78.2303 93.5389V82.0906C78.2303 81.1251 77.4476 80.2285 76.309 80.2285Z" fill="#3D00C3"/>
<path d="M76.3744 78.5744C77.7264 78.5744 78.7938 77.5399 78.7938 76.2296C78.7938 74.9192 77.7264 73.8848 76.3744 73.8848C75.0224 73.8848 73.955 74.9192 73.955 76.2296C73.955 77.5399 75.0224 78.5744 76.3744 78.5744Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof BillingInformationActive] = this.getAttribute(key));
  }
}
export default BillingInformationActive