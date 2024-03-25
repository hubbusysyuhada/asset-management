class OpenWeb extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M16.5455 22H7.45455C4.44545 22 2 19.5545 2 16.5455V7.45455C2 4.44545 4.44545 2 7.45455 2H13.8182V3.81818H7.45455C5.44545 3.81818 3.81818 5.44545 3.81818 7.45455V16.5455C3.81818 18.5545 5.44545 20.1818 7.45455 20.1818H16.5455C18.5545 20.1818 20.1818 18.5545 20.1818 16.5455V10.1818H22V16.5455C22 19.5545 19.5545 22 16.5455 22Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M12.218 10.2628C11.8271 10.6537 11.8271 11.2901 12.218 11.6901C12.6089 12.081 13.2453 12.081 13.6453 11.6901L19.5362 5.79918C19.5544 5.94463 19.5634 6.081 19.5816 6.20827C19.6271 6.59918 19.6725 6.94463 19.7089 7.19009C19.7271 7.30827 19.7362 7.40827 19.7544 7.481L19.7634 7.56281V7.581V7.59009C19.8544 8.13554 20.3634 8.51736 20.918 8.42645C21.4634 8.33554 21.8453 7.82645 21.7543 7.27191V7.26281V7.24463L21.7453 7.17191C21.7362 7.10827 21.718 7.01736 21.7089 6.90827C21.6725 6.681 21.6362 6.35372 21.5907 5.981C21.4998 5.22645 21.418 4.29009 21.418 3.51736V2.49918H20.4089C19.6362 2.49918 18.6998 2.41736 17.9453 2.32645C17.5725 2.281 17.2453 2.23554 17.018 2.20827C16.8998 2.19009 16.8089 2.181 16.7543 2.17191L16.6816 2.16281H16.6634C16.118 2.07191 15.5998 2.45372 15.5089 2.99918C15.418 3.54463 15.7998 4.06281 16.3453 4.15372H16.3544H16.3725L16.4544 4.16281C16.518 4.17191 16.618 4.19009 16.7453 4.20827C16.9907 4.24463 17.3271 4.29009 17.7271 4.33554C17.8543 4.35372 17.9907 4.36281 18.1362 4.381L12.218 10.2628Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof OpenWeb] = this.getAttribute(key));
  }
}
export default OpenWeb