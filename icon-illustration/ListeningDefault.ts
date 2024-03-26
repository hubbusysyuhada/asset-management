class ListeningDefault extends HTMLElement {
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
<path d="M22.0001 12C22.0001 6.47715 17.523 2 12.0001 2C6.47727 2 2.00012 6.47715 2.00012 12C2.00012 17.5228 6.47727 22 12.0001 22C17.523 22 22.0001 17.5228 22.0001 12Z" fill="#D1D1D2"/>
<path d="M16.4911 14.7597C16.1811 14.7597 15.9311 14.5097 15.9311 14.1997V11.4996C15.9311 9.32954 14.171 7.56949 12.001 7.56949C9.83089 7.56949 8.07084 9.32954 8.07084 11.4996V14.1997C8.07084 14.5097 7.82083 14.7597 7.51082 14.7597C7.20081 14.7597 6.95081 14.5097 6.95081 14.1997V11.4996C6.95081 8.70952 9.22088 6.43945 12.011 6.43945C14.801 6.43945 17.0711 8.70952 17.0711 11.4996V14.1997C17.0611 14.5097 16.8011 14.7597 16.4911 14.7597Z" fill="#989899"/>
<path d="M9.19111 16.5599H8.63109C7.70106 16.5599 6.94104 15.7998 6.94104 14.8698V12.6197C6.94104 11.6897 7.70106 10.9297 8.63109 10.9297H9.19111C10.1211 10.9297 10.8812 11.6897 10.8812 12.6197V14.8698C10.8812 15.7998 10.1211 16.5599 9.19111 16.5599ZM8.63109 12.0597C8.32108 12.0597 8.07107 12.3097 8.07107 12.6197V14.8698C8.07107 15.1798 8.32108 15.4298 8.63109 15.4298H9.19111C9.50112 15.4298 9.75113 15.1798 9.75113 14.8698V12.6197C9.75113 12.3097 9.50112 12.0597 9.19111 12.0597H8.63109Z" fill="#989899"/>
<path d="M15.3698 16.5599H14.8098C13.8798 16.5599 13.1198 15.7998 13.1198 14.8698V12.6197C13.1198 11.6897 13.8798 10.9297 14.8098 10.9297H15.3698C16.2998 10.9297 17.0599 11.6897 17.0599 12.6197V14.8698C17.0499 15.7998 16.2998 16.5599 15.3698 16.5599ZM14.8098 12.0597C14.4998 12.0597 14.2498 12.3097 14.2498 12.6197V14.8698C14.2498 15.1798 14.4998 15.4298 14.8098 15.4298H15.3698C15.6798 15.4298 15.9298 15.1798 15.9298 14.8698V12.6197C15.9298 12.3097 15.6798 12.0597 15.3698 12.0597H14.8098Z" fill="#989899"/>
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
    this.props.forEach(key => this[key as keyof typeof ListeningDefault] = this.getAttribute(key));
  }
}
export default ListeningDefault