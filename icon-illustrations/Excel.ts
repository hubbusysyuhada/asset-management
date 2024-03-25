class Excel extends HTMLElement {
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
<path d="M72.5205 24H40C35.6013 24 32 27.6013 32 32V96C32 100.399 35.6013 104 40 104H88C92.3987 104 96 100.399 96 96V47.4795C96 45.255 95.1186 43.1144 93.5404 41.5446L78.4554 26.4596C76.8856 24.8814 74.745 24 72.5205 24Z" fill="#F9F5FE"/>
<path d="M71.9412 66.6191H32V95.4628H71.9412C73.4019 95.4628 74.5939 94.3127 74.5939 92.9025V69.1711C74.5939 67.7692 73.4019 66.6191 71.9412 66.6191Z" fill="#7D5BCA"/>
<path d="M68.8856 64.0928H32V92.9364H68.8856C70.5981 92.9364 72 91.5849 72 89.9396V67.098C72 65.4443 70.5981 64.0928 68.8856 64.0928Z" fill="#0F7B41"/>
<path d="M56.3189 87.3286L52.0041 81.1586L47.6726 87.3286H43.9286L50.2161 78.699L44.5162 70.8921H48.2518L51.9873 76.231L55.7397 70.8921H59.4837L53.7586 78.699L60.0713 87.3286H56.3189Z" fill="white"/>
<path d="M72.52 24V43.2823C72.52 45.5992 74.4004 47.4795 76.7173 47.4795L95.9996 47.4711C95.9996 45.2466 95.1181 43.106 93.54 41.5362L78.455 26.4596C76.8852 24.8814 74.7446 24 72.52 24Z" fill="#3D00C3"/>
<path d="M88.6203 57.8721H39.3779C38.4629 57.8721 37.7158 57.125 37.7158 56.21C37.7158 55.295 38.4629 54.5479 39.3779 54.5479H88.6119C89.5269 54.5479 90.2741 55.295 90.2741 56.21C90.2741 57.125 89.5353 57.8721 88.6203 57.8721Z" fill="#7D5BCA"/>
<path d="M63.89 47.48H39.3779C38.4629 47.48 37.7158 46.7329 37.7158 45.8179C37.7158 44.9029 38.4629 44.1558 39.3779 44.1558H63.89C64.805 44.1558 65.5521 44.9029 65.5521 45.8179C65.5521 46.7413 64.805 47.48 63.89 47.48Z" fill="#7D5BCA"/>
<path d="M63.89 37.0957H39.3779C38.4629 37.0957 37.7158 36.3486 37.7158 35.4336C37.7158 34.5186 38.4629 33.7715 39.3779 33.7715H63.89C64.805 33.7715 65.5521 34.5186 65.5521 35.4336C65.5521 36.3486 64.805 37.0957 63.89 37.0957Z" fill="#7D5BCA"/>
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
    this.props.forEach(key => this[key as keyof typeof Excel] = this.getAttribute(key));
  }
}
export default Excel