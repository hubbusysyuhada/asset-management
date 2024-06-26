class StaterPackage extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24.5" cy="24.5" r="22.5" fill="#F4EBFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5715 22.9761H9.15271V42.2032C9.15271 42.7648 9.60729 43.2262 10.1639 43.2262H40.0551C40.6118 43.2262 41.0664 42.7648 41.0664 42.2032V22.9761H24.5715Z" fill="#7C57D0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.15271 22.9761V27.7302H20.2668H35.398C37.0029 27.7302 36.7617 28.8435 36.7617 30.4483V43.2362H40.0551C40.6118 43.2362 41.0664 42.7749 41.0664 42.2132C41.0664 38.3116 41.0664 34.41 41.0664 30.5084V22.9761C30.4347 22.9761 19.7937 22.9761 9.15271 22.9761Z" fill="#531FC8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.0752 23.889H42.4761C42.8843 23.889 43.2276 23.528 43.2276 23.0766V17.7909C43.2276 17.3496 42.8936 16.9785 42.4761 16.9785C30.9074 16.9785 19.3294 16.9785 7.75146 16.9785C7.33398 16.9785 7 17.3396 7 17.7909V23.0766C7 23.5179 7.33398 23.889 7.75146 23.889H9.15232H41.0752Z" fill="#7C57D0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.4758 16.9785H38.3381C38.7463 16.9785 39.0896 17.3396 39.0896 17.7909V22.9763V23.0766C39.0896 23.5179 38.7556 23.889 38.3381 23.889H41.0749H42.4758C42.884 23.889 43.2272 23.528 43.2272 23.0766V17.7909C43.2272 17.3396 42.884 16.9785 42.4758 16.9785Z" fill="#531FC8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.7088 16.9786C36.9465 13.9998 34.9705 5.60486 29.2928 7.1996C27.0755 7.82144 25.8231 9.93773 25.3221 12.3048H26.3426C26.5282 12.3048 26.7137 12.3449 26.8807 12.4251C27.0941 12.5254 27.2796 12.6759 27.4281 12.8664C29.97 11.2416 32.1873 14.411 30.2762 16.9786H33.7088Z" fill="#FFC401"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9033 12.3048C24.4023 9.93773 23.1499 7.82144 20.9326 7.1996C15.255 5.60486 13.2789 13.9998 16.5167 16.9786H19.9585C18.0474 14.411 20.2647 11.2416 22.8066 12.8664C23.0571 12.5254 23.4468 12.3048 23.8828 12.3048H24.9033Z" fill="#FFC401"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.8693 12.425C26.7023 12.3548 26.5261 12.3047 26.3313 12.3047H25.3108H24.9026H23.8821C23.446 12.3047 23.0564 12.5253 22.8059 12.8664C22.6204 13.1271 22.4998 13.4481 22.4998 13.7891V16.9786H27.7043V13.7891C27.7043 13.4381 27.593 13.1171 27.4074 12.8664C27.2682 12.6758 27.0827 12.5153 26.8693 12.425Z" fill="#FFC401"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9031 12.3052C24.4021 9.93813 23.1497 7.82184 20.9324 7.2C18.7337 6.58818 17.0917 7.46077 16.099 8.94518C16.9896 8.44369 18.1029 8.28321 19.4017 8.64428C21.2571 9.16583 22.4261 10.7204 23.0569 12.606C23.2888 12.4155 23.5764 12.3052 23.8826 12.3052H24.9031Z" fill="#DBA300"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.7144 13.7891C27.7144 13.4381 27.6031 13.1171 27.4176 12.8664C27.2691 12.6758 27.0836 12.5153 26.8702 12.425C26.7032 12.3548 26.527 12.3047 26.3321 12.3047H25.3116C25.525 12.405 25.7106 12.5554 25.859 12.746C26.0445 12.9967 26.1652 13.3277 26.1652 13.6687V16.9685H26.7125H27.7144V13.7891Z" fill="#DBA300"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.7065 16.9786C36.9442 13.9998 34.9682 5.60486 29.2905 7.1996C28.7988 7.34001 28.3535 7.55064 27.9546 7.82144C32.3242 7.61082 33.9477 13.8092 31.8974 16.9887L33.7065 16.9786Z" fill="#DBA300"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.6375 16.9785L15.7928 25.915L19.411 23.9091L21.7024 25.7947L24.2444 16.9785C23.3723 16.9785 22.5003 16.9785 21.6375 16.9785Z" fill="#FFC401"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.5846 16.9785C27.399 16.9785 27.2135 16.9785 27.0372 16.9785C26.6847 16.9785 26.3414 16.9785 25.9889 16.9785L28.5309 25.7947L30.8223 23.9091L34.4312 25.915L28.5865 16.9785H27.5846Z" fill="#FFC401"/>
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
    this.props.forEach(key => this[key as keyof typeof StaterPackage] = this.getAttribute(key));
  }
}
export default StaterPackage