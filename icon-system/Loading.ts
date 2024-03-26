class Loading extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M12.002 3.99707C16.412 3.99707 20.002 7.58707 20.002 11.9971C20.002 16.4071 16.412 19.9971 12.002 19.9971C7.59195 19.9971 4.00195 16.4071 4.00195 11.9971C4.00195 7.58707 7.59195 3.99707 12.002 3.99707ZM12.002 1.99707C6.48195 1.99707 2.00195 6.47707 2.00195 11.9971C2.00195 17.5171 6.48195 21.9971 12.002 21.9971C17.522 21.9971 22.002 17.5171 22.002 11.9971C22.002 6.47707 17.522 1.99707 12.002 1.99707Z" />
<path style="${this.colorStyle}"  d="M19.9517 12.8787C19.4617 17.3887 15.2017 20.7887 10.3917 19.8387C7.28167 19.2287 4.77167 16.7187 4.15167 13.6087C3.22167 8.79868 6.61167 4.53868 11.1217 4.04868C11.6217 3.98868 12.0017 3.56868 12.0017 3.05868C12.0017 2.45868 11.4717 1.98868 10.8817 2.05868C5.79167 2.62868 1.86167 7.00868 2.00167 12.2787C2.15167 17.4987 6.50167 21.8487 11.7217 21.9987C16.9917 22.1487 21.3717 18.2087 21.9417 13.1287C22.0117 12.5287 21.5417 12.0087 20.9417 12.0087C20.4317 11.9987 20.0117 12.3787 19.9517 12.8787Z" />
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
    this.props.forEach(key => this[key as keyof typeof Loading] = this.getAttribute(key));
  }
}
export default Loading