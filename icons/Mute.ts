class Mute extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M18.2071 7.20711C18.5976 6.81658 18.5976 6.18342 18.2071 5.79289C17.8166 5.40237 17.1834 5.40237 16.7929 5.79289L5.79289 16.7929C5.40237 17.1834 5.40237 17.8166 5.79289 18.2071C6.18342 18.5976 6.81658 18.5976 7.20711 18.2071L18.2071 7.20711Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M10.8639 8.6L15.3 5.87158L10.5716 10.6H8V13.1716L6.33126 14.8403C6.12404 14.5831 6 14.256 6 13.9V10.1C6 9.27157 6.67157 8.6 7.5 8.6H10.8639Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M16 16.2109L12.6673 14.1611L11.2135 15.615L15.7142 18.3831C16.7136 18.9978 18 18.2788 18 17.1055V8.82844L16 10.8284V16.2109Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Mute] = this.getAttribute(key));
  }
}
export default Mute