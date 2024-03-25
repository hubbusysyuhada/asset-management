class FaqActive extends HTMLElement {
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
<path d="M100.783 14.7729H45.1173C37.8579 14.7729 31.9006 20.6976 31.9006 27.9896V32.4819H82.2606C89.5199 32.4819 95.4772 38.4066 95.4772 45.6986V78.5774H100.783C108.043 78.5774 114 72.6527 114 65.3607V27.9896C113.967 20.6976 108.043 14.7729 100.783 14.7729Z" fill="#3D00C3"/>
<path d="M82.8827 31.8564H27.2166C19.9247 31.8564 14 37.7811 14 45.0731V82.4768C14 89.7362 19.9247 95.6934 27.2166 95.6934H60.6163C62.0486 95.6934 63.1229 97.0281 62.7974 98.4279C61.9184 102.204 60.5512 106.176 58.5654 110.277C57.6539 112.1 59.7048 113.988 61.4627 112.914C66.4759 109.789 73.6376 104.58 79.66 97.2234C80.4412 96.2468 81.6457 95.6934 82.8827 95.6934C90.1421 95.6934 96.0994 89.7687 96.0994 82.4768V45.0731C96.0668 37.7811 90.1421 31.8564 82.8827 31.8564Z" fill="#7D5BCA"/>
<path d="M78.6249 74.5161H32.4396C31.4139 74.5161 30.6127 73.0979 30.6127 71.407C30.6127 69.716 31.446 68.2979 32.4396 68.2979H78.6249C79.6505 68.2979 80.4518 69.716 80.4518 71.407C80.4518 73.0979 79.6184 74.5161 78.6249 74.5161Z" fill="#FFC401"/>
<path d="M78.6249 58.3676H32.4396C31.4139 58.3676 30.6127 56.9494 30.6127 55.2585C30.6127 53.5676 31.446 52.1494 32.4396 52.1494H78.6249C79.6505 52.1494 80.4518 53.5676 80.4518 55.2585C80.4518 56.9494 79.6184 58.3676 78.6249 58.3676Z" fill="#FFC401"/>
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
    this.props.forEach(key => this[key as keyof typeof FaqActive] = this.getAttribute(key));
  }
}
export default FaqActive