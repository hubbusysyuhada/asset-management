class Reload extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M19.6965 10.5837C19.5866 10.5837 19.4767 10.5637 19.3668 10.5237L15.7296 9.23476C15.2101 9.0549 14.9403 8.47536 15.1201 7.95577C15.3 7.43618 15.8795 7.16639 16.3991 7.34625L19.097 8.30549L20.0562 5.60761C20.2361 5.08802 20.8157 4.80824 21.3352 4.99809C21.8548 5.17795 22.1246 5.7575 21.9448 6.27709L20.6558 9.91423C20.4959 10.3239 20.1062 10.5837 19.6965 10.5837Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M11.4326 21.3652C6.22668 21.3652 2 17.1285 2 11.9326C2 6.73667 6.22668 2.5 11.4326 2.5C15.0398 2.5 18.2772 4.50842 19.8859 7.73589C20.1357 8.2255 19.9259 8.83502 19.4363 9.07483C18.9467 9.31465 18.3472 9.1148 18.0974 8.62519C16.8283 6.07719 14.2704 4.49843 11.4326 4.49843C7.33581 4.49843 3.99843 7.83581 3.99843 11.9326C3.99843 16.0294 7.33581 19.3667 11.4326 19.3667C14.2704 19.3667 16.8283 17.788 18.0974 15.24C18.3472 14.7404 18.9467 14.5405 19.4363 14.7903C19.9259 15.0401 20.1357 15.6397 19.8859 16.1293C18.2772 19.3568 15.0398 21.3652 11.4326 21.3652Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Reload] = this.getAttribute(key));
  }
}
export default Reload