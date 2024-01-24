class Whatsapp extends HTMLElement {
  id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
  props = ['height', 'width', 'color']
  contentStyle = '';
  colorStyle = '';
  height = ''
  width = ''
  color = ''
  constructor() {
    super()
    this._initElement()
    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_443_3349)">
<path style="${this.colorStyle}" d="M1.44043 22.5604L2.89697 17.2804C1.95028 15.642 1.44043 13.8212 1.44043 11.9274C1.44043 6.17428 6.17428 1.44043 11.9641 1.44043C17.754 1.44043 22.5604 6.17428 22.5604 11.9274C22.5604 17.6806 17.754 22.5604 11.9641 22.5604C10.1434 22.5604 8.39559 21.978 6.82974 21.1039L1.44043 22.5604Z" fill="white"/>
<path style="${this.colorStyle}" d="M7.12051 19.2105L7.44844 19.3924C8.79567 20.2298 10.3615 20.7396 12 20.7396C16.7701 20.7396 20.7392 16.7705 20.7392 11.9274C20.7392 7.0842 16.7701 3.26074 11.9637 3.26074C7.15722 3.26074 3.26074 7.12092 3.26074 11.9274C3.26074 13.6025 3.73429 15.241 4.60797 16.6249L4.82659 16.9529L3.98922 20.0115L7.12051 19.2105Z" fill="#49C190"/>
<path style="${this.colorStyle}" d="M9.16011 7.04851L8.46835 7.01221C8.24972 7.01221 8.03151 7.08522 7.8859 7.23083C7.55796 7.52206 7.01181 8.06821 6.8662 8.79668C6.61127 9.88898 7.01181 11.1999 7.9585 12.5108C8.90519 13.8218 10.726 15.9338 13.9303 16.8441C14.95 17.1354 15.751 16.9535 16.4065 16.5529C16.9164 16.225 17.2439 15.7155 17.3532 15.169L17.4625 14.6591C17.4988 14.5135 17.4262 14.3312 17.2806 14.2586L14.9867 13.2026C14.8411 13.1296 14.6587 13.1663 14.5498 13.3119L13.6394 14.4772C13.5664 14.5502 13.4575 14.5865 13.3482 14.5502C12.7291 14.3316 10.6538 13.4579 9.52476 11.2729C9.48846 11.1636 9.48846 11.0543 9.56106 10.9817L10.4351 9.99871C10.5082 9.88939 10.5445 9.74378 10.5082 9.63447L9.45216 7.26754C9.41462 7.15741 9.30572 7.04851 9.16011 7.04851Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_443_3349">
<rect width="21.12" height="21.12" fill="white" transform="translate(1.44043 1.44043)"/>
</clipPath>
</defs>
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
    if (!this.width && !this.height) {
      this.width = '24'
      this.height = '24'
    }
    let contentStyle = 'object-fit: content;'
    if (this.width) contentStyle += `width: ${this.width}px;`
    if (this.height) contentStyle += `height: ${this.height}px;`
    this.contentStyle = contentStyle
    if (this.color) this.colorStyle = `fill: ${this.color}`
  }

  _setState() {
    // @ts-ignore
    this.props.forEach(key => this[key as keyof typeof Whatsapp] = this.getAttribute(key));
  }
}
export default Whatsapp