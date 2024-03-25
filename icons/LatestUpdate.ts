class LatestUpdate extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M11.4326 21.8652C6.22668 21.8652 2 17.6285 2 12.4326C2 7.23667 6.22668 3 11.4326 3C15.0398 3 18.2772 5.00842 19.8859 8.23589C20.1357 8.7255 19.9259 9.33502 19.4363 9.57483C18.9467 9.81465 18.3472 9.6148 18.0974 9.12519C16.8283 6.57719 14.2704 4.99843 11.4326 4.99843C7.33581 4.99843 3.99843 8.33581 3.99843 12.4326C3.99843 16.5294 7.33581 19.8667 11.4326 19.8667C14.2704 19.8667 16.8283 18.288 18.0974 15.74C18.3472 15.2404 18.9467 15.0405 19.4363 15.2903C19.9259 15.5401 20.1357 16.1397 19.8859 16.6293C18.2772 19.8568 15.0398 21.8652 11.4326 21.8652Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M14.0096 16.4295C13.7498 16.4295 13.5 16.3295 13.3001 16.1397L10.3025 13.142C10.1226 12.9522 10.0127 12.6924 10.0127 12.4326V8.43574C10.0127 7.88617 10.4623 7.43652 11.0119 7.43652C11.5615 7.43652 12.0111 7.88617 12.0111 8.43574V12.0229L14.719 14.7308C15.1087 15.1205 15.1087 15.75 14.719 16.1397C14.5192 16.3295 14.2694 16.4295 14.0096 16.4295Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M19.6965 11.0837C19.5866 11.0837 19.4767 11.0637 19.3668 11.0237L15.7296 9.73476C15.2101 9.5549 14.9403 8.97536 15.1201 8.45577C15.3 7.93618 15.8795 7.66639 16.3991 7.84625L19.097 8.80549L20.0562 6.10761C20.2361 5.58802 20.8157 5.30824 21.3352 5.49809C21.8548 5.67795 22.1246 6.2575 21.9448 6.77709L20.6558 10.4142C20.4959 10.8239 20.1062 11.0837 19.6965 11.0837Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof LatestUpdate] = this.getAttribute(key));
  }
}
export default LatestUpdate