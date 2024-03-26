class AnalyticsDefault extends HTMLElement {
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
<path d="M64.0428 114C57.7855 114 52.7076 108.922 52.7076 102.665V70.1536C52.7076 63.8962 57.7855 58.8184 64.0428 58.8184C70.3002 58.8184 75.378 63.8962 75.378 70.1536V102.665C75.378 108.922 70.3002 114 64.0428 114Z" fill="#D1D1D2"/>
<path d="M28.3352 114C22.0779 114 17 108.923 17 102.656V89.7815C17 83.5242 22.0779 78.4463 28.3352 78.4463C34.5925 78.4463 39.6704 83.5242 39.6704 89.7815V102.665C39.6794 108.923 34.6015 114 28.3352 114Z" fill="#E8E8E8"/>
<path d="M99.7407 114C93.4834 114 88.4055 108.922 88.4055 102.665V53.3987C88.4055 47.1414 93.4834 42.0635 99.7407 42.0635C105.998 42.0635 111.076 47.1414 111.076 53.3987V102.656C111.085 108.922 106.007 114 99.7407 114Z" fill="#989899"/>
<path d="M31.4689 59.4939L44.0825 47.6815L65.4024 42.9008L75.8193 23.3996L98.9488 19.6182L99.417 22.4812L77.701 26.0285L67.3291 45.4397L45.4781 50.3375L32.9814 62.0419L31.4689 59.4939Z" fill="#989899"/>
<path d="M64.0441 50.7428C66.759 50.7428 68.9599 48.5419 68.9599 45.827C68.9599 43.112 66.759 40.9111 64.0441 40.9111C61.3292 40.9111 59.1283 43.112 59.1283 45.827C59.1283 48.5419 61.3292 50.7428 64.0441 50.7428Z" fill="#D1D1D2"/>
<path d="M28.3362 66.1109C31.0512 66.1109 33.252 63.91 33.252 61.1951C33.252 58.4802 31.0512 56.2793 28.3362 56.2793C25.6213 56.2793 23.4204 58.4802 23.4204 61.1951C23.4204 63.91 25.6213 66.1109 28.3362 66.1109Z" fill="#D1D1D2"/>
<path d="M94.593 30.9893L92.3062 29.5488L97.4201 21.4007L89.2631 16.2868L90.7036 14L101.138 20.5454L94.593 30.9893Z" fill="#989899"/>
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
    this.props.forEach(key => this[key as keyof typeof AnalyticsDefault] = this.getAttribute(key));
  }
}
export default AnalyticsDefault