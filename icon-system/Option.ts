class Option extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M18.9025 17.4988L20.6925 15.7031C21.0825 15.3118 21.0825 14.6798 20.6925 14.2886C20.3025 13.8973 19.6725 13.8973 19.2825 14.2886L17.4925 16.0843L15.7025 14.2886C15.3125 13.8973 14.6825 13.8973 14.2925 14.2886C13.9025 14.6798 13.9025 15.3118 14.2925 15.7031L16.0825 17.4988L14.2925 19.2945C13.9025 19.6858 13.9025 20.3178 14.2925 20.7091C14.4925 20.9097 14.7425 21 15.0025 21C15.2625 21 15.5125 20.8997 15.7125 20.7091L17.5025 18.9133L19.2925 20.7091C19.4925 20.9097 19.7425 21 20.0025 21C20.2625 21 20.5125 20.8997 20.7125 20.7091C21.1025 20.3178 21.1025 19.6858 20.7125 19.2945L18.9025 17.4988Z" />
<path style="${this.colorStyle}"  d="M13.5125 3.29344C13.1225 2.90219 12.4925 2.90219 12.1025 3.29344L6.9125 8.50007L4.7025 6.27296C4.3125 5.88171 3.6825 5.88171 3.2925 6.27296C2.9025 6.6642 2.9025 7.29622 3.2925 7.68747L6.2125 10.6269C6.4125 10.8275 6.6625 10.9178 6.9225 10.9178C7.1825 10.9178 7.4325 10.8175 7.6325 10.6269L13.5225 4.71799C13.9025 4.32674 13.9025 3.68469 13.5125 3.29344Z" />
<path style="${this.colorStyle}"  d="M4.99273 20.0066C4.73273 20.0066 4.48273 19.9063 4.28273 19.7157C3.89273 19.3245 3.89273 18.6924 4.28273 18.3012L18.2827 4.25633C18.6727 3.86508 19.3027 3.86508 19.6927 4.25633C20.0827 4.64758 20.0827 5.2796 19.6927 5.67085L5.69273 19.7157C5.50273 19.9063 5.25273 20.0066 4.99273 20.0066Z" />
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
    this.props.forEach(key => this[key as keyof typeof Option] = this.getAttribute(key));
  }
}
export default Option