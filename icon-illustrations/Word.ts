class Word extends HTMLElement {
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
<path d="M72.5286 24H40.0082C35.6094 24 32.0082 27.6013 32.0082 32V96C32.0082 100.399 35.6094 104 40.0082 104H88.0082C92.4069 104 96.0082 100.399 96.0082 96V47.4795C96.0082 45.255 95.1268 43.1144 93.5486 41.5446L78.472 26.4596C76.8938 24.8814 74.7616 24 72.5286 24Z" fill="#F9F5FE"/>
<path d="M71.9412 66.6187H32V95.4623H71.9412C73.4019 95.4623 74.5939 94.3123 74.5939 92.902V69.1706C74.5939 67.7687 73.4019 66.6187 71.9412 66.6187Z" fill="#7D5BCA"/>
<path d="M68.8938 64.0923H32.0082V92.9359H68.8938C70.6063 92.9359 72.0082 91.5844 72.0082 89.9391V67.0975C72.0082 65.4438 70.6063 64.0923 68.8938 64.0923Z" fill="#165BB8"/>
<path d="M58.0567 86.7403H55.3368L52.0126 74.6941L48.6716 86.7403H45.9517L41.4103 70.2954H44.6086L47.3284 81.393L50.3924 70.2954H53.6159L56.68 81.393L59.3998 70.2954H62.6149L58.0567 86.7403Z" fill="white"/>
<path d="M72.5291 24V43.2823C72.5291 45.5992 74.4094 47.4795 76.7263 47.4795L96.0086 47.4711C96.0086 45.2466 95.1272 43.106 93.549 41.5362L78.4724 26.4596C76.8942 24.8814 74.762 24 72.5291 24Z" fill="#3D00C3"/>
<path d="M88.6298 57.8721H39.3958C38.4808 57.8721 37.7337 57.125 37.7337 56.21C37.7337 55.295 38.4808 54.5479 39.3958 54.5479H88.6298C89.5448 54.5479 90.2919 55.295 90.2919 56.21C90.2919 57.125 89.5448 57.8721 88.6298 57.8721Z" fill="#7D5BCA"/>
<path d="M63.8995 47.48H39.3958C38.4808 47.48 37.7337 46.7329 37.7337 45.8179C37.7337 44.9029 38.4808 44.1558 39.3958 44.1558H63.8995C64.8145 44.1558 65.5616 44.9029 65.5616 45.8179C65.5616 46.7413 64.8229 47.48 63.8995 47.48Z" fill="#7D5BCA"/>
<path d="M63.8995 37.0957H39.3958C38.4808 37.0957 37.7337 36.3486 37.7337 35.4336C37.7337 34.5186 38.4808 33.7715 39.3958 33.7715H63.8995C64.8145 33.7715 65.5616 34.5186 65.5616 35.4336C65.5616 36.3486 64.8229 37.0957 63.8995 37.0957Z" fill="#7D5BCA"/>
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
    this.props.forEach(key => this[key as keyof typeof Word] = this.getAttribute(key));
  }
}
export default Word