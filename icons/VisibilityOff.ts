class VisibilityOff extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 2.29289C3.68342 1.90237 4.31658 1.90237 4.70711 2.29289L21.2071 18.7929C21.5976 19.1834 21.5976 19.8166 21.2071 20.2071C20.8166 20.5976 20.1834 20.5976 19.7929 20.2071L3.29289 3.70711C2.90237 3.31658 2.90237 2.68342 3.29289 2.29289Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7.58952 6.00374C5.45704 7.01693 3.55091 8.78875 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C14.2453 19 16.4611 18.2472 18.3642 16.7784L16.936 15.3502C15.4103 16.4608 13.6917 17 12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C5.41562 9.70355 7.20038 8.24612 9.11403 7.52825L7.58952 6.00374ZM18.4241 14.0099C18.9653 13.4146 19.4646 12.7282 19.9083 11.9487C17.9314 8.59614 14.9268 7 12 7C11.8116 7 11.6229 7.00661 11.4341 7.01989L9.68278 5.26857C10.444 5.09002 11.2203 5 12 5C15.8122 5 19.542 7.15186 21.83 11.2807C22.0536 11.6844 22.0564 12.1821 21.8397 12.5876C21.2632 13.6665 20.5884 14.6133 19.8391 15.4249L18.4241 14.0099ZM10.8247 9.23895C9.752 9.69615 9 10.7603 9 12C9 13.6569 10.3431 15 12 15C13.2397 15 14.3038 14.248 14.761 13.1753L10.8247 9.23895ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof VisibilityOff] = this.getAttribute(key));
  }
}
export default VisibilityOff