class LogOutDefault extends HTMLElement {
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
<path d="M51.6798 20.6504H90.8798C91.8398 20.6504 92.6398 21.3988 92.6398 22.2969V105.671C92.6398 106.569 91.8398 107.318 90.8798 107.318H51.6798C50.7198 107.318 49.9198 106.569 49.9198 105.671V22.3468C49.8664 21.3988 50.6664 20.6504 51.6798 20.6504Z" fill="#989899"/>
<path d="M116.907 61.1044L100.853 46.0861C100.16 45.4375 99.04 45.4375 98.3466 46.0861L93.0133 51.0756C92.32 51.7242 92.32 52.772 93.0133 53.4206L97.12 57.2625H60.4266C59.4666 57.2625 58.6666 58.0109 58.6666 58.909V65.5949C58.6666 66.493 59.4666 67.2415 60.4266 67.2415H97.12L93.0133 71.0834C92.32 71.732 92.32 72.7798 93.0133 73.4284L98.3466 78.4179C99.04 79.0665 100.16 79.0665 100.853 78.4179L116.907 63.3996C117.6 62.8008 117.6 61.753 116.907 61.1044Z" fill="#E8E8E8"/>
<path d="M52.6933 10.9704C52.2133 10.671 51.6266 10.5712 51.0933 10.7708L12.2133 22.7955C11.3066 23.0449 10.6666 23.8432 10.6666 24.7414V104.773L51.0933 117.246C52.0533 117.546 53.0133 117.047 53.3333 116.198C53.3866 116.049 53.44 115.849 53.44 115.699V12.3176C53.44 11.8186 53.1733 11.3197 52.6933 10.9704Z" fill="#D1D1D2"/>
<path d="M40.9599 68.9965C43.9054 68.9965 46.2933 66.7627 46.2933 64.0071C46.2933 61.2514 43.9054 59.0176 40.9599 59.0176C38.0144 59.0176 35.6266 61.2514 35.6266 64.0071C35.6266 66.7627 38.0144 68.9965 40.9599 68.9965Z" fill="#E8E8E8"/>
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
    this.props.forEach(key => this[key as keyof typeof LogOutDefault] = this.getAttribute(key));
  }
}
export default LogOutDefault