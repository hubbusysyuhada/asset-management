class HomeDefault extends HTMLElement {
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
<g clip-path="url(#clip0_2757_3160)">
<path d="M80.7122 79.6113H48.3804V113.964H80.7122V79.6113Z" fill="#E8E8E8"/>
<path d="M104.515 62.8414V111.707C104.515 112.94 103.518 113.937 102.284 113.937H75.2011C73.9676 113.937 72.9704 112.94 72.9704 111.707V82.9701H57.5918C56.4108 82.9701 55.4661 83.9148 55.4661 85.0958V111.707C55.4661 112.94 54.4688 113.937 53.2354 113.937H24.7351C23.5016 113.937 22.5044 112.94 22.5044 111.707V62.8414L63.5228 31.2969L104.515 62.8414Z" fill="#D1D1D2"/>
<path d="M104.515 63.9439V111.707C104.515 112.94 103.518 113.964 102.258 113.964H75.2011C73.9676 113.964 72.9441 112.967 72.9441 111.707V85.2273C72.9441 83.9938 71.9469 82.9703 70.6872 82.9703H63.5228V35.8635C63.5228 34.0002 65.6747 32.9505 67.1444 34.0789L103.649 62.1593C104.2 62.6055 104.515 63.2616 104.515 63.9439Z" fill="#D1D1D2"/>
<path d="M106.247 46.9122V27.3609C106.247 26.3637 105.434 25.5501 104.437 25.5501H90.7901C89.7929 25.5239 88.9793 26.3374 88.9793 27.3609V32.8458C88.9793 33.2657 88.5069 33.5019 88.1658 33.2394L65.2028 15.5776C64.2056 14.8166 62.8409 14.8166 61.8437 15.5776L6.07652 58.4593C4.86932 59.3778 4.65938 61.1099 5.57789 62.3171L14.7106 74.2053C15.6291 75.4125 17.3612 75.6225 18.5684 74.704L63.2083 40.3514C63.392 40.2202 63.6545 40.2202 63.8119 40.3514L108.452 74.704C109.659 75.6225 111.391 75.4125 112.31 74.2053L121.442 62.3171C122.361 61.1099 122.151 59.3778 120.944 58.4593L106.431 47.3059C106.3 47.2009 106.247 47.0697 106.247 46.9122Z" fill="#989899"/>
</g>
<defs>
<clipPath id="clip0_2757_3160">
<rect width="117.019" height="98.9638" fill="white" transform="translate(5.00006 15)"/>
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
    this.props.forEach(key => this[key as keyof typeof HomeDefault] = this.getAttribute(key));
  }
}
export default HomeDefault