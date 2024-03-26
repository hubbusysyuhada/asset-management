class Database extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M12 2C8.3 2 2 2.7 2 5.5V8.5V10V12.5V14.5V18.5C2 21.3 8.3 22 12 22C15.7 22 22 21.3 22 18.5V14.5V12.5V10V8.5V5.5C22 2.7 15.7 2 12 2ZM20 14.4C19.6 14.9 17 16 12 16C7 16 4.4 14.9 4 14.4V12.5V12.2C6.2 13.2 9.6 13.5 12 13.5C14.4 13.5 17.8 13.2 20 12.2V12.5V14.4ZM20 8.5V9.9C19.6 10.4 17 11.5 12 11.5C7 11.5 4.4 10.4 4 9.9V8.5V7.7C6.2 8.7 9.6 9 12 9C14.4 9 17.8 8.7 20 7.7V8.5ZM12 20C7 20 4.4 18.9 4 18.4V16.7C6.2 17.7 9.6 18 12 18C14.4 18 17.8 17.7 20 16.7V18.4C19.6 18.9 17 20 12 20Z" />
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
    this.props.forEach(key => this[key as keyof typeof Database] = this.getAttribute(key));
  }
}
export default Database