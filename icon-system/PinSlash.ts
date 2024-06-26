class PinSlash extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M12.4207 3.45371C13.5425 2.33184 15.3614 2.33184 16.4833 3.45371L20.546 7.51637C21.6679 8.63825 21.6679 10.4572 20.546 11.579L17.1604 14.9646L19.8008 17.605C20.1748 17.9789 20.1748 18.5852 19.8008 18.9592C19.4269 19.3332 18.8205 19.3332 18.4466 18.9592L16.0834 16.596L15.674 18.8142C15.394 20.3311 13.5272 20.9115 12.4364 19.8208L8.98476 16.3691L6.83948 18.5144C6.46552 18.8884 5.85922 18.8884 5.48526 18.5144C5.1113 18.1405 5.1113 17.5342 5.48525 17.1602L7.63054 15.0149L4.17891 11.5633C3.08815 10.4725 3.66858 8.6057 5.18551 8.32571L7.40369 7.91629L5.04048 5.55309C4.66652 5.17913 4.66652 4.57283 5.04048 4.19887C5.41444 3.82491 6.02075 3.82491 6.3947 4.19887L9.0351 6.83926L12.4207 3.45371ZM9.0351 9.54771L9.01673 9.56608L5.53313 10.2091L13.7906 18.4666L14.4336 14.983L14.452 14.9646L9.0351 9.54771ZM15.8062 13.6104L10.3893 8.19348L13.7749 4.80793C14.1488 4.43397 14.7551 4.43397 15.1291 4.80793L19.1918 8.87059C19.5657 9.24455 19.5657 9.85086 19.1918 10.2248L15.8062 13.6104Z" />
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
    this.props.forEach(key => this[key as keyof typeof PinSlash] = this.getAttribute(key));
  }
}
export default PinSlash