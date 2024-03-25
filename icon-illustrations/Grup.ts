class Grup extends HTMLElement {
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
<path d="M67.5928 78.5833H25.6065C23.6157 78.5833 22 76.9676 22 74.9769V74.1546C22 60.3851 33.2666 48.83 47.036 49.0681C60.4016 49.2989 71.1993 60.2481 71.1993 73.6641V74.9769C71.1993 76.9676 69.5836 78.5833 67.5928 78.5833Z" fill="#3D00C3"/>
<path d="M58.7294 37.2954C57.5609 30.8543 52.5623 26 46.5972 26C40.6322 26 35.6408 30.8543 34.4723 37.2954C32.6547 37.6056 31.2554 39.4016 31.2554 41.5727C31.2554 43.9602 32.9504 45.9004 35.0349 45.9004C35.1143 45.9004 35.1864 45.8932 35.2658 45.886C37.1844 50.8773 41.541 54.3684 46.6045 54.3684C51.6679 54.3684 56.0173 50.8773 57.9432 45.886C58.0225 45.8932 58.0946 45.9004 58.174 45.9004C60.2585 45.9004 61.9535 43.9602 61.9535 41.5727C61.9463 39.4016 60.547 37.6056 58.7294 37.2954Z" fill="#FFC401"/>
<path d="M102.394 102.831H48.9174C46.9266 102.831 45.3109 101.215 45.3109 99.2244V97.2985C45.3109 80.3121 59.2102 66.1243 76.1966 66.4201C92.6853 66.7086 106 80.2112 106 96.7576V99.2172C106 101.215 104.385 102.831 102.394 102.831Z" fill="#7D5BCA"/>
<path d="M90.616 51.9017C89.1734 43.953 83.0136 37.9663 75.6564 37.9663C68.2993 37.9663 62.1394 43.953 60.6969 51.9017C58.4536 52.2839 56.7225 54.5055 56.7225 57.1743C56.7225 60.1172 58.8143 62.5191 61.3893 62.5191C61.4831 62.5191 61.5768 62.5119 61.6706 62.5046C64.0436 68.6573 69.4173 72.9706 75.6564 72.9706C81.8956 72.9706 87.2692 68.6645 89.6423 62.5046C89.736 62.5119 89.8298 62.5191 89.9236 62.5191C92.4986 62.5191 94.5903 60.1244 94.5903 57.1743C94.5903 54.5055 92.8592 52.2839 90.616 51.9017Z" fill="#FFC401"/>
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
    this.props.forEach(key => this[key as keyof typeof Grup] = this.getAttribute(key));
  }
}
export default Grup