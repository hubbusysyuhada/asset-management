class BasicGuideActive extends HTMLElement {
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
<path d="M101.413 100.338L94.4815 96.2276L93.3113 32.0452C93.2428 28.4592 90.355 25.5379 86.8563 25.527L25 25.209L26.6119 113.683L88.4682 114.001C90.7674 114.013 92.7538 112.764 93.8284 110.878L101.413 100.338Z" fill="#7D5BCA"/>
<path d="M99.8732 98.8244L93.0818 94.797L91.9352 31.9075C91.8681 28.3938 89.0384 25.5313 85.6103 25.5206L25 25.209L26.5794 111.901L87.1897 112.213C89.4426 112.224 91.3889 111.001 92.4419 109.152L99.8732 98.8244Z" fill="#EAF7FF"/>
<path d="M96.4924 102.776L48.0982 102.534L46.4863 14.0596L94.8805 14.3015C98.3794 14.3235 101.267 17.2448 101.336 20.8197L102.71 96.3043C102.779 99.9014 99.9913 102.798 96.4924 102.776Z" fill="#3D00C3"/>
<path d="M48.1054 102.539L34.6435 102.474L33.0205 14L46.4824 14.065L48.1054 102.539Z" fill="#7D5BCA"/>
<path d="M34.6407 102.474L26.5919 113.69L25.0022 25.2152L33.0399 14L34.6407 102.474Z" fill="#7D5BCA"/>
<path d="M92.1624 46.7C92.1624 56.5576 84.1772 64.4878 74.3195 64.4878C64.4618 64.4878 56.4766 56.5026 56.4766 46.7C56.4766 36.8974 64.4618 28.9121 74.3195 28.9121C84.1772 28.9121 92.1624 36.8974 92.1624 46.7Z" fill="#FFC401"/>
<path d="M74.296 41.2993C73.0294 41.2993 72.0381 42.3457 72.0381 43.5572V57.4351C72.0381 58.7017 73.0844 59.693 74.296 59.693C75.5075 59.693 76.5539 58.6466 76.5539 57.4351V43.5572C76.5539 42.3457 75.5626 41.2993 74.296 41.2993Z" fill="#3D00C3"/>
<path d="M74.3032 39.2632C75.8544 39.2632 77.1118 38.0058 77.1118 36.4546C77.1118 34.9035 75.8544 33.646 74.3032 33.646C72.7521 33.646 71.4946 34.9035 71.4946 36.4546C71.4946 38.0058 72.7521 39.2632 74.3032 39.2632Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof BasicGuideActive] = this.getAttribute(key));
  }
}
export default BasicGuideActive