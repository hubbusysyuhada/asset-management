class DeveloperPlatformActive extends HTMLElement {
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
<path d="M107.385 26.667H20.1243C18.6968 26.667 17.5369 27.7866 17.5369 29.13V92.9008H109.928V29.13C109.928 27.7866 108.768 26.667 107.385 26.667Z" fill="#7D5BCA"/>
<path d="M109.482 99.3962H18.4737C14.1463 99.3962 10.6666 96.0822 10.6666 92.007V89.8574C10.6666 89.1409 11.2466 88.6035 12.005 88.6035H115.995C116.753 88.6035 117.333 89.1857 117.333 89.8574V92.007C117.333 96.0822 113.809 99.3962 109.482 99.3962Z" fill="#3D00C3"/>
<path d="M103.86 32.4912H23.6484V83.0062H103.86V32.4912Z" fill="#F9F5FE"/>
<path d="M68.7956 92.3635H59.2041C57.6873 92.3635 56.4828 91.1543 56.4828 89.6317V88.6465H71.5169V89.6317C71.5169 91.1095 70.2678 92.3635 68.7956 92.3635Z" fill="#FFC401"/>
<path d="M54.877 66.3459C54.5201 66.3459 54.2079 66.2563 53.8956 66.0324L46.6239 60.8376L46.4454 59.7628C46.4008 59.0911 46.6239 58.4641 47.07 58.0611L53.7171 51.881C54.3863 51.2541 55.457 51.2989 56.0816 51.9706C56.7061 52.6423 56.6615 53.7171 55.9923 54.3441L50.5051 59.4941L55.8585 63.3006C56.6169 63.838 56.7953 64.868 56.26 65.6294C55.9031 66.0772 55.4124 66.3459 54.877 66.3459Z" fill="#3D00C3"/>
<path d="M70.7582 66.3431C70.2229 66.3431 69.7321 66.1192 69.3752 65.6266C68.8399 64.8653 69.0183 63.8353 69.7767 63.2979L75.1302 59.4913L69.5983 54.3861C68.9291 53.7591 68.8845 52.6843 69.5091 52.0126C70.1336 51.3408 71.2043 51.2961 71.8735 51.923L79.1452 58.6404L79.1898 59.76C79.1452 60.387 78.8329 60.9692 78.3422 61.3274L71.6951 66.0744C71.4274 66.2535 71.0705 66.3431 70.7582 66.3431Z" fill="#3D00C3"/>
<path d="M60.0074 69.3463C59.829 69.3463 59.6505 69.3015 59.4721 69.2568C58.5798 68.9881 58.0891 68.0028 58.4014 67.152L63.4871 51.3436C63.7548 50.448 64.7363 50.0002 65.5839 50.2688C66.4761 50.5375 66.9669 51.5228 66.6546 52.3736L61.5688 68.182C61.3904 68.8985 60.7212 69.3463 60.0074 69.3463Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof DeveloperPlatformActive] = this.getAttribute(key));
  }
}
export default DeveloperPlatformActive