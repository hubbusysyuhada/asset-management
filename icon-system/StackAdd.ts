class StackAdd extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M12 18.25C11.4477 18.25 11 17.8023 11 17.25V16H9.75C9.19772 16 8.75 15.5523 8.75 15C8.75 14.4477 9.19772 14 9.75 14H11V12.75C11 12.1977 11.4477 11.75 12 11.75C12.5523 11.75 13 12.1977 13 12.75V14H14.25C14.8023 14 15.25 14.4477 15.25 15C15.25 15.5523 14.8023 16 14.25 16H13V17.25C13 17.8023 12.5523 18.25 12 18.25Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5C18.1046 5 19 5.89543 19 7V8C19 8.05667 18.9976 8.11278 18.993 8.16825C20.1619 8.57811 21 9.69117 21 11V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V11C3 9.69118 3.83814 8.57811 5.00698 8.16825C5.00236 8.11278 5 8.05666 5 8V7C5 5.89543 5.89543 5 7 5ZM9 4H15V5H9V4ZM17 7V8H7V7H17ZM6 10H18C18.5523 10 19 10.4477 19 11V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V11C5 10.4477 5.44772 10 6 10Z" />
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
    this.props.forEach(key => this[key as keyof typeof StackAdd] = this.getAttribute(key));
  }
}
export default StackAdd