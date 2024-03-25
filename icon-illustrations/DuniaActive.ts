class DuniaActive extends HTMLElement {
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
<path d="M21.9993 11.9994C21.9993 6.47675 17.5223 1.99976 11.9996 1.99976C6.47699 1.99976 2 6.47675 2 11.9994C2 17.522 6.47699 21.999 11.9996 21.999C17.5223 21.999 21.9993 17.522 21.9993 11.9994Z" stroke="#3D00C3" stroke-width="1.7142" stroke-miterlimit="10"/>
<path d="M12.0142 5.98389V7.14389C12.4842 7.14389 13.3842 8.64389 13.4942 11.3939H12.0142V12.5639H13.4942C13.3842 15.3139 12.4842 16.8139 12.0142 16.8139V17.9739C15.3242 17.9739 18.0142 15.2939 18.0142 11.9839C18.0142 8.66389 15.3142 5.98389 12.0142 5.98389ZM16.8042 11.3939H14.6642C14.6042 10.0939 14.3942 8.88389 14.0342 7.94389C13.9742 7.79389 13.9042 7.64389 13.8442 7.51389C15.4242 8.16389 16.5942 9.62389 16.8042 11.3939ZM13.8342 16.4439C13.8942 16.3039 13.9642 16.1639 14.0142 16.0139C14.3842 15.0639 14.5942 13.8639 14.6542 12.5639H16.7942C16.5942 14.3239 15.4242 15.7939 13.8342 16.4439Z" fill="#3D00C3"/>
<path d="M12.0142 7.14389V5.98389C8.71423 5.98389 6.02423 8.66389 6.02423 11.9739C6.02423 15.2839 8.71423 17.9639 12.0142 17.9639V16.8039C11.5442 16.8039 10.6542 15.3039 10.5342 12.5539H12.0142V11.3839H10.5242C10.6442 8.64389 11.5342 7.14389 12.0142 7.14389ZM7.21423 12.5639H9.36423C9.41423 13.8639 9.63423 15.0739 9.99423 16.0139C10.0542 16.1639 10.1142 16.3139 10.1742 16.4439C8.59423 15.7939 7.43423 14.3239 7.21423 12.5639ZM9.99423 7.93389C9.63423 8.88389 9.41423 10.0839 9.36423 11.3839H7.21423C7.43423 9.62389 8.59423 8.15389 10.1742 7.49389C10.1142 7.64389 10.0542 7.78389 9.99423 7.93389Z" fill="#7D5BCA"/>
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
    this.props.forEach(key => this[key as keyof typeof DuniaActive] = this.getAttribute(key));
  }
}
export default DuniaActive