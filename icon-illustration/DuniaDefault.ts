class DuniaDefault extends HTMLElement {
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
<path d="M21.9993 11.9994C21.9993 6.47675 17.5223 1.99976 11.9996 1.99976C6.47699 1.99976 2 6.47675 2 11.9994C2 17.522 6.47699 21.999 11.9996 21.999C17.5223 21.999 21.9993 17.522 21.9993 11.9994Z" stroke="#989899" stroke-width="1.7142" stroke-miterlimit="10"/>
<path d="M12.0143 5.98389V7.14389C12.4843 7.14389 13.3843 8.64389 13.4943 11.3939H12.0143V12.5639H13.4943C13.3843 15.3139 12.4843 16.8139 12.0143 16.8139V17.9739C15.3243 17.9739 18.0143 15.2939 18.0143 11.9839C18.0143 8.66389 15.3143 5.98389 12.0143 5.98389ZM16.8043 11.3939H14.6643C14.6043 10.0939 14.3943 8.88389 14.0343 7.94389C13.9743 7.79389 13.9043 7.64389 13.8443 7.51389C15.4243 8.16389 16.5943 9.62389 16.8043 11.3939ZM13.8343 16.4439C13.8943 16.3039 13.9643 16.1639 14.0143 16.0139C14.3843 15.0639 14.5943 13.8639 14.6543 12.5639H16.7943C16.5943 14.3239 15.4243 15.7939 13.8343 16.4439Z" fill="#989899"/>
<path d="M12.0143 7.14389V5.98389C8.71429 5.98389 6.02429 8.66389 6.02429 11.9739C6.02429 15.2839 8.71429 17.9639 12.0143 17.9639V16.8039C11.5443 16.8039 10.6543 15.3039 10.5343 12.5539H12.0143V11.3839H10.5243C10.6443 8.64389 11.5343 7.14389 12.0143 7.14389ZM7.21429 12.5639H9.36429C9.41429 13.8639 9.63429 15.0739 9.99429 16.0139C10.0543 16.1639 10.1143 16.3139 10.1743 16.4439C8.59429 15.7939 7.43429 14.3239 7.21429 12.5639ZM9.99429 7.93389C9.63429 8.88389 9.41429 10.0839 9.36429 11.3839H7.21429C7.43429 9.62389 8.59429 8.15389 10.1743 7.49389C10.1143 7.64389 10.0543 7.78389 9.99429 7.93389Z" fill="#D1D1D2"/>
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
    this.props.forEach(key => this[key as keyof typeof DuniaDefault] = this.getAttribute(key));
  }
}
export default DuniaDefault