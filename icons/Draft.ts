class Draft extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M18.8428 6.22383L15.1456 2.80733C14.6321 2.3049 13.8105 2.00345 13.0916 2.00345H6.92961C4.15671 1.90296 2 4.01315 2 6.52528V17.3777C2 19.8898 4.15671 22 6.92961 22H15.351C15.9672 22 16.378 21.5981 16.378 20.9951C16.378 20.3922 15.9672 19.9903 15.351 19.9903H6.92961C5.28641 19.9903 4.05401 18.7845 4.05401 17.3777V6.52528C4.05401 5.11849 5.28641 3.91267 6.92961 3.91267H13.0916C13.0916 3.91267 13.0916 3.91267 13.1943 3.91267V6.72625C13.1943 7.7311 14.0159 8.53498 15.1456 8.53498H17.7131V10.0423C17.7131 10.6452 18.1239 11.0471 18.7401 11.0471C19.3563 11.0471 19.7671 10.6452 19.7671 10.0423V8.13304C19.6644 7.42965 19.3563 6.72625 18.8428 6.22383Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M20.2817 12.3529C19.7682 11.8505 18.8439 11.8505 18.3304 12.3529L15.2494 15.3674L14.7359 18.181C14.6332 18.6835 15.1467 19.1859 15.6602 19.0854L18.5358 18.583L21.6168 15.5684C22.1303 15.066 22.1303 14.1616 21.6168 13.6592L20.2817 12.3529ZM16.6872 17.0757L16.8926 15.8699L19.152 13.6592L20.179 14.6641L17.9196 16.8747L16.6872 17.0757Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Draft] = this.getAttribute(key));
  }
}
export default Draft