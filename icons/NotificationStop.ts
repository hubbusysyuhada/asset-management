class NotificationStop extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M14.6858 5.25049C14.9661 5.36504 15.2375 5.5069 15.4989 5.67268L14.0768 7.09474C13.4417 6.74642 12.7451 6.54545 12.014 6.54545C8.98598 6.54545 6.55028 9.99301 6.61731 13.0789L6.64867 14.5229L4.00243 17.1691C3.96883 16.4103 4.28593 15.5678 4.83409 14.8631L4.83412 13.1192C4.76592 9.97935 6.64516 6.35644 9.33497 5.25342V4.72727C9.33497 4.00395 9.61684 3.31026 10.1186 2.7988C10.6203 2.28734 11.3008 2 12.0104 2C12.72 2 13.4005 2.28734 13.9022 2.7988C14.404 3.31026 14.6858 4.00396 14.6858 4.72727V5.25049ZM12.9022 4.72727C12.9022 4.74573 12.9017 4.76414 12.9006 4.78246C12.6101 4.74603 12.3142 4.72727 12.014 4.72727C11.7113 4.72727 11.413 4.74634 11.1203 4.78335C11.1192 4.76474 11.1186 4.74603 11.1186 4.72727C11.1186 4.48617 11.2126 4.25494 11.3798 4.08445C11.547 3.91396 11.7739 3.81818 12.0104 3.81818C12.2469 3.81818 12.4738 3.91396 12.641 4.08445C12.8083 4.25494 12.9022 4.48617 12.9022 4.72727Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M16.7466 10.0819L18.1266 8.7018C18.8316 10.0755 19.2262 11.6514 19.1938 13.1216L19.1555 14.8576C20.5323 16.6278 20.4826 19.2727 17.0538 19.2727H14.6858C14.6858 19.996 14.404 20.6897 13.9022 21.2012C13.4005 21.7127 12.72 22 12.0104 22C11.3008 22 10.6203 21.7127 10.1186 21.2012C9.61684 20.6897 9.33497 19.996 9.33497 19.2727H7.5557L9.37388 17.4545H17.0538C17.8157 17.4545 18.2267 16.5435 17.7309 15.9538C17.49 15.6673 17.3616 15.3028 17.3699 14.9286L17.4106 13.0808C17.4328 12.0757 17.1894 11.0322 16.7466 10.0819ZM11.1186 19.2727C11.1186 19.5138 11.2126 19.7451 11.3798 19.9156C11.547 20.086 11.7739 20.1818 12.0104 20.1818C12.2469 20.1818 12.4738 20.086 12.641 19.9156C12.8083 19.7451 12.9022 19.5138 12.9022 19.2727H11.1186Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L19.7071 5.70711Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof NotificationStop] = this.getAttribute(key));
  }
}
export default NotificationStop